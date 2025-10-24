import type { User } from "../../types/user";
import styles from "./UserItem.module.css";

type Props = { 
    user: User;
    onClick?: (user: User) => void;
};

export function UserItem({ user, onClick }:  Props ) {
    return (
        <button type="button" className={styles.userItemInner} onClick={() => onClick?.(user)} aria-label={`View user ${user.name}`}>
            <img className={styles.icon} src={user.profile_picture} alt="" width={40} height={40} aria-hidden="true"/>
            <div className={styles.userText}>
                <div className={styles.nameSpan}>
                    <p className={styles.name}>{user.name}</p>
                    <p className={styles.email}>{user.email}</p>
                </div>
                <p className={styles.role}>({user.role})</p>
            </div>
        </button>
    );
}
