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
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const FormIcon = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const GoalForm = ({ onSaveGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [goalType, setGoalType] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goalName || !goalType || !targetAmount || !targetDate) {
      alert('Please fill in all goal details.');
      return;
    }
    const newGoal = {
      id: Date.now(),
      name: goalName,
      type: goalType,
      targetAmount: parseFloat(targetAmount),
      targetDate: targetDate,
      progress: 0, // New goals start at 0 progress
      currentAmount: 0, // Assume 0 saved initially
    };
    onSaveGoal(newGoal);
    // Clear form
    setGoalName('');
    setGoalType('');
    setTargetAmount('');
    setTargetDate('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle><FormIcon>🎯</FormIcon> Add a New Goal</FormTitle>
      <FieldGroup>
        <Input
          label="Goal Name"
          id="goalName"
          type="text"
          placeholder="e.g. Buy a house, Debt free, Emergency fund"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          required
        />
        <Input
          label="Goal Type"
          id="goalType"
          type="text"
          placeholder="e.g. Savings, Debt, Investment"
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          required
        />
        <Input
          label="Target Amount (₹)"
          id="targetAmount"
          type="number"
          placeholder="₹0.00"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          required
        />
        <Input
          label="Target Date"
          id="targetDate"
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          required
        />
      </FieldGroup>
      <Button primary type="submit" style={{ marginTop: '20px', width: '200px' }}>
        Save Goal
      </Button>
    </FormContainer>
  );
};

export default GoalForm;