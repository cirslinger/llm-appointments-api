# LLM Appointments API

This project provides an API endpoint that returns upcoming appointments for users based on their user ID.

## Project Structure

```
llm-appointments-api
├── src
│   ├── index.ts                      # Entry point of the application
│   ├── routes
│   │   └── api.ts                    # API route definitions
│   ├── controllers
│   │   └── appointmentController.ts   # Controller for handling requests
│   ├── services
│   │   └── appointmentService.ts      # Service with mock appointment data
│   ├── types
│   │   └── index.ts                   # Type definitions
│   └── middleware
│       └── errorHandler.ts            # Middleware for error handling
├── package.json                       # NPM configuration file
├── tsconfig.json                      # TypeScript configuration file
├── .env.example                       # Example environment variables
└── README.md                          # Project documentation
```

## Installation

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by copying `.env.example` to `.env`

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. For production:
   ```bash
   npm run build
   npm start
   ```

## API Endpoint

### POST /api/appointments

Get upcoming appointments for a user by their user ID.

**Request Body:**
```json
{
  "userId": "10001"
}
```

**Success Response (200):**
```json
{
  "userId": "10001",
  "userName": "John Doe",
  "appointments": [
    {
      "appointmentId": "APT-10001-001",
      "date": "2025-11-15",
      "time": "10:00 AM",
      "provider": "Dr. Sarah Johnson",
      "specialty": "Primary Care",
      "location": "Springfield Medical Center - Building A, Room 205",
      "appointmentType": "Annual Physical",
      "status": "Confirmed",
      "reason": "Annual checkup and preventive care"
    }
  ]
}
```

**Error Response (404):**
```json
{
  "error": "Not Found",
  "message": "No user found with the provided userId"
}
```

## Available User IDs

- `10001` - John Doe (3 appointments)
- `10002` - Jane Smith (2 appointments)
- `10003` - Bob Wilson (3 appointments)
- `10004` - Alice Brown (1 appointment)
- `10005` - Charlie Davis (3 appointments)

## License

MIT
