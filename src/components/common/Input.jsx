import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 1.05em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #330066; /* Slightly darker than card background for input */
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1em;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(127, 0, 255, 0.5); /* Purple glow on focus */
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
    opacity: 0.7;
  }
`;

const Input = ({ label, id, type = 'text', placeholder, value, onChange, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;