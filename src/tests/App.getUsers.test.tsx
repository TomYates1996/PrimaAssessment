import { describe, it, expect, vi, afterEach } from 'vitest';
import { getUsers } from '../api/routes';

describe('getUsers', () => {
    const mockUsers = [
        { id: '1', name: 'John', email: 'john@prima.uk', role: 'Admin' },
        { id: '2', name: 'Frank', email: 'frank@prima.uk', role: 'Editor' },
    ];

    afterEach(() => { 
        vi.restoreAllMocks(); 
    });

    it('returns a list of users', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            json: async () => mockUsers,
        }));

        const result = await getUsers();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockUsers);
    });

    it('error when request not successful', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        }));
        await expect(getUsers()).rejects.toThrow();
    });
});
