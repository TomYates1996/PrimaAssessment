import type { User } from "../../types/user";
import { UserItem } from "./UserItem";

export function UsersList({
    users,
    onSelectUser,
    }: {
        users: User[];
        onSelectUser?: (user: User) => void;
}) 
{
    if (users.length === 0) return <p>No users found.</p>;
    return (
            <ul className="user-list">
            {users.map((user) => (
                <li key={user.id}>
                    <UserItem user={user} onClick={onSelectUser} />
                </li>
            ))}
        </ul>
    );
}
