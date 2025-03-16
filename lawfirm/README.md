# Law Firm Website

## Overview
This project is a law firm website built using React. It features a modern design and provides essential information about the law firm, its attorneys, practice areas, and client testimonials. The website is structured to enhance user experience and accessibility.

## Color Scheme
- **Primary Color:** Oxford Blue (#002147)
- **Secondary Color:** Medium Gray (#626262)
- **Accent Color:** Dusty Gold (#D5B942)
- **Background Color:** Pale Blue (#E6EDF2)

## Project Structure
```
law-firm-website
├── public
│   ├── index.html
│   └── favicon.js
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Navigation.js
│   │   ├── AttorneyCard.js
│   │   ├── ContactForm.js
│   │   ├── TestimonialSlider.js
│   │   └── PracticeAreaCard.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── PracticeAreas.js
│   │   ├── Attorneys.js
│   │   ├── Testimonials.js
│   │   └── Contact.js
│   ├── styles
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── components
│   │       ├── Header.css
│   │       ├── Footer.css
│   │       └── ContactForm.css
│   ├── utils
│   │   └── formValidation.js
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd law-firm-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website.

## Features
- **Responsive Design:** The website is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Attorney Profiles:** Each attorney has a dedicated card displaying their information.
- **Contact Form:** Users can easily reach out through the contact form.
- **Testimonials:** A slider showcases client testimonials to build trust and credibility.
- **Practice Areas:** Detailed information about the various legal services offered by the firm.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.