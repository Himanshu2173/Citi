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

const InvestmentForm = ({ onAddInvestment }) => {
  const [investmentName, setInvestmentName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [dateOfInvestment, setDateOfInvestment] = useState('');
  const [tenure, setTenure] = useState('');
  const [riskLevel, setRiskLevel] = useState('');

  const investmentCategories = [
    'Mutual Funds', 'Stocks', 'Bonds', 'Real Estate',
    'Gold', 'Cryptocurrency', 'Fixed Deposit', 'Other'
  ];

  const riskLevels = ['Low', 'Moderate', 'High'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!investmentName || !category || !amount || !dateOfInvestment || !riskLevel) {
      alert('Please fill in all required investment details.');
      return;
    }
    const newInvestment = {
      id: Date.now(),
      name: investmentName,
      category,
      amount: parseFloat(amount),
      date: dateOfInvestment,
      tenure: tenure ? parseInt(tenure) : null,
      riskLevel,
    };
    onAddInvestment(newInvestment);
    // Clear form
    setInvestmentName('');
    setCategory('');
    setAmount('');
    setDateOfInvestment('');
    setTenure('');
    setRiskLevel('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add Investment</FormTitle>
      <FieldGroup>
        <Input
          label="Investment Name"
          id="investmentName"
          type="text"
          placeholder="e.g., Axis Bluechip Fund"
          value={investmentName}
          onChange={(e) => setInvestmentName(e.target.value)}
          required
        />
        <div>
          <Label htmlFor="investmentCategory">Category</Label>
          <Select
            id="investmentCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {investmentCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
        </div>
        <Input
          label="Amount Invested (₹)"
          id="investmentAmount"
          type="number"
          placeholder="e.g., 10000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          label="Date of Investment"
          id="dateOfInvestment"
          type="date"
          value={dateOfInvestment}
          onChange={(e) => setDateOfInvestment(e.target.value)}
          required
        />
        <Input
          label="Tenure (Months)"
          id="tenure"
          type="number"
          placeholder="e.g., 12"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
        <div>
          <Label htmlFor="riskLevel">Risk Level</Label>
          <Select
            id="riskLevel"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
            required
          >
            <option value="" disabled>Select risk level</option>
            {riskLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </Select>
        </div>
      </FieldGroup>
      <Button primary type="submit" style={{ marginTop: '20px', width: '200px' }}>
        Save Investment
      </Button>
    </FormContainer>
  );
};

export default InvestmentForm;