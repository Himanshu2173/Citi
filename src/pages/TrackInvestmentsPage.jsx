import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InvestmentOverview from '../components/investments/InvestmentOverview';
import InvestmentForm from '../components/investments/InvestmentForm';
import InvestmentPortfolioTable from '../components/investments/InvestmentPortfolioTable';
import InvestmentInsights from '../components/investments/InvestmentInsights';

const TrackInvestmentsContainer = styled.div`
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

const TrackInvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);

  // Load investments from local storage on initial render
  useEffect(() => {
    const storedInvestments = localStorage.getItem('investments');
    if (storedInvestments) {
      setInvestments(JSON.parse(storedInvestments));
    }
  }, []);

  // Save investments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('investments', JSON.stringify(investments));
  }, [investments]);

  const addInvestment = (newInvestment) => {
    setInvestments((prevInvestments) => [...prevInvestments, newInvestment]);
  };

  // Calculate dynamic overview values (simplified for now)
  const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const roi = 7.8; // Static for now, can be calculated dynamically
  const riskLevel = 'Moderate'; // Static for now, can be calculated based on portfolio
  const forecast = totalInvestment * (1 + (10.4 / 100)); // Based on 10.4% growth mentioned in UI [cite: 30]

  return (
    <TrackInvestmentsContainer>
      <PageTitle>Track Your Investments</PageTitle>

      <InvestmentOverview
        totalInvestment={totalInvestment}
        roi={roi}
        riskLevel={riskLevel}
        forecast={forecast}
      />

      <InvestmentForm onAddInvestment={addInvestment} />

      <InvestmentPortfolioTable investments={investments} />

      <InvestmentInsights investments={investments} /> {/* Pass investments for potential future use in charts */}
    </TrackInvestmentsContainer>
  );
};

export default TrackInvestmentsPage;