// src/services/geminiService.js

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY; // Replace with your actual API key
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

export const generateInvestmentRecommendations = async (investments) => {
  try {
    // Prepare investment data for analysis
    const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);
    const categoryBreakdown = investments.reduce((acc, inv) => {
      acc[inv.category] = (acc[inv.category] || 0) + inv.amount;
      return acc;
    }, {});

    const riskBreakdown = investments.reduce((acc, inv) => {
      acc[inv.riskLevel] = (acc[inv.riskLevel] || 0) + inv.amount;
      return acc;
    }, {});

    // Create a comprehensive prompt
    const prompt = `
As a financial advisor, analyze this investment portfolio and provide 3-4 specific, actionable recommendations:

Portfolio Summary:
- Total Investment: ₹${totalInvestment.toLocaleString()}
- Number of investments: ${investments.length}

Category Breakdown:
${Object.entries(categoryBreakdown)
  .map(([category, amount]) => `- ${category}: ₹${amount.toLocaleString()} (${((amount/totalInvestment)*100).toFixed(1)}%)`)
  .join('\n')}

Risk Level Breakdown:
${Object.entries(riskBreakdown)
  .map(([risk, amount]) => `- ${risk} Risk: ₹${amount.toLocaleString()} (${((amount/totalInvestment)*100).toFixed(1)}%)`)
  .join('\n')}

Individual Investments:
${investments.map(inv => `- ${inv.name} (${inv.category}): ₹${inv.amount.toLocaleString()} - ${inv.riskLevel} risk`).join('\n')}

Provide recommendations in the following format:
1. [Specific recommendation with reasoning]
2. [Specific recommendation with reasoning]
3. [Specific recommendation with reasoning]
4. [Specific recommendation with reasoning]

Focus on:
- Portfolio diversification
- Risk management
- Specific investment amounts or percentages
- Asset allocation improvements
- Tax optimization if applicable

Keep each recommendation under 25 words and make them actionable.
`;

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const recommendationsText = data.candidates[0].content.parts[0].text;
    
    // Parse the recommendations into an array
    const recommendations = recommendationsText
      .split(/\d+\.\s/)
      .filter(rec => rec.trim().length > 0)
      .map(rec => rec.trim().replace(/\n/g, ' '));

    return recommendations;

  } catch (error) {
    console.error('Error generating recommendations:', error);
    // Return fallback recommendations
    return [
      "Consider diversifying across more asset classes to reduce portfolio risk.",
      "Review and rebalance your portfolio quarterly to maintain target allocation.",
      "Increase emergency fund to 6 months of expenses before additional investments.",
      "Consider tax-saving investments like ELSS for additional benefits."
    ];
  }
};