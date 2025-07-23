This project is a Task Management Application built with React, TypeScript, and Auth0 for secure authentication. 
The application offers authenticated users the ability to create, update, and manage tasks in a clean inteface.
The goal of this app is to demonstrate key web development principles using React and TypeScript, including:
- Authentication and Authorization
- State management via Context API
- Form handling and validation
- Type-safe data modeling
- Clean navigation and protected routing

The application is broken into modular components, making it easy to maintain and scale. These include:
- TaskForm – for creating new tasks
- TaskList – for displaying all current tasks
- ProtectedRoute – to restrict access to authenticated users
- Auth0ProviderWithNavigate – to wrap the app in Auth0 logic
- Dashboard – the main page for managing tasks
- Home – the landing page with login/logout options

To set up the Task Manager App, I first installed all the necessary project dependencies using npm install, which included React, TypeScript, and the Auth0 SDK. 
After setup, I launched the development server using npm run dev and confirmed that the app loaded correctly in the browser. 
I tested the authentication flow by logging in and out, verified task creation and editing features. 
