export const PORTFOLIO = {
  name: 'Sujit Panigrahi',
  title: 'Software Engineer',
  taglines: ['Python Developer', 'Automation Engineer', 'BDD Framework Builder', 'REST API Tester', 'ML Enthusiast'],
  email: 'sujitpanigrahi855@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sujit-panigrahi-/',
  location: 'Bengaluru, Karnataka, India',

  about:
    "I'm a software engineer with 1 year of hands-on experience in automation " +
    'and product engineering at Trellix, a global cybersecurity company. ' +
    'I specialize in building test automation frameworks using Python, Playwright, ' +
    'and Behave BDD — having automated 200+ test cases and achieving a 60% reduction ' +
    'in manual testing effort across product release cycles. ' +
    'I actively integrate AI tools like Claude AI, GitHub Copilot, and Gemini ' +
    'with Prompt Engineering into my daily workflow to accelerate development and code quality. ' +
    'Currently expanding into Machine Learning with Scikit-learn and data engineering.',

  stats: [
    { number: '200+', label: 'Test Cases Automated' },
    { number: '60%',  label: 'Manual Effort Reduced' },
    { number: '1',    label: 'Year of Experience' },
    { number: '4',    label: 'Projects Built' },
  ],

  skills: {
    'Test Automation':       ['Python', 'Playwright', 'Behave BDD', 'pytest', 'Selenium', 'Gherkin', 'Page Object Model', 'REST API', 'UI Automation', 'BVT', 'FVT'],
    'Web Technologies':      ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Vite', 'Tailwind CSS', 'FastAPI', 'Flask', 'SQLite'],
    'Data & Analytics':      ['NumPy', 'Pandas', 'Matplotlib', 'Recharts', 'Web Scraping (Requests)', 'SQL'],
    'AI & Prompt Engineering': ['Claude AI', 'GitHub Copilot', 'Gemini', 'Prompt Engineering', 'Notebook LM'],
    'Tools & Methodology':   ['Git', 'GitHub', 'JIRA', 'Postman', 'VS Code', 'PyCharm', 'Agile/Scrum', 'STLC', 'BDD/TDD'],
    'CS Fundamentals':       ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'BST', 'Hash Map', 'Graphs', 'OOP'],
  },

  ml_learning: [
    { topic: 'Supervised Learning',  progress: 70, desc: 'Classification & Regression concepts, train/test split, model evaluation' },
    { topic: 'Linear Regression',    progress: 65, desc: 'Predicting continuous values, gradient descent, loss functions' },
    { topic: 'Logistic Regression',  progress: 60, desc: 'Binary classification, sigmoid function, decision boundaries' },
    { topic: 'Data Preprocessing',   progress: 75, desc: 'Feature scaling, encoding, handling missing values with Pandas & NumPy' },
    { topic: 'Scikit-learn',         progress: 60, desc: 'Model training pipelines, cross-validation, metrics (accuracy, F1)' },
    { topic: 'Data Visualization',   progress: 80, desc: 'Matplotlib & Seaborn plots — histograms, scatter plots, heatmaps' },
  ],

  experience: [
    {
      title: 'Software Engineering Intern',
      company: 'Trellix',
      location: 'Bengaluru, India',
      duration: 'July 2025 – Present',
      project: 'Trellix EDR with Forensics (TEDRwF) — Enterprise Cybersecurity Product',
      points: [
        'Designed and built a BDD automation framework using Python, Playwright, and Behave — automated 200+ test cases (UI Automation, BVT, FVT, regression), reducing manual testing effort by 60%.',
        'Built REST API automation scripts using Python Requests and Postman to validate backend services, agent communication APIs, and alert-generation endpoints across Windows, Linux, and macOS.',
        'Integrated Claude AI, GitHub Copilot, and Gemini with Prompt Engineering into daily automation workflows for faster script development, debugging, and code quality improvements.',
      ],
      tech: ['Python', 'Playwright', 'Behave', 'pytest', 'Selenium', 'REST API', 'Postman', 'JIRA', 'Git'],
    },
  ],

  projects: [
    {
      number: '01',
      title: 'BDD End-to-End Automation Framework',
      description: 'Built a production-level Python + Playwright + Behave BDD framework from scratch for the Trellix EDR with Forensics product.',
      points: [
        '200+ Gherkin scenarios covering UI automation, BVT, FVT, EDR agent detection, host containment, and forensic data collection.',
        'Applied POM architecture with modular step definitions — reduced script duplication by 40% and manual testing time by 60%.',
        'Leveraged Claude AI, GitHub Copilot, and Gemini with Prompt Engineering for accelerated development and automated code suggestions.',
      ],
      tech: ['Python', 'Playwright', 'Behave', 'pytest', 'Gherkin', 'POM', 'GitHub'],
    },
    {
      number: '02',
      title: 'REST API Automation Suite',
      description: 'Automated REST API test suite for validating backend services of the Trellix EDR product with continuous pipeline integration.',
      points: [
        'Parameterized and data-driven test cases in Python Requests and Postman — covered positive, negative, and edge-case API scenarios.',
        'Integrated API tests into the regression pipeline for continuous backend validation on every product build.',
        'Reduced escaped API defects from production by ensuring full API contract coverage across multiple product builds.',
      ],
      tech: ['Python', 'Requests', 'Postman', 'JIRA', 'GitHub'],
    },
    {
      number: '03',
      title: 'EDRF Test Analytics Dashboard',
      description: 'Full-stack analytics platform built to track, visualize, and analyze automation test results across multiple product builds — replacing manual result reviews with a live dashboard.',
      points: [
        'FastAPI + SQLAlchemy backend with SQLite; React + Vite SPA frontend — REST API drives all dashboard data including build imports, scenario results, and failure tracking.',
        'Supports dual failure sources: auto-created from imported builds and CSV-uploaded failures — with paginated top-failing-scenarios table (10 per page), frequency distribution, and pass rate trend charts.',
        'Premium dark glassmorphism UI with Recharts-powered pass rate trend and pass vs fail per-build bar charts, providing instant visibility into test health across builds.',
      ],
      tech: ['Python', 'FastAPI', 'SQLAlchemy', 'React', 'Vite', 'Recharts', 'SQLite', 'REST API'],
    },
    {
      number: '04',
      title: 'Stock Price Tracker',
      description: 'Real-time stock analytics dashboard built with Python and Streamlit — live-deployed on Streamlit Cloud with interactive multi-stock charts and period-aware return metrics.',
      points: [
        'Fetches live data from Yahoo Finance via yfinance for 7 tickers (META, GOOGL, MSFT, AMZN, TSLA, TCS.NS, AAPL) — persisted in SQLite with duplicate-safe inserts.',
        'Interactive Plotly charts: close price with 7-day & 30-day moving averages, trading volume bars, daily return % distribution, and normalized multi-stock comparison.',
        'Period-aware dashboard — switching 1mo / 3mo / 6mo / 1y / 2y instantly filters all charts and recalculates total return % from the period start price.',
      ],
      tech: ['Python', 'Streamlit', 'yfinance', 'Plotly', 'Pandas', 'SQLite', 'NumPy'],
      link: 'https://stockpricetracker-mijhqe8nhpyumritz4nj8v.streamlit.app/',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering – Computer Science & Engineering',
      institution: 'Roland Institute of Technology',
      duration: 'Dec 2021 – June 2025',
      grade: '82.5%',
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: "The Mother's International Higher Secondary School",
      duration: 'Aug 2019 – Aug 2021',
      grade: '76%',
    },
  ],
}
