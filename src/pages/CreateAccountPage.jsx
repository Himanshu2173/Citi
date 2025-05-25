import React from 'react';
import styled from 'styled-components';
import CreateAccountForm from '../components/auth/CreateAccountForm';

const AuthPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px); /* Adjust height for Navbar and Footer */
  padding: ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.darkBackground};
`;

const CreateAccountPage = () => {
  return (
    <AuthPageContainer>
      <CreateAccountForm />
    </AuthPageContainer>
  );
};

export default CreateAccountPage;