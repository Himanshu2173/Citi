// import React from 'react';
// import styled from 'styled-components';

// const OverviewContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: ${({ theme }) => theme.spacing.large};
//   margin-bottom: ${({ theme }) => theme.spacing.xlarge};
// `;

// const OverviewCard = styled.div`
//   background-color: ${({ theme }) => theme.colors.cardBackground};
//   padding: ${({ theme }) => theme.spacing.large};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//   text-align: center;
// `;

// const CardTitle = styled.p`
//   font-size: 1em;
//   color: ${({ theme }) => theme.colors.textDark};
//   margin-bottom: ${({ theme }) => theme.spacing.small};
// `;

// const CardValue = styled.h3`
//   font-size: 1.8em;
//   color: ${({ theme }) => theme.colors.textLight};
//   font-weight: bold;
// `;

// const InvestmentOverview = ({ totalInvestment, roi, riskLevel, forecast }) => {
//   return (
//     <OverviewContainer>
//       <OverviewCard>
//         <CardTitle>Total Investment</CardTitle>
//         <CardValue>₹{totalInvestment.toLocaleString()}</CardValue>
//       </OverviewCard>
//       <OverviewCard>
//         <CardTitle>ROI</CardTitle>
//         <CardValue>{roi}%</CardValue>
//       </OverviewCard>
//       <OverviewCard>
//         <CardTitle>Risk Level</CardTitle>
//         <CardValue>{riskLevel}</CardValue>
//       </OverviewCard>
//       <OverviewCard>
//         <CardTitle>1-Year Forecast</CardTitle>
//         <CardValue>₹{forecast.toLocaleString()}</CardValue>
//       </OverviewCard>
//     </OverviewContainer>
//   );
// };

// export default InvestmentOverview;
import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  background-color: #663399;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const OverviewTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const OverviewCard = styled.div`
  text-align: left;
`;

const CardTitle = styled.p`
  font-size: 0.9em;
  color: #cccccc;
  margin-bottom: 5px;
`;

const CardValue = styled.h3`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  margin: 0;
`;

const InvestmentOverview = ({ totalInvestment, roi, riskLevel, forecast }) => {
  return (
    <OverviewContainer>
      <OverviewTitle>Track Investments</OverviewTitle>
      <OverviewGrid>
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
      </OverviewGrid>
    </OverviewContainer>
  );
};

export default InvestmentOverview;