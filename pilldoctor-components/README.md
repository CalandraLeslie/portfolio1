# PillDoctor Components

PillDoctor is a comprehensive medicine tracking application designed to help users manage their medication schedules, track their health, and set reminders for taking pills.

## Table of Contents

1. [Installation](#installation)
2. [Setting Up Development](#setting-up-development)
3. [Usage Guide](#usage-guide)
4. [Environment Variables](#environment-variables)
5. [Things to Follow to the Future to Work](#things-to-follow-to-the-future-to-work)
6. [Testing Instructions](#testing-instructions)
7. [Deployment Instructions](#deployment-instructions)
8. [License Information](#license-information)
9. [Changelog](#changelog)
10. [Contact Information](#contact-information)
11. [Acknowledgements](#acknowledgements)

## Installation

To install PillDoctor Components, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yevasha/pilldoctor-components
2. Navigate to the project directory:
   ```
   cd pilldoctor-components
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Setting Up Development

1. Ensure you have Node.js and npm installed on your machine.
2. After installation, start the development server:
   ```
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Guide

PillDoctor Components consists of several key features:

1. **Homepage**: The landing page of the application.
2. **Login/Register**: User authentication system.
3. **Calendar**: For tracking medication schedules.
4. **Profile Page**: User information and settings.
5. **Amount Tracker**: To monitor medication quantities.
6. **Reminder**: Set alerts for taking medication.
7. **Health Tracker**: Monitor overall health metrics.

To use each component, navigate through the application using the menu button located in the top right corner of the homepage.

## Environment Variables

Currently, no environment variables are required for basic setup. As the project evolves, any necessary environment variables will be listed here.

## Things to Follow to the Future to Work

- Implement backend API integration for user authentication and data storage.
- Develop the Health Tracker and Reminder components.
- Enhance the Calendar component to include medication scheduling.
- Implement state management (e.g., Redux) for better data flow between components.
- Add responsive design for mobile compatibility.

## Testing Instructions

To run tests:

1. Ensure all dependencies are installed.
2. Run the test command:
   ```
   npm test
   ```

(Note: Actual test scripts need to be implemented in the project)

## Deployment Instructions

To deploy PillDoctor Components:

1. Build the project:
   ```
   npm run build
   ```
2. The build folder is now ready to be deployed.
3. For static hosting, upload the contents of the build folder to your hosting provider.

For more specific deployment instructions, refer to the [Create React App deployment documentation](https://create-react-app.dev/docs/deployment/).

## License Information

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Changelog

- v0.1.0 (2024-09-21): Initial release with basic components.

## Contact Information

For support or inquiries, please contact:

Project Maintainer: Group 3
Email: group3@gmail.com
GitHub:https://github.com/yevasha/pilldoctor-components

## Acknowledgements

- React.js community for providing the framework and resources.
- All contributors who have helped in developing PillDoctor Components.
