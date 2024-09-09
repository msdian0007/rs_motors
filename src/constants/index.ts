
export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : process.env.BASE_URL

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
