import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input'; // Assuming Input is in common

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ProfileFormFields = ({ fields, formData, handleChange, isEditing }) => {
  return (
    <FormRow>
      <FieldGroup>
        {fields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={handleChange}
            disabled={!isEditing}
            required={field.required}
          />
        ))}
      </FieldGroup>
    </FormRow>
  );
};

export default ProfileFormFields;