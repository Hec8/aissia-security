const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}

export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Network error' }));
        throw new ApiError(response.status, error.message || 'API Error');
    }
    return response.json();
}

export const api = {
    // Services
    getServices: async () => {
        const response = await fetch(`${API_BASE_URL}/services`);
        return handleResponse(response);
    },

    // Products
    getProducts: async () => {
        const response = await fetch(`${API_BASE_URL}/products`);
        return handleResponse(response);
    },

    // Training
    getTrainings: async () => {
        const response = await fetch(`${API_BASE_URL}/trainings`);
        return handleResponse(response);
    },

    // News
    getNews: async () => {
        const response = await fetch(`${API_BASE_URL}/news`);
        return handleResponse(response);
    },

    getNewsById: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/news/${id}`);
        return handleResponse(response);
    },

    // Contact
    sendContactForm: async (data: {
        name: string;
        email: string;
        phone?: string;
        subject: string;
        message: string;
    }) => {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },
};
