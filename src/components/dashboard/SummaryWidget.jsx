import React from 'react';
import styled from 'styled-components';

const WidgetCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  flex: 1; /* Allow flexible sizing in grid */
  min-width: 250px; /* Minimum width for responsiveness */
`;

const WidgetTitle = styled.h3`
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const WidgetValue = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
`;

const WidgetDescription = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.textDark};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const SummaryWidget = ({ title, value, description }) => {
  return (
    <WidgetCard>
      <WidgetTitle>{title}</WidgetTitle>
      <WidgetValue>{value}</WidgetValue>
      {description && <WidgetDescription>{description}</WidgetDescription>}
    </WidgetCard>
  );
};

export default SummaryWidget;