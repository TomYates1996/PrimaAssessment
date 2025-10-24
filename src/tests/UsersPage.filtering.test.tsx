import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import UsersPage from '../pages/UsersPage';

const users = [
    { id: '1', name: 'Doug',  email: 'doug@prima.uk',  role: 'Admin' },
    { id: '2', name: 'Dave',  email: 'dave@orima.uk',role: 'Editor' },
    { id: '3', name: 'Frank',   email: 'frank@prima.uk',role: 'Editor' },
];

describe('SearchBox', () => {
    it('filters the user list with an incomplete name input of `d`', async () => {
        const user = userEvent.setup();
        render(<UsersPage users={users} />);
        const searchInput = screen.getByPlaceholderText(/search/i);

        expect(screen.getByText('Doug')).toBeInTheDocument();
        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.getByText('Frank')).toBeInTheDocument();

        await user.clear(searchInput);
        await user.type(searchInput, 'd');

        expect(screen.getByText('Doug')).toBeInTheDocument();
        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.queryByText('Frank')).not.toBeInTheDocument();
    });

    it('filters the user list to users only with name `dave`', async () => {
        const user = userEvent.setup();
        render(<UsersPage users={users} />);
        const searchInput = screen.getByPlaceholderText(/search/i);

        expect(screen.getByText('Doug')).toBeInTheDocument();
        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.getByText('Frank')).toBeInTheDocument();

        await user.clear(searchInput);
        await user.type(searchInput, 'dave');

        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.queryByText('Doug')).not.toBeInTheDocument();
        expect(screen.queryByText('Frank')).not.toBeInTheDocument();
    });
});

describe('RoleFilter', () => {
    it('filters users by selected role only', async () => {
        const user = userEvent.setup();
        render(<UsersPage users={users} />);

        expect(screen.getByText('Doug')).toBeInTheDocument();
        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.getByText('Frank')).toBeInTheDocument();

        const roleSelect = screen.getByRole('button', { name: 'Editor' });
        await user.click(roleSelect);

        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.getByText('Frank')).toBeInTheDocument();
        expect(screen.queryByText('Doug')).not.toBeInTheDocument();
    });

    it('filters users by role and search term', async () => {
        const user = userEvent.setup();
        render(<UsersPage users={users} />);

        const searchInput = screen.getByPlaceholderText(/search/i);

        await user.type(searchInput, 'a');

        const roleSelect = screen.getByRole('button', { name: 'Editor' });
        await user.click(roleSelect);

        expect(screen.getByText('Dave')).toBeInTheDocument();
        expect(screen.getByText('Frank')).toBeInTheDocument();
        expect(screen.queryByText('Doug')).not.toBeInTheDocument();

        const visibleUsers = screen.getAllByText(/@/i); 
        expect(visibleUsers.length).toBe(2);
    });
});