export const ROLES = ["Admin", "Editor", "Viewer"] as const;
export type Role = typeof ROLES[number];
export type Status = 'active' | 'inactive';

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    status: Status;
    profile_picture: string;
}