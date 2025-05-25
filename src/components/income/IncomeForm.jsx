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

const incomeSources = [
  'Salary',
  'Freelancing',
  'Family Support',
  'Pension',
  'Investments',
  'Rent',
  'Dividends',
  'Other'
];

const incomeTypes = [
  'Full-Time',
  'Part-Time',
  'Occasional',
  'Passive',
  'Retirement',
  'Support',
  'Bonus',
  'Reimbursement'
];

const incomeFrequencies = [
  'Monthly',
  'Weekly',
  'Bi-Weekly',
  'Annually',
  'Quarterly',
  'Occasional',
  'One-Time'
];

const IncomeForm = ({ onAddIncome }) => {
  const [source, setSource] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [dateReceived, setDateReceived] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !type || !amount || !dateReceived || !frequency) {
      alert('Please fill in all required income details.');
      return;
    }
    const newIncome = {
      id: Date.now(), // Simple unique ID
      source,
      type,
      amount: parseFloat(amount),
      date: dateReceived,
      frequency,
    };
    onAddIncome(newIncome);
    // Clear form
    setSource('');
    setType('');
    setAmount('');
    setDateReceived('');
    setFrequency('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add Income</FormTitle>
      <FieldGroup>
        <div>
          <Label htmlFor="incomeSource">Source</Label>
          <Select
            id="incomeSource"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          >
            <option value="" disabled>Select income source</option>
            {incomeSources.map((src) => (
              <option key={src} value={src}>{src}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="incomeType">Type</Label>
          <Select
            id="incomeType"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="" disabled>Select income type</option>
            {incomeTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>
        <Input
          label="Amount (₹)"
          id="incomeAmount"
          type="number"
          placeholder="e.g., 50000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          label="Date Received"
          id="dateReceived"
          type="date"
          value={dateReceived}
          onChange={(e) => setDateReceived(e.target.value)}
          required
        />
        <div>
          <Label htmlFor="incomeFrequency">Frequency</Label>
          <Select
            id="incomeFrequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
          >
            <option value="" disabled>Select frequency</option>
            {incomeFrequencies.map((freq) => (
              <option key={freq} value={freq}>{freq}</option>
            ))}
          </Select>
        </div>
      </FieldGroup>
      <Button primary type="submit" style={{ marginTop: '20px', width: '200px' }}>
        Save Income
      </Button>
    </FormContainer>
  );
};

export default IncomeForm;