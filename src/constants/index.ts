
export const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://rs-motors.vercel.app/api'

export const appUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://rs-motors.vercel.app'

export const multipartConfig = {
    headers: {
        'content-type': 'multipart/form-data',
    },
};

export const jsonConfig = {
    headers: {
        'content-type': 'application/json',
    },
};

export const bsStages = [
    {
        id: 1,
        stage: "BS-2"
    },
    {
        id: 2,
        stage: "BS-3"
    },
    {
        id: 3,
        stage: "BS-4"
    },
    {
        id: 4,
        stage: "BS-6"
    },
]
