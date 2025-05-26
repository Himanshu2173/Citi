// import React from 'react';
// import styled from 'styled-components';

// const TableContainer = styled.div`
//   background-color: ${({ theme }) => theme.colors.cardBackground};
//   padding: ${({ theme }) => theme.spacing.xlarge};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//   overflow-x: auto; /* Enable horizontal scrolling for small screens */
//   margin-bottom: ${({ theme }) => theme.spacing.xlarge};
// `;

// const TableTitle = styled.h3`
//   font-size: 1.8em;
//   color: ${({ theme }) => theme.colors.textLight};
//   margin-bottom: ${({ theme }) => theme.spacing.large};
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;
// `;

// const TableHeader = styled.th`
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: ${({ theme }) => theme.colors.textLight};
//   padding: ${({ theme }) => theme.spacing.medium};
//   border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #330066; /* Slightly darker row for even rows */
//   }
// `;

// const TableData = styled.td`
//   padding: ${({ theme }) => theme.spacing.medium};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
//   color: ${({ theme }) => theme.colors.textLight};
// `;

// const EmptyMessage = styled.p`
//   text-align: center;
//   color: ${({ theme }) => theme.colors.textDark};
//   font-size: 1.1em;
//   padding: ${({ theme }) => theme.spacing.large};
// `;

// const InvestmentPortfolioTable = ({ investments }) => {
//   return (
//     <TableContainer>
//       <TableTitle>Investment Portfolio</TableTitle>
//       {investments.length === 0 ? (
//         <EmptyMessage>No investments recorded yet. Add one above!</EmptyMessage>
//       ) : (
//         <StyledTable>
//           <thead>
//             <tr>
//               <TableHeader>Name</TableHeader>
//               <TableHeader>Category</TableHeader>
//               <TableHeader>Amount</TableHeader>
//               <TableHeader>Date</TableHeader>
//               <TableHeader>Tenure (Months)</TableHeader>
//               <TableHeader>Risk Level</TableHeader>
//             </tr>
//           </thead>
//           <tbody>
//             {investments.map((investment) => (
//               <TableRow key={investment.id}>
//                 <TableData>{investment.name}</TableData>
//                 <TableData>{investment.category}</TableData>
//                 <TableData>₹{investment.amount.toLocaleString()}</TableData>
//                 <TableData>{investment.date}</TableData>
//                 <TableData>{investment.tenure || '-'}</TableData>
//                 <TableData>{investment.riskLevel}</TableData>
//               </TableRow>
//             ))}
//           </tbody>
//         </StyledTable>
//       )}
//     </TableContainer>
//   );
// };

// export default InvestmentPortfolioTable;
import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  background-color: #663399;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const TableTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.th`
  background-color: #4d2d70;
  color: white;
  padding: 10px;
  border-bottom: 1px solid #555;
  font-size: 0.9em;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #4d2d70;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 0.9em;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #cccccc;
  font-size: 1em;
  padding: 20px;
`;

const InvestmentPortfolioTable = ({ investments }) => {
  return (
    <TableContainer>
      <TableTitle>Investment Portfolio</TableTitle>
      {investments.length === 0 ? (
        <EmptyMessage>No investments recorded yet. Add one above!</EmptyMessage>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Tenure (Months)</TableHeader>
              <TableHeader>Risk Level</TableHeader>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableData>{investment.name}</TableData>
                <TableData>{investment.category}</TableData>
                <TableData>₹{investment.amount.toLocaleString()}</TableData>
                <TableData>{investment.date}</TableData>
                <TableData>{investment.tenure || '-'}</TableData>
                <TableData>{investment.riskLevel}</TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      )}
    </TableContainer>
  );
};

export default InvestmentPortfolioTable;