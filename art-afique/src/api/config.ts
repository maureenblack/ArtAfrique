/// <reference types="node" />
import axios, { InternalAxiosRequestConfig } from 'axios';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE_URL?: string;
    }
  }
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});