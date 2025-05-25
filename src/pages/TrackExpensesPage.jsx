import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExpenseForm from '../components/expenses/ExpenseForm';
import ExpenseHistoryTable from '../components/expenses/ExpenseHistoryTable';
import Input from '../components/common/Input'; // Reusing common Input for filter

const TrackExpensesContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer */
`;

const PageTitle = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const FilterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: flex-start; /* Align items to the start */
  align-items: center;

  > div {
    flex: 1; /* Allow inputs to take available space */
    min-width: 150px; /* Minimum width for filter inputs */
  }
`;

const TrackExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');

  // Load expenses from local storage on initial render
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const expenseMonth = expenseDate.getMonth() + 1; // getMonth() is 0-indexed
    const expenseYear = expenseDate.getFullYear();

    const matchesMonth = filterMonth ? expenseMonth === parseInt(filterMonth) : true;
    const matchesYear = filterYear ? expenseYear === parseInt(filterYear) : true;

    return matchesMonth && matchesYear;
  }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

  // Generate unique years from expenses for filter dropdown
  const availableYears = [...new Set(expenses.map(exp => new Date(exp.date).getFullYear()))].sort((a, b) => b - a);

  return (
    <TrackExpensesContainer>
      <PageTitle>Track Your Expenses</PageTitle>

      <ExpenseForm onAddExpense={addExpense} />

      <FilterContainer>
        <h3>Filter Expenses:</h3>
        <div>
          <label htmlFor="filterMonth" style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontWeight: 'bold' }}>Month</label>
          <select
            id="filterMonth"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #555',
              borderRadius: '4px',
              backgroundColor: '#330066',
              color: '#fff',
              fontSize: '1em',
            }}
          >
            <option value="">All Months</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((monthNum) => (
              <option key={monthNum} value={monthNum}>
                {new Date(2000, monthNum - 1, 1).toLocaleString('en-US', { month: 'long' })}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filterYear" style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontWeight: 'bold' }}>Year</label>
          <select
            id="filterYear"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #555',
              borderRadius: '4px',
              backgroundColor: '#330066',
              color: '#fff',
              fontSize: '1em',
            }}
          >
            <option value="">All Years</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </FilterContainer>

      <ExpenseHistoryTable expenses={filteredExpenses} />
    </TrackExpensesContainer>
  );
};

export default TrackExpensesPage;