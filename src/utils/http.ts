import axios, { type CreateAxiosDefaults } from "axios";

export function http(config?: CreateAxiosDefaults<unknown> | undefined) {
    return axios.create({
        ...config,
        headers: {
            // 'ngrok-skip-browser-warning':'asda',
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODkvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3NDYzMTUxODcsImV4cCI6MTc0NjMxODc4NywibmJmIjoxNzQ2MzE1MTg3LCJqdGkiOiJndXlTVTRNdGU1aUwyTWRJIiwic3ViIjoiOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.65q9lofAL34cnH0d8aOOViwlLUGc_KY6vYs2UGt3TuE`,
        },
        baseURL: import.meta.env.VITE_BASE_URL
    });
}