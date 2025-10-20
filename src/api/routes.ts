import type { User } from '../types/user';

const API_URL = "http://localhost:3001";

// Get all users
export async function getUsers(): Promise<User[]> {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) {
        throw new Error(`Failed to fetch users (${res.status})`);
    }
    return res.json();
}