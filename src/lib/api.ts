export interface User {
  id: number;
  name: string;
  email: string;
}

const API_BASE = 'https://code-alpha-internship-task1-bookhaven-ecommerce-usv9tktk1.vercel.app/api';

export function getToken(): string | null {
  return localStorage.getItem('token');
}

export function setSession(token: string, user: User) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export function getUser(): User | null {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
}

export function isLoggedIn(): boolean {
  return !!getToken();
}

// Wrapper around fetch that adds the base URL, JSON headers,
// and the auth token automatically when one exists.
export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }

  return data;
}
