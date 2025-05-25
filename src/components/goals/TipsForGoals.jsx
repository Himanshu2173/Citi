import React from 'react';
import styled from 'styled-components';

const TipsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const TipsTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const TipsIcon = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.secondary};
`;

const TipsList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  position: relative;
  padding-left: 1.5em; /* Space for custom bullet */

  &::before {
    content: '•'; /* Custom bullet point */
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    font-size: 1.2em;
    line-height: 1;
  }
`;

const TipsForGoals = () => {
  return (
    <TipsContainer>
      <TipsTitle><TipsIcon>💡</TipsIcon> Tips Based on Goals</TipsTitle>
      <TipsList>
        <TipItem>Set realistic timelines for large goals like home buying or retirement. [cite: 22]</TipItem>
        <TipItem>Use the AI tool to allocate monthly investments toward each goal. [cite: 22]</TipItem>
        <TipItem>Prioritize building an emergency fund before aggressive investing. [cite: 22]</TipItem>
      </TipsList>
    </TipsContainer>
  );
};

export default TipsForGoals;