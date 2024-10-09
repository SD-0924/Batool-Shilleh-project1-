const cardData = [
    {
        id: 1,
        image: 'assets/html.png',
        title: 'Web Development Languages',
        framework: 'HTML',
        author: 'Sara Smith',
        rating: 4,
        description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures content on the web and is essential for building websites.',
        topics: [
            'HTML syntax and structure',
            'HTML elements and attributes',
            'HTML forms and input elements',
            'HTML tables and lists',
            'HTML multimedia elements (audio, video, images)',
            'HTML accessibility and semantic markup',
        ],
    },
    {
        id: 2,
        image: 'assets/css.webp',
        title: 'Web Development Languages',
        framework: 'CSS',
        author: 'David Lee',
        rating: 4.5,
        description: 'CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML or XML. It allows for design and layout modifications.',
        topics: [
            'CSS syntax and selectors',
            'CSS box model',
            'CSS positioning and layout',
            'CSS flexbox and grid',
            'CSS animations and transitions',
            'Responsive design with CSS',
        ],
    },
    {
        id: 3,
        image: 'assets/javascript.jpg',
        title: 'Web Development Languages',
        framework: 'JavaScript',
        author: 'Emily Chen',
        rating: 4,
        description: 'JavaScript is a versatile programming language primarily used for adding interactivity to web pages. It allows developers to create dynamic content and handle events.',
        topics: [
            'JavaScript syntax and operators',
            'JavaScript functions and scopes',
            'JavaScript DOM manipulation',
            'JavaScript events',
            'JavaScript ES6 features',
            'Asynchronous JavaScript (Promises, Async/Await)',
        ],
    },
    {
        id: 4,
        image: 'assets/jquery.png',
        title: 'Frontend Frameworks and Libraries',
        framework: 'jQuery',
        author: 'John Johnson',
        rating: 4,
        description: 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation.',
        topics: [
            'jQuery syntax and selectors',
            'jQuery event handling',
            'jQuery effects and animations',
            'jQuery AJAX methods',
            'Working with jQuery plugins',
        ],
    },
    {
        id: 5,
        image: 'assets/angular.png',
        title: 'Frontend Frameworks and Libraries',
        framework: 'Angular',
        author: 'Jessica Davis',
        rating: 4.8,
        description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It provides a comprehensive solution for building scalable applications.',
        topics: [
            'Angular architecture and modules',
            'Components and templates',
            'Services and dependency injection',
            'Routing in Angular',
            'Reactive programming with RxJS',
        ],
    },
    {
        id: 6,
        image: 'assets/react.webp',
        title: 'Frontend Frameworks and Libraries',
        framework: 'React',
        author: 'Daniel Brown',
        rating: 4,
        description: 'React is a JavaScript library for building user interfaces, allowing developers to create large web applications that can change data, without reloading the page.',
        topics: [
            'React components and props',
            'State management in React',
            'React hooks',
            'Routing with React Router',
            'Performance optimization in React',
        ],
    },
    {
        id: 7,
        image: 'assets/vuejs.jpeg',
        title: 'Frontend Frameworks and Libraries',
        framework: 'Vue.js',
        author: 'Ava Jones',
        rating: 3.5,
        description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and focuses on the view layer only.',
        topics: [
            'Vue.js fundamentals and structure',
            'Components and directives',
            'Vue Router for navigation',
            'State management with Vuex',
            'Building single-page applications with Vue.js',
        ],
    },
    {
        id: 8,
        image: 'assets/nodejs.webp',
        title: 'Backend Frameworks and Libraries',
        framework: 'Node.js',
        author: 'Michael Kim',
        rating: 4,
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing developers to execute JavaScript server-side.',
        topics: [
            'Node.js architecture and event-driven programming',
            'Creating server applications',
            'Working with Express.js',
            'File system and database interactions',
            'Building RESTful APIs with Node.js',
        ],
    },
    {
        id: 9,
        image: 'assets/expressjs.webp',
        title: 'Backend Frameworks and Libraries',
        framework: 'Express.js',
        author: 'Sophia Rodriguez',
        rating: 4,
        description: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
        topics: [
            'Setting up Express applications',
            'Middleware in Express',
            'Routing and handling requests',
            'Error handling in Express',
            'Connecting to databases with Express',
        ],
    },
    {
        id: 10,
        image: 'assets/ruby.jpeg',
        title: 'Backend Frameworks and Libraries',
        framework: 'Ruby on Rails',
        author: 'William Lee',
        rating: 3,
        description: 'Ruby on Rails is a web application framework written in Ruby that provides default structures for a database, a web service, and web pages.',
        topics: [
            'Rails MVC architecture',
            'Creating RESTful applications',
            'Active Record and migrations',
            'Routing and controllers',
            'Testing in Rails',
        ],
    },
    {
        id: 11,
        image: 'assets/django.jpeg',
        title: 'Backend Frameworks and Libraries',
        framework: 'Django',
        author: 'Olivia Martinez',
        rating: 4,
        description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
        topics: [
            'Django project structure',
            'Models and database management',
            'Views and templates',
            'URL routing and handling',
            'Django REST framework for APIs',
        ],
    },
    {
        id: 12,
        image: 'assets/flask.webp',
        title: 'Backend Frameworks and Libraries',
        framework: 'Flask',
        author: 'Ethan Thompson',
        rating: 3,
        description: 'Flask is a micro web framework for Python based on Werkzeug and Jinja2. It is lightweight and modular, making it adaptable to developers\' needs.',
        topics: [
            'Flask setup and structure',
            'Routing and views',
            'Templates and static files',
            'Working with forms in Flask',
            'Building APIs with Flask',
        ],
    },
    {
        id: 13,
        image: 'assets/sql.png',
        title: 'Databases and APIs',
        framework: 'SQL',
        author: 'Madison Davis',
        rating: 4.5,
        description: 'SQL (Structured Query Language) is a standard programming language for managing and manipulating databases.',
        topics: [
            'SQL syntax and commands',
            'Creating and modifying database schemas',
            'Data retrieval with SELECT statements',
            'Joins and relationships between tables',
            'Advanced SQL queries and performance tuning',
        ],
    },
    {
        id: 14,
        image: 'assets/nosql.png',
        title: 'Databases and APIs',
        framework: 'NoSQL',
        author: 'Isabella Wilson',
        rating: 4.5,
        description: 'NoSQL databases are designed to handle large volumes of unstructured data. They provide flexible schema designs and scalability.',
        topics: [
            'Types of NoSQL databases (document, key-value, graph)',
            'MongoDB setup and usage',
            'Data modeling in NoSQL',
            'CRUD operations in NoSQL',
            'Integrating NoSQL with applications',
        ],
    },
    {
        id: 15,
        image: 'assets/restapi.jpeg',
        title: 'Databases and APIs',
        framework: 'REST APIs',
        author: 'Jacob Garcia',
        rating: 3,
        description: 'REST (Representational State Transfer) APIs are architectural styles for designing networked applications. They rely on stateless communication and standard protocols.',
        topics: [
            'Understanding REST principles',
            'Creating RESTful APIs with Node.js',
            'HTTP methods and status codes',
            'Authentication and security in REST APIs',
            'API documentation and versioning',
        ],
    },
    {
        id: 16,
        image: 'assets/graphql.png',
        title: 'Databases and APIs',
        framework: 'GraphQL',
        author: 'Mai Brown',
        rating: 4,
        description: 'GraphQL is a query language for APIs that allows clients to request only the data they need, improving efficiency and flexibility.',
        topics: [
            'GraphQL schema and types',
            'Queries and mutations',
            'Subscribing to real-time data',
            'Integrating GraphQL with backend frameworks',
            'Best practices for GraphQL APIs',
        ],
    },
    {
        id: 17,
        image: 'assets/oauth.png',
        title: 'Web Development Concept and Technology',
        framework: 'OAuth',
        author: 'Evelyn Nguyen',
        rating: 3.5,
        description: 'OAuth is an authentication protocol that allows third-party applications to access user information without sharing passwords.',
        topics: [
            'Introduction to OAuth and authentication concepts',
            'Types of OAuth (Desktop apps, web apps, etc.)',
            'Implementing OAuth in projects',
            'Security and considerations related to OAuth',
            'Integrating OAuth with various APIs',
        ],
    },
    {
        id: 18,
        image: 'assets/json.png',
        title: 'Web Development Concept and Technology',
        framework: 'JSON',
        author: 'Liam Hernandez',
        rating: 3.5,
        description: 'JSON (JavaScript Object Notation) is a data format used for exchanging data between the server and client.',
        topics: [
            'Basics of JSON and data formatting',
            'Parsing and stringifying JSON in JavaScript',
            'Exchanging data between server and client using JSON',
            'Using JSON with APIs',
            'Advantages and disadvantages compared to XML',
        ],
    },
    {
        id: 19,
        image: 'assets/ajax.gif',
        title: 'Web Development Concept and Technology',
        framework: 'AJAX',
        author: 'Avery Perez',
        rating: 3,
        description: 'AJAX (Asynchronous JavaScript and XML) allows loading data in the background and updating parts of a page without reloading the entire page.',
        topics: [
            'Introduction to AJAX and its advantages',
            'Using XMLHttpRequest',
            'Handling responses with JSON',
            'Integrating AJAX with user interfaces',
            'Testing AJAX functionality',
        ],
    },
    {
        id: 20,
        image: 'assets/websockets.png',
        title: 'Web Development Concept and Technology',
        framework: 'Websockets',
        author: 'Victoria Kim',
        rating: 4,
        description: 'Websockets are communication protocols that enable two-way communication between client and server in real time.',
        topics: [
            'Basics of Websockets and how they work',
            'Implementing Websockets in web applications',
            'Handling events in Websockets',
            'Security considerations for Websockets',
            'Using Websockets with JavaScript libraries like Socket.IO',
        ],
    },
    {
        id: 21,
        image: 'assets/responsive.gif',
        title: 'Web Development Concept and Technology',
        framework: 'Responsive Design',
        author: 'Ryan Jones',
        rating: 4,
        description: 'Responsive web design ensures that websites function well across different devices (phones, tablets, desktops).',
        topics: [
            'Basics of responsive design',
            'Using Media Queries',
            'Responsive frameworks like Bootstrap',
            'Layout techniques using Flexbox and Grid',
            'Performance optimization for responsive design',
        ],
    },
    {
        id: 22,
        image: 'assets/accessibility.png',
        title: 'Web Development Concept and Technology',
        framework: 'Accessibility',
        author: 'Samantha Martin',
        rating: 4,
        description: 'Enhancing accessibility ensures that all users, including those with disabilities, can access content.',
        topics: [
            'Basics of web accessibility',
            'WCAG standards',
            'Assessing accessibility using various tools',
            'Implementing accessibility practices in design',
            'Improving user experience for people with disabilities',
        ],
    },
    {
        id: 23,
        image: 'assets/ux.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'User Experience (UX)',
        author: 'Luke Davis',
        rating: 4,
        description: 'User experience design focuses on creating seamless user interfaces that facilitate navigation and enhance user satisfaction.',
        topics: [
            'Basics of user experience (UX)',
            'User research and understanding needs',
            'Designing and developing prototypes',
            'Usability testing and analyzing results',
            'Improving user experience based on feedback',
        ],
    },
    {
        id: 24,
        image: 'assets/ui.png',
        title: 'Web Development Concept and Technology',
        framework: 'User Interface (UI)',
        author: 'Grace Wilson',
        rating: 3,
        description: 'User interface design focuses on optimizing the interaction between users and applications.',
        topics: [
            'Basics of user interface design',
            'Principles of good design',
            'Effective use of colors and fonts',
            'Designing responsive interfaces',
            'Using design tools like Figma and Adobe XD',
        ],
    },
    {
        id: 25,
        image: 'assets/design-systems.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Design Systems',
        author: 'Noah Martinez',
        rating: 4,
        description: 'A design system is a collection of consistent components and patterns used to develop user interfaces.',
        topics: [
            'Concept of design systems and their importance',
            'Creating component libraries',
            'Standardizing patterns across applications',
            'Integrating design systems with teams',
            'Tools used to create design systems',
        ],
    },
    {
        id: 26,
        image: 'assets/performance.png',
        title: 'Web Development Concept and Technology',
        framework: 'Performance Optimization',
        author: 'Chlone Taylor',
        rating: 4,
        description: 'Optimizing application performance ensures fast page loading and a smooth user experience.',
        topics: [
            'Basics of performance optimization',
            'Performance measurement tools',
            'Techniques for optimizing page load',
            'Performance enhancement using caching techniques',
            'Analyzing application performance using tools like Lighthouse',
        ],
    },
    {
        id: 27,
        image: 'assets/cross-browser.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Cross-Browser Compatibility',
        author: 'David Lee',
        rating: 4,
        description: 'Cross-browser compatibility ensures that web applications work well across all major browsers.',
        topics: [
            'Basics of cross-browser compatibility',
            'Handling differences between browsers',
            'Testing compatibility using tools like BrowserStack',
            'Best practices for ensuring compatibility',
            'Common issues and solutions in cross-browser testing',
        ],
    },
    {
        id: 28,
        image: 'assets/seo.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Search Engine Optimization (SEO)',
        author: 'Emily Kim',
        rating: 4,
        description: 'SEO involves optimizing web pages to improve their visibility in search engine results.',
        topics: [
            'Basics of SEO and its importance',
            'Keyword research and implementation',
            'On-page and off-page SEO techniques',
            'Using tools for SEO analysis',
            'Measuring SEO success and adjustments',
        ],
    },
    {
        id: 29,
        image: 'assets/web-security.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Web Security',
        author: 'Gabriel Hernandez',
        rating: 4,
        description: 'Web security encompasses measures taken to protect websites from malicious attacks.',
        topics: [
            'Understanding common web vulnerabilities',
            'Implementing security protocols',
            'Best practices for secure coding',
            'Regular security assessments and updates',
            'Using security tools for monitoring',
        ],
    },
    {
        id: 30,
        image: 'assets/testing.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Testing and Debugging',
        author: 'Avery Perez',
        rating: 4.5,
        description: 'Testing and debugging are crucial processes to ensure that applications function correctly and efficiently.',
        topics: [
            'Different types of testing (unit, integration, etc.)',
            'Using testing frameworks in JavaScript',
            'Debugging techniques and tools',
            'Continuous testing practices',
            'Analyzing test results for improvements',
        ],
    },
    {
        id: 31,
        image: 'assets/ci-cd.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Continuous Integration/Continuous Deployment (CI/CD)',
        author: 'Madison Davis',
        rating: 4,
        description: 'CI/CD practices automate the process of software delivery and infrastructure changes.',
        topics: [
            'Basics of CI/CD concepts',
            'Setting up CI/CD pipelines',
            'Using tools like Jenkins and GitHub Actions',
            'Best practices for continuous integration',
            'Monitoring and maintaining CI/CD processes',
        ],
    },
    {
        id: 32,
        image: 'assets/devops.png',
        title: 'Web Development Concept and Technology',
        framework: 'DevOps',
        author: 'Isabella Wilson',
        rating: 4,
        description: 'DevOps combines software development and IT operations to enhance collaboration and productivity.',
        topics: [
            'Understanding the DevOps culture',
            'Implementing DevOps practices',
            'Tools used in DevOps workflows',
            'Collaboration and communication in teams',
            'Measuring success in DevOps initiatives',
        ],
    },
    {
        id: 33,
        image: 'assets/cloud.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Cloud Computing',
        author: 'Jacob Garcia',
        rating: 4.5,
        description: 'Cloud computing provides on-demand availability of computer resources over the internet.',
        topics: [
            'Basics of cloud computing and its models',
            'Different cloud service providers',
            'Implementing cloud solutions in projects',
            'Security and compliance in cloud environments',
            'Cost management for cloud services',
        ],
    },
    {
        id: 34,
        image: 'assets/docker.png',
        title: 'Web Development Concept and Technology',
        framework: 'Docker',
        author: 'Mia Brown',
        rating: 4,
        description: 'Docker is a platform for developing, shipping, and running applications in containers.',
        topics: [
            'Introduction to containerization',
            'Setting up and using Docker',
            'Creating Docker images and containers',
            'Managing multi-container applications with Docker Compose',
            'Best practices for Dockerizing applications',
        ],
    },
    {
        id: 35,
        image: 'assets/microservices.png',
        title: 'Web Development Concept and Technology',
        framework: 'Microservices',
        author: 'Evelyn Nguyen',
        rating: 4,
        description: 'Docker is a platform for developing, shipping, and running applications in containers.',
        topics: [
            'Introduction to containerization',
            'Setting up and using Docker',
            'Creating Docker images and containers',
            'Managing multi-container applications with Docker Compose',
            'Best practices for Dockerizing applications',
        ],
    },
    {
        id: 36,
        image: 'assets/pwa.png',
        title: 'Web Development Concept and Technology',
        framework: 'Progressive Web Apps (PWA)',
        author: 'Liam Hernandez',
        rating: 4,
        description: 'Explore the world of Progressive Web Apps (PWAs) and learn how to create fast, reliable, and engaging web applications that can work offline and provide a native-like experience on any device.',
        topics: [
            'Introduction to Progressive Web Apps',
            'Service Workers and Offline Capabilities',
            'App Shell Architecture',
            'Push Notifications and Background Sync',
            'Best Practices for Building PWAs',
        ],
    },
    {
        id: 37,
        image: 'assets/wai.jpeg',
        title: 'Web Development Concept and Technology',
        framework: 'Web Accessibility Initiative (WAI)',
        author: 'Avery Perez',
        rating: 4,
        description: 'Understand the principles of web accessibility and how to make websites and applications more inclusive for people with disabilities, in accordance with the Web Accessibility Initiative (WAI) guidelines.',
        topics: [
            'Introduction to Web Accessibility',
            'WAI Guidelines and Standards',
            'Creating Accessible Web Content',
            'Testing for Accessibility',
            'Best Practices for Inclusive Design',
        ],
    },
    {
        id: 38,
        image: 'assets/cms.png',
        title: 'Web Development Concept and Technology',
        framework: 'Content Management Systems (CMS)',
        author: 'Victoria Kim',
        rating: 4,
        description: 'Learn how to use Content Management Systems (CMS) to build, manage, and scale websites and digital content with ease, focusing on popular platforms like WordPress, Joomla, and Drupal.',
        topics: [
            'Introduction to Content Management Systems',
            'Setting up a CMS',
            'Customizing Themes and Plugins',
            'Managing Content and Users',
            'Best Practices for CMS Optimization',
        ],
    },
    {
        id: 39,
        image: 'assets/analytics.png',
        title: 'Web Development Concept and Technology',
        framework: 'Web Analytics',
        author: 'Victoria Kim',
        rating: 4,
        description: 'Dive into the world of web analytics and discover how to track, analyze, and interpret website data to improve user experience, optimize performance, and drive business growth.',
        topics: [
            'Introduction to Web Analytics',
            'Setting up Analytics Tools',
            'Understanding Key Metrics and KPIs',
            'Interpreting User Behavior Data',
            'Best Practices for Data-Driven Decision Making',
        ],
    }
];
module.exports = cardData;