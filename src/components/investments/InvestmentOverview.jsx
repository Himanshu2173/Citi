import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const OverviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const CardTitle = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CardValue = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;
`;

const InvestmentOverview = ({ totalInvestment, roi, riskLevel, forecast }) => {
  return (
    <OverviewContainer>
      <OverviewCard>
        <CardTitle>Total Investment</CardTitle>
        <CardValue>₹{totalInvestment.toLocaleString()}</CardValue>
      </OverviewCard>
      <OverviewCard>
        <CardTitle>ROI</CardTitle>
        <CardValue>{roi}%</CardValue>
      </OverviewCard>
      <OverviewCard>
        <CardTitle>Risk Level</CardTitle>
        <CardValue>{riskLevel}</CardValue>
      </OverviewCard>
      <OverviewCard>
        <CardTitle>1-Year Forecast</CardTitle>
        <CardValue>₹{forecast.toLocaleString()}</CardValue>
      </OverviewCard>
    </OverviewContainer>
  );
};

export default InvestmentOverview;