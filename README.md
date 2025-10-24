### Setup Instructions:

1. **Clone** the repository to your local machine.
2. Run the following command to install the required dependencies:
   ```bash
   npm install
   npm start

### Technology choices

For the frontend, I’ve used React with TypeScript, with Vite as the build tool.
For the backend, I set up a quick JSON server with a database file.
The styling uses plain CSS, scoped within React modules.

### Reasoning

React and TypeScript were chosen as they were explicitly mentioned in the requirements. Both are lightweight and efficient for building frontend applications.
Given that the project was focused on the frontend, I opted to use a JSON server, with a local database file, keeping things simple. Rather than setting up a more complex backend with Node.js or Laravel. 
For styling, I chose plain CSS packed into React CSS modules over frameworks like Tailwind for flexibility and to avoid unnecessary bloat. As the project was relatively small, integrating a large CSS framework like Tailwind would have increased the project size without much benefit hence my choice for plain CSS. 
