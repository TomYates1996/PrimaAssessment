import type { User } from "../../types/user";
import { UserItem } from "./UserItem";
import styles from "./UsersList.module.css";

type Props = { 
    users: User[];
    onSelectUser?: (user: User) => void;
};

export default function UsersList({ users, onSelectUser }: Props ) 
{
    if (users.length === 0) return <p className={styles.noUsers}>No users found.</p>;
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
