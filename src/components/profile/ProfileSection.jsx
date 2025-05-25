import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button'; // Assuming Button is in common

const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
`;

const SectionTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.textLight};
`;

const SectionContent = styled.div`
  /* Styles for the content within the section */
`;

const ProfileSection = ({ title, children, onEditClick, isEditing }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {onEditClick && (
          <Button onClick={onEditClick} primary={!isEditing}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        )}
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default ProfileSection;