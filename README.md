
# Invoices App

Assessment for frontend engineer role at You Verify

## Description

Creating the Invoices section of the dashboard for a You Verify app  

## Proposed Approach (Incomplete because of the time constraint)
- Create base dashboard 
- Add create invoice modal (using modal details)
- Create endpoints
    - Authentication handled by Firebase
    - Get profile
    - Get dashboard info
    - Create invoice
    - Update invoice
    - Send invoice 
    - Get invoices
    - Websocket for the Recent activities



## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Available Scripts](#available-scripts)
- [Backend](#backend)
  - [Technologies Used](#technologies-used-1)
  - [Setup and Installation](#setup-and-installation-1)
  - [Available Scripts](#available-scripts-1)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

## Project Structure

```plaintext
your-repo/
│
├── frontend/      # React frontend application
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── backend/       # Node backend application
│   ├── middleware/
│   ├── app.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## Frontend

### Technologies Used

- React
- TypeScript
- React Router
- React Query (Yet to implement)
- react-use-websocket (Yet to implement)
- Tailwind CSS

### Setup and Installation

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    yarn
    ```

3. Start the development server:
    ```bash
    yarn run dev
    ```

### Available Scripts

In the `frontend` directory, you can run:

- `yarn run dev`: Runs the app in development mode.
- `yarn run build`: Builds the app for production.

## Backend

### Technologies Used

- Node.js
- Express

### Setup and Installation

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
    

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Available Scripts

In the `backend` directory, you can run:

- `npm start`: Starts the server with nodemon for development.


## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
