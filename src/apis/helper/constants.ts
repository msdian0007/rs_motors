export const baseURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api" // development api
    : "https://rs-motors.vercel.app/api" // production api