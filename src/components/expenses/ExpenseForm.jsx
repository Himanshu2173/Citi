import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const FormTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #330066; /* Slightly darker than card background for input */
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1em;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(127, 0, 255, 0.5);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.05em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #330066;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1em;
  outline: none;
  resize: vertical;
  min-height: 80px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(127, 0, 255, 0.5);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
    opacity: 0.7;
  }
`;

const expenseCategories = [
  'Groceries',
  'Utilities',
  'Rent',
  'Transport',
  'Dining Out',
  'Entertainment',
  'Shopping',
  'Healthcare',
  'Education',
  'Salary', // Changed from 'Other' to 'Salary' based on UI.pdf for Income tracking context
  'Freelancing', // Added based on UI.pdf for Income tracking context
  'Family Support', // Added based on UI.pdf for Income tracking context
  'Pension', // Added based on UI.pdf for Income tracking context
  'Investment', // Added for completeness
  'Debt Payment', // Added for completeness
  'Travel',
  'Insurance',
  'Miscellaneous', // For general other expenses
];

const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !category || !amount) {
      alert('Please fill in all required fields (Date, Category, Amount).');
      return;
    }
    const newExpense = {
      id: Date.now(), // Simple unique ID
      date,
      category,
      amount: parseFloat(amount),
      description,
    };
    onAddExpense(newExpense);
    // Clear form
    setDate('');
    setCategory('');
    setAmount('');
    setDescription('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add New Expense</FormTitle>
      <FieldGroup>
        <Input
          label="Date"
          id="expenseDate"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <div>
          <Label htmlFor="expenseCategory">Category</Label>
          <Select
            id="expenseCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {expenseCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
        </div>
        <Input
          label="Amount (₹)"
          id="expenseAmount"
          type="number"
          placeholder="e.g., 500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </FieldGroup>
      <Label htmlFor="expenseDescription">Description (Optional)</Label>
      <TextArea
        id="expenseDescription"
        placeholder="e.g., Monthly groceries shopping"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
      />
      <Button primary type="submit" style={{ marginTop: '20px' }}>
        Add Expense
      </Button>
    </FormContainer>
  );
};

export default ExpenseForm;