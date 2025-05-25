import React from 'react';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
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

const Section = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const SectionHeader = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textLight};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textLight};
  position: relative;
  padding-left: 1.5em;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const HighlightSection = styled(Section)`
  background-color: #a915e6; /* A distinct background color for highlighting */
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const HighlightText = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;
`;

const TeamMember = styled.li`
  font-size: 1.1em;
  font-weight: 600;
  color: #4b181b
; /* Ensure text is visible on the green background */
`;


const AboutPage = () => {
  return (
    <AboutPageContainer>
      <PageTitle>About ManageYourFinance</PageTitle>

      <Section>
        <SectionHeader>Our Mission</SectionHeader>
        <Paragraph>
          At ManageYourFinance, our mission is to empower individuals to take complete control of their financial lives, become debt-free, and manage their money smarter. We believe that everyone deserves the tools and insights to achieve financial stability and growth.
        </Paragraph>
      </Section>

      <Section>
        <SectionHeader>What We Offer</SectionHeader>
        <Paragraph>
          ManageYourFinance is an AI-powered application designed to help you manage your income, expenses, investments, and debt strategically and effortlessly. Our comprehensive features are tailored to provide you with actionable insights and personalized recommendations based on your unique financial behavior.
        </Paragraph>
        <FeatureList>
          <FeatureItem>
            Expense Tracking: Easily monitor where your money goes—whether it's daily, weekly, or monthly—to understand your spending habits. 
          </FeatureItem>
          <FeatureItem>
            Income & Investment Analysis: Gain clarity on your income sources and receive intelligent guidance to grow your investments effectively.
          </FeatureItem>
          <FeatureItem>
            Debt Repayment Planning: Utilize AI-powered strategies to accelerate your journey to becoming debt-free.
          </FeatureItem>
          <FeatureItem>
            Personalized Recommendations: Receive insights and tips that are specifically tailored to your financial behavior, helping you make smarter decisions.
          </FeatureItem>
        </FeatureList>
      </Section>

      {/* New Section for CCIC 5.0 */}
      <HighlightSection>
        <HighlightText>
          Proudly developed as part of the CCIC 5.0 event, Citi's Campus Hackathon.
        </HighlightText>
        <HighlightText>
          Crafted with dedication by Team:
        </HighlightText>
        <TeamList>
          <TeamMember>Himanshu Verma</TeamMember>
          <TeamMember>Parag</TeamMember>
          <TeamMember>Prathmesh</TeamMember>
        </TeamList>
      </HighlightSection>

      <Section>
        <SectionHeader>How It Works</SectionHeader>
        <Paragraph>
          Our process is simple and designed for ease of use:
        </Paragraph>
        <FeatureList>
          <FeatureItem>Sign up and input your basic income and expense details. </FeatureItem>
          <FeatureItem>Our AI analyzes your data and generates a custom financial strategy. </FeatureItem>
          <FeatureItem>Follow clear, actionable steps to budget, invest, and pay off debt.</FeatureItem>
          <FeatureItem>Receive monthly reports and adaptive tips.</FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionHeader>Join Us</SectionHeader>
        <Paragraph>
          Ready to transform your financial life? Join ManageYourFinance today—it's free!
        </Paragraph>
      </Section>
    </AboutPageContainer>
  );
};

export default AboutPage;