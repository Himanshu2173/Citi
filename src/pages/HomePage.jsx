import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components for HomePage sections
const HeroSectionContainer = styled.section`
  text-align: center;
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 1200px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 3.5em;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const SubHeadline = styled.p`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const CtaButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryCtaButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const SecondaryCtaButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.xlarge};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const FeaturesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xlarge};
  justify-content: center;
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.1em;
`;

const HowItWorksSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 80px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const StepsList = styled.ol`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: 700px;
  margin: 0 auto;
`;

const StepItem = styled.li`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: left;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StepNumber = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  flex-shrink: 0;
`;

const StepText = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.1em;
`;

const JoinNowSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  max-width: 1200px;
  margin: 0 auto;
`;

const JoinNowText = styled.h2`
  font-size: 2.2em;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const JoinNowButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3em;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSectionContainer>
        <Headline>
          Take Control of Your Finances. Become Debt-Free, Smarter. {/* [cite: 1] */}
        </Headline>
        <SubHeadline>
          An AI-powered app that helps you manage income, expenses, investments, and debt - strategically and effortlessly. {/* [cite: 2] */}
        </SubHeadline>
        <CtaButtons>
          <PrimaryCtaButton to="/create-account">Get Started</PrimaryCtaButton> {/* [cite: 3] */}
          <SecondaryCtaButton to="/about">Learn More</SecondaryCtaButton> {/* [cite: 3] */}
        </CtaButtons>
      </HeroSectionContainer>

      <FeaturesSection>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Expense Tracking</FeatureTitle> {/* [cite: 4] */}
            <FeatureDescription>Track where your money goes—daily, weekly, monthly.</FeatureDescription> {/* [cite: 4] */}
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Income & Investment Analysis</FeatureTitle> {/* [cite: 4] */}
            <FeatureDescription>Know your income sources and grow them intelligently.</FeatureDescription> {/* [cite: 4] */}
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Debt Repayment Planning</FeatureTitle> {/* [cite: 5] */}
            <FeatureDescription>Get AI-powered strategies to repay debt fast.</FeatureDescription> {/* [cite: 5] */}
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Personalized Recommendations</FeatureTitle> {/* [cite: 5] */}
            <FeatureDescription>Insights tailored to your financial behavior.</FeatureDescription> {/* [cite: 5] */}
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <HowItWorksSection>
        <SectionTitle>How It Works</SectionTitle> {/* [cite: 6] */}
        <StepsList>
          <StepItem>
            <StepNumber>1.</StepNumber>
            <StepText>Sign up and input your basic income/expense details.</StepText> {/* [cite: 6] */}
          </StepItem>
          <StepItem>
            <StepNumber>2.</StepNumber>
            <StepText>Let the AI analyze and generate a custom strategy.</StepText> {/* [cite: 7] */}
          </StepItem>
          <StepItem>
            <StepNumber>3.</StepNumber>
            <StepText>Follow clear steps to budget, invest, and pay off debt.</StepText> {/* [cite: 8] */}
          </StepItem>
          <StepItem>
            <StepNumber>4.</StepNumber>
            <StepText>Get monthly reports and adaptive tips.</StepText> {/* [cite: 9] */}
          </StepItem>
        </StepsList>
      </HowItWorksSection>

      <JoinNowSection>
        <JoinNowText>Ready to transform your financial life?</JoinNowText> {/* [cite: 9] */}
        <JoinNowButton to="/create-account">Join Now—It's Free</JoinNowButton> {/* [cite: 9] */}
      </JoinNowSection>
    </>
  );
};

export default HomePage;