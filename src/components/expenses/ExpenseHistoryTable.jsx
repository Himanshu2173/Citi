import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow-x: auto; /* Enable horizontal scrolling for small screens */
`;

const TableTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.th`
  background-color: #4CAF50; /* Green header */
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #330066; /* Slightly darker row for even rows */
  }
`;

const TableData = styled.td`
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.1em;
  padding: ${({ theme }) => theme.spacing.large};
`;

const ExpenseHistoryTable = ({ expenses }) => {
  return (
    <TableContainer>
      <TableTitle>Expense History</TableTitle>
      {expenses.length === 0 ? (
        <EmptyMessage>No expenses recorded yet. Add one above!</EmptyMessage>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>Date</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Description</TableHeader>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableData>{expense.date}</TableData>
                <TableData>{expense.category}</TableData>
                <TableData>₹{expense.amount.toFixed(2)}</TableData>
                <TableData>{expense.description || '-'}</TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      )}
    </TableContainer>
  );
};

export default ExpenseHistoryTable;