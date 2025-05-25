import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalForm from '../components/goals/GoalForm';
import TipsForGoals from '../components/goals/TipsForGoals';

const GoalsPageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 900px;
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

const GoalsListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const GoalsListTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const GoalItem = styled.div`
  background-color: #330066; /* Slightly darker background for individual goal items */
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

const GoalName = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const GoalDetails = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #555;
  border-radius: 5px;
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const ProgressBar = styled.div`
  height: 10px;
  width: ${({ progress }) => progress}%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  text-align: center;
  color: white;
  font-size: 0.8em;
  line-height: 10px;
`;

const SetFinancialGoalsPage = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = localStorage.getItem('financialGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financialGoals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <GoalsPageContainer>
      <PageTitle>Set Your Financial Goals</PageTitle>

      <GoalForm onSaveGoal={addGoal} />

      {/* Display existing goals - basic list for now */}
      <GoalsListContainer>
        <GoalsListTitle>Your Current Goals</GoalsListTitle>
        {goals.length === 0 ? (
          <p style={{ color: '#ccc', textAlign: 'center' }}>No goals set yet. Add one above!</p>
        ) : (
          goals.map((goal) => (
            <GoalItem key={goal.id}>
              <GoalName>{goal.name} ({goal.type})</GoalName>
              <GoalDetails>Target: ₹{goal.targetAmount.toLocaleString()} by {goal.targetDate}</GoalDetails>
              <GoalDetails>Saved: ₹{goal.currentAmount.toLocaleString()}</GoalDetails>
              <GoalDetails>Progress: {goal.progress}%</GoalDetails>
              <ProgressBarContainer>
                <ProgressBar progress={goal.progress}></ProgressBar>
              </ProgressBarContainer>
            </GoalItem>
          ))
        )}
      </GoalsListContainer>

      <TipsForGoals />
    </GoalsPageContainer>
  );
};

export default SetFinancialGoalsPage;