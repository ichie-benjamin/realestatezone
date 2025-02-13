


export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://app.realestatezone.com.ng/api/v1';

export const fetchWrapper = async (endpoint : any, options = {}) => {
    // Construct full URL if relative path is provided
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

    // Default options
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 8000,

    };

    // Merge options
    const mergedOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
        },
    };

    try {
        const response = await fetch(url, mergedOptions);

        // Handle HTTP errors
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'API request failed');
        }

        return await response.json();
    } catch (error) {
        // You can add custom error handling here
        console.error('Fetch error:', error);
        throw error;
    }
};
