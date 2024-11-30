# Google OAuth Login Service with Passport.js (TypeScript)

This project demonstrates how to implement Google OAuth 2.0 authentication in a Node.js application using Passport.js and TypeScript.

## Features
- Google OAuth 2.0 Authentication
- User session management with `express-session`
- TypeScript for type safety

---

## Prerequisites

1. **Node.js and npm**:
   Make sure you have Node.js (>=14.x) and npm installed on your machine.

   ```bash
   node -v
   npm -v
   ```

2. **Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project.
   - Navigate to `APIs & Services > Credentials` and create an OAuth 2.0 Client ID.
   - Configure the "Authorized redirect URIs" as:
     - `http://localhost:3000/auth/google/callback`
   - Save the `Client ID` and `Client Secret` for later use.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd google-login-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   GOOGLE_CLIENT_ID=<Your-Google-Client-ID>
   GOOGLE_CLIENT_SECRET=<Your-Google-Client-Secret>
   SESSION_SECRET=<Your-Session-Secret>
   PORT=3000
   ```

---

## Project Structure

```plaintext
/src
  auth.ts         # Google OAuth 2.0 configuration
  app.ts          # Express application setup
  server.ts       # Application entry point
.env              # Environment variables
package.json      # Project dependencies
tsconfig.json     # TypeScript configuration
```

---

## Scripts

- **Start Development Server**:

  ```bash
  npm run dev
  ```

- **Build**:

  ```bash
  npm run build
  ```

- **Run Built Server**:

  ```bash
  npm run start
  ```

---

## API Endpoints

### 1. `GET /`
**Description**: Home page with a login link.

### 2. `GET /auth/google`
**Description**: Initiates Google OAuth authentication.

### 3. `GET /auth/google/callback`
**Description**: Handles the callback from Google after authentication.

### 4. `GET /profile`
**Description**: Displays user profile information.

### 5. `GET /logout`
**Description**: Logs out the user and clears the session.

---

## How to Use

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. Click the "Login with Google" link.

4. Authenticate with your Google account.

5. View your profile information on the `/profile` page.

6. Logout by navigating to `/logout`.

---

## Additional Notes

- Ensure the Google OAuth "Authorized redirect URIs" matches your application's callback URL (e.g., `http://localhost:3000/auth/google/callback`).
- Use a secure `SESSION_SECRET` for production environments.

---

## Enhancements

1. **Database Integration**:
   Save user information to a database for persistent user management.

2. **Error Handling**:
   Improve error responses for failed logins or server issues.

3. **UI Improvements**:
   Integrate a front-end framework (React, Vue, etc.) for a better user experience.

4. **HTTPS and Cookie Security**:
   Ensure `secure` cookies and HTTPS for production.

---

## License

This project is licensed under the MIT License.

