import type { User } from "../../types/user";
import { UserItem } from "./UserItem";
import styles from "./UsersList.module.css";

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
            <ul className={styles.userList}>
            {users.map((user) => (
                <li className={styles.userItem} key={user.id}>
                    <UserItem user={user} onClick={onSelectUser} />
                </li>
            ))}
        </ul>
    );
}
