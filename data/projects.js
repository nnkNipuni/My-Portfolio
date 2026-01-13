export const projects = [
  {
    id: 1,
    name: 'CropSense - AI-Powered Crop Yield Prediction System',
    shortName: 'CropSense - AI-Powered Crop Yield Prediction System',
    description: `CropSense is an AI-powered intelligent crop yield prediction and advisory system designed to help farmers, agronomists, and agricultural organizations make data-driven farming decisions. The system integrates machine learning (ML) and large language model (LLM) technologies within a containerized microservice architecture to deliver accurate crop yield predictions along with natural-language explanations.

The primary objective of CropSense is to enhance agricultural productivity and sustainability by predicting crop yields using environmental, soil, and weather conditions. The system leverages advanced predictive analytics to identify the most influential factors affecting yield, helping farmers optimize inputs such as irrigation, fertilizer usage, and crop selection.`,
    tools: ['Python', 'FastAPI', 'Streamlit', 'Poetry', 'LLM (Ollama)', 'Crew AI', 'Scikit-learn', 'Pandas', 'NumPy', 'LightGBM', 'Docker', 'Git', 'GitHub', 'RabbitMQ'],
    // Use the YouTube embed URL so it works inside an <iframe>
    videoUrl: 'https://www.youtube.com/embed/MLSz75POXlo',
    projectUrl: 'https://slcropsense.streamlit.app/',
    // Use YouTube's thumbnail image for previews
    thumbnail: 'https://img.youtube.com/vi/MLSz75POXlo/hqdefault.jpg', // For tile preview
  },
  {
    id: 2,
    name: 'RiskCast - A Predictive Modeling Approach with National Oceanic and Atmospheric Administration(NOAA) Storm Events Data ',
    shortName: 'RiskCast - Storm Damage Cost Prediction System',
    description: `This project presents the development of a software system to predict storm damage expenses in the United States using the latest data from the NOAA Storm Events Database.

Severe weather events such as storms, hurricanes, and floods still cause extensive damage to property and crops and hence must be predicted accurately and in advance. The RiskCast - Storm Damage Cost Prediction System addresses this issue by plotting a systematic pipeline of data cleaning, exploratory data analysis, and feature engineering to prepare the dataset for prediction. The outcome is a system that can predict probable damage costs from event features and hence enhance disaster readiness, insurance risk estimation, and policy design.

The system is deployed as a complete software application with a FastAPI backend and a Streamlit frontend, to make real-time predictions from user-friendly input. By giving accurate estimates of potential damages, the solution improves disaster preparedness, insurance risk analysis, and evidence-based policymaking.`,
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Joblib', 'FastAPI', 'Streamlit'],
    imageUrl: '/RiskCast.png',
    thumbnail: '/RiskCast.png', // For tile preview
  },
  {
    id: 3,
    name: 'SQL Data Warehouse Project',
    shortName: 'SQL Data Warehouse Project',
    description: `Designed and implemented a modern SQL Server–based data warehouse that consolidates sales data from multiple sources (ERP and CRM) into a clean, analytics-ready model. The warehouse supports business reporting, trend analysis, and data-driven decision-making.

Key Contributions:

Data Engineering: Built a unified data model by cleansing, transforming, and integrating sales data from multiple sources. Optimized for efficient querying and analytics.

Data Analytics: Developed SQL queries to generate insights on customer behavior, product performance, and sales trends, enabling stakeholders to make informed business decisions.

Documentation: Created clear and structured documentation of the data model for both technical and business teams.`,
    tools: [
      'SQL Server (T-SQL, ETL)',
      'Data Modeling & Warehouse Design',
      'Data Cleaning & Transformation',
      'SQL-Based Analytics & Reporting',
      'Business Intelligence & Data Insights',
      'Medallion Architecture',
    ],
    imageUrl: '/data_architecture (1).jpeg',
    thumbnail: null,
  },
]
