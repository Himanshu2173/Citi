import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme, primary }) => (primary ? theme.colors.primary : 'transparent')};
  color: ${({ theme, primary }) => (primary ? theme.colors.textLight : theme.colors.primary)};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.xlarge};
  border: ${({ theme, primary }) => (primary ? 'none' : `2px solid ${theme.colors.primary}`)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%; /* Make button full width of its container */

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.buttonHover : theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:disabled {
    background-color: #5c00b3; /* Darker purple for disabled */
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Button = ({ children, primary, onClick, type = 'button', ...props }) => {
  return (
    <StyledButton primary={primary} onClick={onClick} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;