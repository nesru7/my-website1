# Personal Portfolio

A modern, responsive personal portfolio website built with React.js and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Typing animation, skill progress bars, project filters
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Performance Optimized**: Fast loading and optimized for performance

## Technologies Used

- **Frontend**: React.js, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Icons**: SVG icons
- **Animations**: CSS animations and transitions

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with typing animation
│   ├── About.js           # About section with stats
│   ├── Skills.js          # Skills section with progress bars
│   ├── Projects.js        # Projects showcase with filtering
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main app component
├── index.js              # React DOM render
└── index.css             # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.js` - Name, roles, and description
- `src/components/About.js` - About text and stats
- `src/components/Skills.js` - Your skills and technologies
- `src/components/Projects.js` - Your projects
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Footer information

### Styling
- Colors can be customized in `tailwind.config.js`
- Additional styles can be added in `src/index.css`

### Content
- Replace placeholder project images with your actual project screenshots
- Update social media links in Header and Footer components
- Modify the typing animation roles in Hero component

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use `npm run build` and deploy the build folder

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

John Doe - john.doe@example.com

Project Link: [https://github.com/johndoe/portfolio](https://github.com/johndoe/portfolio)