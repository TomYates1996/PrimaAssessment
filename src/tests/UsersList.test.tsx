import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UsersList from '../components/UserList/UsersList';

const users = [
    { id: '1', name: 'John', email: 'john@prima.uk', role: 'Admin' },
    { id: '2', name: 'Frank', email: 'frank@prima.uk', role: 'Editor' },
];

describe('UsersList', () => {
    it('renders users on a list', () => {
        render(<UsersList users={users} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(users.length);
    });

    it('renders empty when no users', () => {
        render(<UsersList users={[]} />);
        expect(screen.getByText(/no users found/i)).toBeInTheDocument();
    });
});