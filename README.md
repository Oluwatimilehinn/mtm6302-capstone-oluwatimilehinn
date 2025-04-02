Capstone Project Report – Tropical Fusion Quiz
🧠 Project Overview
This web application is a quiz platform that fetches random questions using the QuizAPI.io API. It allows users to test their knowledge by clicking a button to receive a new question and choosing an answer from multiple options.
⚙ Technologies Used
HTML5 for structuring content
CSS3 for styling the layout and making the app responsive
JavaScript (ES6) for interactivity and API integration
Fetch API for asynchronous operations (no page reloads)
QuizAPI.io as the external data source for quiz questions
🧱 Project Structure
index.html – Main HTML page containing the homepage and quiz section
style.css – Stylesheet for layout, typography, and responsiveness
script.js – JavaScript file that handles:
Fetching questions from the API
Displaying questions and answers dynamically
Tracking correct and incorrect answers
Updating the UI based on user interactions
🧩 External Resources
QuizAPI.io – Free quiz API used to fetch questions
MDN Web Docs – Reference for JavaScript and Fetch API
Google Fonts – Typography inspiration (optional)
🚧 Challenges Faced
Handling the API format: The API returns answers as key-value pairs, and some answers are null. A filter had to be added to show only valid answers.
Dynamic DOM updates: Creating buttons on the fly and attaching event listeners required careful handling to avoid inline event attributes.
Responsive design: Ensuring the layout adapted well to small screens involved testing different flex settings and widths.
Page navigation: Originally built with two HTML files. It was later restructured into a single-page application to meet requirements.
💡 Lessons Learned
How to fetch and display data from a third-party API
Importance of separating structure, style, and behavior (HTML/CSS/JS)
Better practices in DOM manipulation and event handling
Building a fully functional interactive web app without page reloads
 
Quiz API
Test your knowledge or easily embed a quiz on your website with the Quiz API
