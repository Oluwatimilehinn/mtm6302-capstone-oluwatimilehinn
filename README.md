Prototype Development Report
Overview
This report outlines the steps taken to create the prototype, the resources used, and the challenges faced during the development process.

Steps Taken to Create the Prototype
Project Planning

Defined the project requirements and goals.
Sketched wireframes for the homepage and quiz page.
Setting Up the Environment

Created the project structure (index.html, quiz.html, style.css, script.js).
Linked external stylesheets and scripts.
Developing the Homepage

Added a banner image at the top.
Used Flexbox to align the homepage image (left) and quiz button (right).
Ensured responsiveness for different screen sizes.
Building the Quiz Page

Integrated the Quiz API to fetch random questions.
Displayed questions dynamically with buttons for multiple-choice answers.
Implemented logic to track correct and incorrect answers.
Styling with CSS

Used Flexbox to center the quiz container.
Designed an interactive "Start Quiz" button with hover effects.
Applied responsive styles for mobile compatibility.
Resources Used
HTML, CSS, JavaScript – Core technologies for building the prototype.
QuizAPI.io – Used to fetch random quiz questions.
MDN Web Docs – For CSS Flexbox and JavaScript functions.
Google Fonts & Font Awesome – For typography and icons.
VS Code & Live Server – For coding and real-time preview.
Challenges Faced
Quiz Alignment Issue – Initially, the quiz container was aligning to the left instead of the center. This was fixed using margin: 0 auto; and display: flex; justify-content: center;.
API Integration – Understanding the structure of API responses and handling missing data fields.
Responsiveness – Adjusting layout and image sizes to fit different screen sizes.
Conclusion
This prototype successfully implements a functional quiz site with a well-structured layout and dynamic question fetching. Future improvements could include a score-tracking system, timer, and more quiz categories.
