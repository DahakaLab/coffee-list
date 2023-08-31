import axios from 'axios';

const defaultApiUrl = 'http://127.0.0.1:3000';
const envApiUrl: string | undefined = import.meta.env.VITE_API_URL;
const apiUrl = envApiUrl || defaultApiUrl;

console.log('envApiUrl', envApiUrl);

export const transport = axios.create({
	baseURL: apiUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});
