# Portfolio Website
This is a personal portfolio website built using **Vite, React, TypeScript, and Chakra UI**. The project showcases an about section, a portfolio gallery featuring favorite books, an image comparison section, and a contact form.

## Features
- Responsive and modern UI using Chakra UI
- Portfolio gallery showcasing favorite books
- Before & After image comparison section
- Contact form with validation
- Styled using Chakra UI with color themes

## Technologies Used
- **Vite** - Fast build tool for modern web applications
- **React** - UI library for building interactive user interfaces
- **TypeScript** - Strongly typed JavaScript for maintainable code
- **Chakra UI** - Modular component library for styling

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
Install dependencies:

sh
Copy
Edit
npm install
# or
yarn install
Start the development server:

sh
Copy
Edit
npm run dev
# or
yarn dev
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:5173
Build for Production
To create an optimized production build, run:

sh
Copy
Edit
npm run build
# or
yarn build
The build files will be generated in the dist folder.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


