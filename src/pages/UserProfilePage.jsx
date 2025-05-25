import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileSection from '../components/profile/ProfileSection';
import ProfileFormFields from '../components/profile/ProfileFormFields';

const ProfilePageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer */
`;

const PageTitle = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const UserProfilePage = () => {
  const [isBasicInfoEditing, setIsBasicInfoEditing] = useState(false);
  const [isNomineeDetailsEditing, setIsNomineeDetailsEditing] = useState(false);
  const [isSecuritySettingsEditing, setIsSecuritySettingsEditing] = useState(false);

  const [basicInfo, setBasicInfo] = useState({
    firstName: 'Sahil',
    lastName: 'Kumar',
    email: 'sahil.kumar@example.com',
    phone: '+91 9876543210',
    address: '123, Financial Street, Delhi',
    dob: '1990-01-01',
  });

  const [nomineeDetails, setNomineeDetails] = useState({
    nomineeName: 'Priya Kumar',
    nomineeRelation: 'Wife',
    nomineePhone: '+91 9988776655',
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleBasicInfoChange = (e) => {
    const { id, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleNomineeDetailsChange = (e) => {
    const { id, value } = e.target;
    setNomineeDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSecuritySettingsChange = (e) => {
    const { id, value } = e.target;
    setSecuritySettings((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveBasicInfo = () => {
    console.log('Saving Basic Info:', basicInfo);
    // In a real app, send data to backend
    alert('Basic Info saved!');
    setIsBasicInfoEditing(false);
  };

  const handleSaveNomineeDetails = () => {
    console.log('Saving Nominee Details:', nomineeDetails);
    // In a real app, send data to backend
    alert('Nominee Details saved!');
    setIsNomineeDetailsEditing(false);
  };

  const handleSaveSecuritySettings = () => {
    if (securitySettings.newPassword !== securitySettings.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    console.log('Saving Security Settings:', securitySettings);
    // In a real app, send data to backend for password change
    alert('Password changed (simulated)!');
    setIsSecuritySettingsEditing(false);
    setSecuritySettings({ currentPassword: '', newPassword: '', confirmNewPassword: '' }); // Clear fields after save
  };

  return (
    <ProfilePageContainer>
      <PageTitle>User Profile</PageTitle>

      <ProfileSection
        title="Basic Information"
        onEditClick={() => (isBasicInfoEditing ? handleSaveBasicInfo() : setIsBasicInfoEditing(true))}
        isEditing={isBasicInfoEditing}
      >
        <ProfileFormFields
          fields={[
            { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', required: true },
            { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', required: true },
            { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter email', required: true },
            { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter phone number' },
            { id: 'address', label: 'Address', type: 'text', placeholder: 'Enter address' },
            { id: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'Select DOB' },
          ]}
          formData={basicInfo}
          handleChange={handleBasicInfoChange}
          isEditing={isBasicInfoEditing}
        />
      </ProfileSection>

      <ProfileSection
        title="Nominee Details"
        onEditClick={() => (isNomineeDetailsEditing ? handleSaveNomineeDetails() : setIsNomineeDetailsEditing(true))}
        isEditing={isNomineeDetailsEditing}
      >
        <ProfileFormFields
          fields={[
            { id: 'nomineeName', label: 'Nominee Full Name', type: 'text', placeholder: 'Enter nominee full name' },
            { id: 'nomineeRelation', label: 'Relationship', type: 'text', placeholder: 'e.g., Wife, Son, Mother' },
            { id: 'nomineePhone', label: 'Nominee Phone', type: 'tel', placeholder: 'Enter nominee phone number' },
          ]}
          formData={nomineeDetails}
          handleChange={handleNomineeDetailsChange}
          isEditing={isNomineeDetailsEditing}
        />
      </ProfileSection>

      <ProfileSection
        title="Security Settings"
        onEditClick={() => (isSecuritySettingsEditing ? handleSaveSecuritySettings() : setIsSecuritySettingsEditing(true))}
        isEditing={isSecuritySettingsEditing}
      >
        <ProfileFormFields
          fields={[
            { id: 'currentPassword', label: 'Current Password', type: 'password', placeholder: 'Enter current password', required: isSecuritySettingsEditing },
            { id: 'newPassword', label: 'New Password', type: 'password', placeholder: 'Enter new password', required: isSecuritySettingsEditing },
            { id: 'confirmNewPassword', label: 'Confirm New Password', type: 'password', placeholder: 'Confirm new password', required: isSecuritySettingsEditing },
          ]}
          formData={securitySettings}
          handleChange={handleSecuritySettingsChange}
          isEditing={isSecuritySettingsEditing}
        />
      </ProfileSection>
    </ProfilePageContainer>
  );
};

export default UserProfilePage;