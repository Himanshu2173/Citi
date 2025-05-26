import React from 'react';
import styled from 'styled-components';

const InsightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InsightSection = styled.div`
  background-color: #663399;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const SectionTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const KPICard = styled.div`
  background-color: #4d2d70;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const KPIText = styled.p`
  font-size: 0.9em;
  color: white;
  margin-bottom: 8px;
  
  strong {
    color: #ffd700;
  }
`;

const RecommendationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RecommendationItem = styled.li`
  font-size: 0.9em;
  color: white;
  margin-bottom: 8px;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: '•';
    color: #ffd700;
    position: absolute;
    left: 0;
    font-size: 1.2em;
    line-height: 1;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  position: relative;
`;

const PieChart = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: conic-gradient(
    #ff6b6b 0deg 108deg,
    #4ecdc4 108deg 180deg,
    #45b7d1 180deg 216deg,
    #96ceb4 216deg 252deg,
    #feca57 252deg 288deg,
    #ff9ff3 288deg 360deg
  );
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const PieCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background-color: #663399;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
`;

const LabelContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Label = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: bold;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  border: 1px solid ${props => props.color};
  
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${props => props.color};
    border-radius: 50%;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85em;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const InvestmentInsights = ({ investments }) => {
  // Investment data with colors and positions
  const investmentData = [
    { name: 'Mutual Funds', percentage: 30, color: '#ff6b6b', angle: 54 },
    { name: 'Stocks', percentage: 20, color: '#4ecdc4', angle: 144 },
    { name: 'Bonds', percentage: 10, color: '#45b7d1', angle: 198 },
    { name: 'Real Estate', percentage: 10, color: '#96ceb4', angle: 234 },
    { name: 'Gold', percentage: 10, color: '#feca57', angle: 270 },
    { name: 'Crypto', percentage: 20, color: '#ff9ff3', angle: 324 }
  ];

  // Function to calculate label position
  const getLabelPosition = (angle, radius = 120) => {
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`
    };
  };

  // Placeholder data and logic for dynamic values
  const investmentDiversificationScore = '82%';
  const idleCashRatio = '12%';
  const projectedMonthlyROI = '₹2,100';
  const highestPerformingAsset = 'Mutual Funds';
  
  const forecastText = 'Your investments are projected to grow by 10.4% in the next 12 months based on current trends.';
  
  return (
    <InsightsContainer>
      <InsightSection>
        <SectionTitle>Portfolio Allocation (Will be rendered dynamically)</SectionTitle>
        <ChartContainer>
          <PieChart>
            <PieCenter>
              Total
            </PieCenter>
          </PieChart>
          <LabelContainer>
            {investmentData.map((investment, index) => (
              <Label
                key={index}
                color={investment.color}
                style={getLabelPosition(investment.angle)}
              >
                {investment.name} ({investment.percentage}%)
              </Label>
            ))}
          </LabelContainer>
        </ChartContainer>
        <LegendContainer>
          {investmentData.map((investment, index) => (
            <LegendItem key={index}>
              <LegendColor color={investment.color} />
              <span>{investment.name}: {investment.percentage}%</span>
            </LegendItem>
          ))}
        </LegendContainer>
      </InsightSection>
      
      <InsightSection>
        <SectionTitle>KPIs</SectionTitle>
        <KPICard>
          <KPIText>Investment Diversification Score: <strong>{investmentDiversificationScore}</strong></KPIText>
          <KPIText>Idle Cash Ratio: <strong>{idleCashRatio}</strong></KPIText>
          <KPIText>Projected Monthly ROI: <strong>{projectedMonthlyROI}</strong></KPIText>
          <KPIText>Highest Performing Asset: <strong>{highestPerformingAsset}</strong></KPIText>
        </KPICard>
      </InsightSection>
      
      <InsightSection>
        <SectionTitle>Forecast</SectionTitle>
        <KPICard>
          <KPIText>{forecastText}</KPIText>
        </KPICard>
      </InsightSection>
      
      <InsightSection>
        <SectionTitle>Recommendations</SectionTitle>
        <RecommendationList>
          <RecommendationItem>Consider allocating more to debt mutual funds for diversification.</RecommendationItem>
          <RecommendationItem>Reduce crypto exposure to limit volatility.</RecommendationItem>
          <RecommendationItem>Start a monthly SIP of ₹3,000 to reach your 5-year goal.</RecommendationItem>
        </RecommendationList>
      </InsightSection>
    </InsightsContainer>
  );
};

export default InvestmentInsights;

