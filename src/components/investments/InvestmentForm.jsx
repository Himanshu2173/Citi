// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Input from '../common/Input';
// import Button from '../common/Button';

// const FormContainer = styled.form`
//   background-color: ${({ theme }) => theme.colors.cardBackground};
//   padding: ${({ theme }) => theme.spacing.xlarge};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//   margin-bottom: ${({ theme }) => theme.spacing.xlarge};
// `;

// const FormTitle = styled.h3`
//   font-size: 1.8em;
//   color: ${({ theme }) => theme.colors.textLight};
//   margin-bottom: ${({ theme }) => theme.spacing.large};
// `;

// const FieldGroup = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: ${({ theme }) => theme.spacing.large};
//   margin-bottom: ${({ theme }) => theme.spacing.medium};
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: ${({ theme }) => theme.spacing.medium};
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   background-color: #330066; /* Slightly darker than card background for input */
//   color: ${({ theme }) => theme.colors.textLight};
//   font-size: 1em;
//   outline: none;

//   &:focus {
//     border-color: ${({ theme }) => theme.colors.primary};
//     box-shadow: 0 0 0 2px rgba(127, 0, 255, 0.5);
//   }
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 1.05em;
//   color: ${({ theme }) => theme.colors.textLight};
//   margin-bottom: ${({ theme }) => theme.spacing.small};
//   font-weight: bold;
// `;

// const InvestmentForm = ({ onAddInvestment }) => {
//   const [investmentName, setInvestmentName] = useState('');
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [dateOfInvestment, setDateOfInvestment] = useState('');
//   const [tenure, setTenure] = useState('');
//   const [riskLevel, setRiskLevel] = useState('');

//   const investmentCategories = [
//     'Mutual Funds', 'Stocks', 'Bonds', 'Real Estate',
//     'Gold', 'Cryptocurrency', 'Fixed Deposit', 'Other'
//   ];

//   const riskLevels = ['Low', 'Moderate', 'High'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!investmentName || !category || !amount || !dateOfInvestment || !riskLevel) {
//       alert('Please fill in all required investment details.');
//       return;
//     }
//     const newInvestment = {
//       id: Date.now(),
//       name: investmentName,
//       category,
//       amount: parseFloat(amount),
//       date: dateOfInvestment,
//       tenure: tenure ? parseInt(tenure) : null,
//       riskLevel,
//     };
//     onAddInvestment(newInvestment);
//     // Clear form
//     setInvestmentName('');
//     setCategory('');
//     setAmount('');
//     setDateOfInvestment('');
//     setTenure('');
//     setRiskLevel('');
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <FormTitle>Add Investment</FormTitle>
//       <FieldGroup>
//         <Input
//           label="Investment Name"
//           id="investmentName"
//           type="text"
//           placeholder="e.g., Axis Bluechip Fund"
//           value={investmentName}
//           onChange={(e) => setInvestmentName(e.target.value)}
//           required
//         />
//         <div>
//           <Label htmlFor="investmentCategory">Category</Label>
//           <Select
//             id="investmentCategory"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="" disabled>Select a category</option>
//             {investmentCategories.map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </Select>
//         </div>
//         <Input
//           label="Amount Invested (₹)"
//           id="investmentAmount"
//           type="number"
//           placeholder="e.g., 10000"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//         />
//         <Input
//           label="Date of Investment"
//           id="dateOfInvestment"
//           type="date"
//           value={dateOfInvestment}
//           onChange={(e) => setDateOfInvestment(e.target.value)}
//           required
//         />
//         <Input
//           label="Tenure (Months)"
//           id="tenure"
//           type="number"
//           placeholder="e.g., 12"
//           value={tenure}
//           onChange={(e) => setTenure(e.target.value)}
//         />
//         <div>
//           <Label htmlFor="riskLevel">Risk Level</Label>
//           <Select
//             id="riskLevel"
//             value={riskLevel}
//             onChange={(e) => setRiskLevel(e.target.value)}
//             required
//           >
//             <option value="" disabled>Select risk level</option>
//             {riskLevels.map((level) => (
//               <option key={level} value={level}>{level}</option>
//             ))}
//           </Select>
//         </div>
//       </FieldGroup>
//       <Button primary type="submit" style={{ marginTop: '20px', width: '200px' }}>
//         Save Investment
//       </Button>
//     </FormContainer>
//   );
// };

// export default InvestmentForm;
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: #663399;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const FormTitle = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 15px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #4d2d70;
  color: white;
  font-size: 0.9em;
  outline: none;

  &:focus {
    border-color: #7f4bc7;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.9em;
  color: white;
  margin-bottom: 5px;
  font-weight: normal;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #4d2d70;
  color: white;
  font-size: 0.9em;
  outline: none;

  &:focus {
    border-color: #7f4bc7;
  }

  &::placeholder {
    color: #bbb;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled.button`
  background-color: #7f4bc7;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;

  &:hover {
    background-color: #6a3db0;
  }
`;

const InvestmentForm = ({ onAddInvestment }) => {
  const [investmentName, setInvestmentName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [dateOfInvestment, setDateOfInvestment] = useState('');
  const [tenure, setTenure] = useState('');
  const [riskLevel, setRiskLevel] = useState('');

  const investmentCategories = [
    'Mutual Funds', 'Stocks', 'Bonds', 'Real Estate',
    'Gold', 'Cryptocurrency', 'Fixed Deposit', 'Other'
  ];

  const riskLevels = ['Low', 'Moderate', 'High'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!investmentName || !category || !amount || !dateOfInvestment || !riskLevel) {
      alert('Please fill in all required investment details.');
      return;
    }
    const newInvestment = {
      id: Date.now(),
      name: investmentName,
      category,
      amount: parseFloat(amount),
      date: dateOfInvestment,
      tenure: tenure ? parseInt(tenure) : null,
      riskLevel,
    };
    onAddInvestment(newInvestment);
    // Clear form
    setInvestmentName('');
    setCategory('');
    setAmount('');
    setDateOfInvestment('');
    setTenure('');
    setRiskLevel('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Add Investment</FormTitle>
      <FieldGroup>
        <InputWrapper>
          <Label htmlFor="investmentName">Investment Name</Label>
          <StyledInput
            id="investmentName"
            type="text"
            placeholder="e.g., Axis Bluechip Fund"
            value={investmentName}
            onChange={(e) => setInvestmentName(e.target.value)}
            required
          />
        </InputWrapper>
        <div>
          <Label htmlFor="investmentCategory">Category</Label>
          <Select
            id="investmentCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {investmentCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>
        </div>
        <InputWrapper>
          <Label htmlFor="investmentAmount">Amount Invested (₹)</Label>
          <StyledInput
            id="investmentAmount"
            type="number"
            placeholder="e.g., 10000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="dateOfInvestment">Date of Investment</Label>
          <StyledInput
            id="dateOfInvestment"
            type="date"
            value={dateOfInvestment}
            onChange={(e) => setDateOfInvestment(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="tenure">Tenure (Months)</Label>
          <StyledInput
            id="tenure"
            type="number"
            placeholder="e.g., 12"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </InputWrapper>
        <div>
          <Label htmlFor="riskLevel">Risk Level</Label>
          <Select
            id="riskLevel"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
            required
          >
            <option value="" disabled>Select risk level</option>
            {riskLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </Select>
        </div>
      </FieldGroup>
      <SaveButton type="submit">
        Save Investment
      </SaveButton>
    </FormContainer>
  );
};

export default InvestmentForm;