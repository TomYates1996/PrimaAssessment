export type Role = 'Admin' | 'Editor' | 'Viewer';
export type Status = 'active' | 'inactive';

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    status: Status;
    profile_picture: string;
}