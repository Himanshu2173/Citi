import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IncomeForm from '../components/income/IncomeForm';
import IncomeHistoryTable from '../components/income/IncomeHistoryTable';

const TrackIncomeContainer = styled.div`
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

const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const SectionTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const SectionIcon = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const ForecastList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ForecastItem = styled.li`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  position: relative;
  padding-left: 1.5em;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    left: 0;
    font-size: 1.2em;
    line-height: 1;
  }
`;

const RecommendationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RecommendationItem = styled.li`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  position: relative;
  padding-left: 1.5em;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    font-size: 1.2em;
    line-height: 1;
  }
`;


const TrackIncomePage = () => {
  const [incomeEntries, setIncomeEntries] = useState([]);

  // Load income entries from local storage on initial render
  useEffect(() => {
    const storedIncome = localStorage.getItem('incomeEntries');
    if (storedIncome) {
      setIncomeEntries(JSON.parse(storedIncome));
    }
  }, []);

  // Save income entries to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('incomeEntries', JSON.stringify(incomeEntries));
  }, [incomeEntries]);

  const addIncome = (newEntry) => {
    setIncomeEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  // --- Income Forecast Data (Static for now, but can be dynamic) ---
  const incomeForecast = {
    next3Months: '1,20,000', 
    next6Months: '2,42,000', 
    next12Months: '4,95,000',
  };

  const recommendations = [
    'Consider diversifying your income streams (e.g., part-time or freelance work).', 
    'Allocate at least 20% of your monthly income to investments.', 
    'Track irregular income separately for better budgeting accuracy.', 
  ];
  // --- End of Income Forecast Data ---


  return (
    <TrackIncomeContainer>
      <PageTitle>Track Your Income</PageTitle>
      <IncomeForm onAddIncome={addIncome} />
      <IncomeHistoryTable incomeEntries={incomeEntries} />

      {/* Income Forecast Section */}
      <SectionContainer>
        <SectionTitle><SectionIcon>✔</SectionIcon> Income Forecast</SectionTitle>
        <p style={{ color: '#ccc', marginBottom: '1rem' }}>Based on your income history, your predicted income is:</p>
        <ForecastList>
          <ForecastItem>Next 3 Months: ₹{incomeForecast.next3Months}</ForecastItem>
          <ForecastItem>Next 6 Months: ₹{incomeForecast.next6Months}</ForecastItem>
          <ForecastItem>Next 12 Months: ₹{incomeForecast.next12Months}</ForecastItem>
        </ForecastList>
      </SectionContainer>

      {/* Recommendations Section */}
      <SectionContainer>
        <SectionTitle><SectionIcon>💡</SectionIcon> Recommendations</SectionTitle>
        <RecommendationList>
          {recommendations.map((rec, index) => (
            <RecommendationItem key={index}>{rec}</RecommendationItem>
          ))}
        </RecommendationList>
      </SectionContainer>

    </TrackIncomeContainer>
  );
};

export default TrackIncomePage;