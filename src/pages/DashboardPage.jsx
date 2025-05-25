import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SummaryWidget from '../components/dashboard/SummaryWidget';
import DashboardNav from '../components/dashboard/DashboardNav';
// import { Line } from 'react-chartjs-2'; // For later use

const DashboardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer */
`;

const WidgetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const ChartPlaceholder = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const DashboardPage = () => {
  // Placeholder data for widgets
  const financialHealth = 'Excellent';
  const nextPaymentDue = '₹2,500 (Jun 10)';
  const debtFreeProjection = '2.5 Years';

  // Placeholder for chart data - actual chart implementation will come later
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [50000, 52000, 51000, 53000, 55000, 54000],
        borderColor: '#4CAF50', // Green
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
      {
        label: 'Expenses',
        data: [30000, 32000, 31000, 33000, 34000, 32000],
        borderColor: '#F44336', // Red
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <DashboardContainer>
      <DashboardHeader userName="Sahil" /> {/* You can replace "Sahil" with dynamic user data */}

      <WidgetsGrid>
        <SummaryWidget
          title="Financial Health"
          value={financialHealth}
          description="Overall status of your finances"
        />
        <SummaryWidget
          title="Next Payment Due"
          value={nextPaymentDue}
          description="Rent payment coming soon"
        />
        <SummaryWidget
          title="Debt-Free Projection"
          value={debtFreeProjection}
          description="Estimated time to clear all debt"
        />
      </WidgetsGrid>

      <ChartPlaceholder>
        {/* <Line data={chartData} options={chartOptions} /> */}
        Income vs. Expenses Chart Placeholder (Will be implemented with Chart.js)
      </ChartPlaceholder>

      <DashboardNav />
    </DashboardContainer>
  );
};

export default DashboardPage;