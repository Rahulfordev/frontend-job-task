# Project Setup Documentation

## How to Run the Project Locally

### 1. Clone the Repository

- Open a terminal and run the following command:
  ```bash
  git clone https://github.com/Rahulfordev/frontend-job-task.git
  ```

### 2. Navigate to the Project Directory

```bash
cd frontend-job-task
```

### 3. Install Dependencies

Ensure you have Node.js (v16 or above) and npm installed. Then, run:

```bash
npm install
```

### 4. Set Up Environment Variables

- Create a `.env.local` file in the root of your project.
- Add the required environment variables (e.g., API keys, base URLs) as per the provided documentation. Example:
  ```env
  NEXT_PUBLIC_API_BASE_URL=https://api.example.com
  ```

### 5. Start the Development Server

Run the following command:

```bash
npm run dev
```

- The application will be accessible at `http://localhost:3000`.
