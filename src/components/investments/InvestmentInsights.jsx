import React from 'react';
import styled from 'styled-components';
// import { Pie } from 'react-chartjs-2'; // For later use with actual chart

const InsightsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InsightSection = styled.div`
  /* Specific styling for each section within insights */
`;

const SectionTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const KPICard = styled.div`
  background-color: #330066; /* Slightly darker than parent card */
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const KPIText = styled.p`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  strong {
    color: ${({ theme }) => theme.colors.primary};
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

const ChartPlaceholder = styled.div`
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a0050; /* Even darker for chart area */
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.2em;
  text-align: center;
`;


const InvestmentInsights = ({ investments }) => {
  // Placeholder data and logic for dynamic values
  const investmentDiversificationScore = '82%';
  const idleCashRatio = '12%';
  const projectedMonthlyROI = '₹2,100';
  const highestPerformingAsset = 'Mutual Funds';

  const forecastText = 'Your investments are projected to grow by 10.4% in the next 12 months based on current trends.';

  // Placeholder for chart data and options
  // const portfolioData = {
  //   labels: ['Mutual Funds', 'Stocks', 'Bonds', 'Crypto', 'FD', 'Gold'],
  //   datasets: [
  //     {
  //       data: [40000, 30000, 20000, 10000, 30000, 15000], // Example amounts
  //       backgroundColor: ['#7F00FF', '#00BFFF', '#FF4500', '#DAA520', '#32CD32', '#FFD700'],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       labels: {
  //         color: '#ffffff',
  //       },
  //     },
  //   },
  // };


  return (
    <InsightsContainer>
      <InsightSection>
        <SectionTitle>Portfolio Allocation</SectionTitle>
        <ChartPlaceholder>
          {/* <Pie data={portfolioData} options={chartOptions} /> */}
          Portfolio Allocation Chart Placeholder
        </ChartPlaceholder>
      </InsightSection>

      <InsightSection>
        <SectionTitle>KPIs</SectionTitle>
        <KPICard>
          <KPIText>Investment Diversification Score: <strong>{investmentDiversificationScore}</strong></KPIText>
          <KPIText>Idle Cash Ratio: <strong>{idleCashRatio}</strong></KPIText>
          <KPIText>Projected Monthly ROI: <strong>{projectedMonthlyROI}</strong></KPIText>
          <KPIText>Highest Performing Asset: <strong>{highestPerformingAsset}</strong></KPIText>
        </KPICard>

        <SectionTitle>Forecast</SectionTitle>
        <KPICard>
          <KPIText>{forecastText}</KPIText>
        </KPICard>

        <SectionTitle>Recommendations</SectionTitle>
        <RecommendationList>
          <RecommendationItem>Consider allocating more to debt mutual funds for diversification. [cite: 30]</RecommendationItem>
          <RecommendationItem>Reduce crypto exposure to limit volatility. [cite: 31]</RecommendationItem>
          <RecommendationItem>Start a monthly SIP of ₹3,000 to reach your 5-year goal. [cite: 31]</RecommendationItem>
        </RecommendationList>
      </InsightSection>
    </InsightsContainer>
  );
};

export default InvestmentInsights;