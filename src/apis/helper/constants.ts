export const baseURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api" // development api
    : "https://rs-motors-git-main-mohasins-projects.vercel.app/api" // production api