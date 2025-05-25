import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

const NavItem = styled(NavLink)`
  flex: 1; /* Distribute space evenly */
  min-width: 120px; /* Minimum width for each item */
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const DashboardNav = () => {
  return (
    <NavContainer>
      <NavItem to="/dashboard/expenses">Track Expenses</NavItem>
      <NavItem to="/dashboard/income">Track Income</NavItem>
      <NavItem to="/dashboard/investments">Track Investments</NavItem>
      <NavItem to="/dashboard/profile">Profile Settings</NavItem>
      <NavItem to="/dashboard/goals">Goals</NavItem>
      <NavItem to="/dashboard/create-profile">Create Profile</NavItem> {/* Added as per plan */}
    </NavContainer>
  );
};

export default DashboardNav;