import type { User } from "../../types/user";
import styles from './UserModal.module.css'

type Props = {
    user: User;
    onClose?: (user: User) => void; 
};

export function UserModal({ user, onClose }: Props) {
    return (
        <div className={styles.modalWrapper} onClick={onClose}>
            <section className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeModal} type="button" onClick={() => onClose?.(user)}>X</button>
                <img className={styles.userIcon} src={user.profile_picture} alt="" height={80} width={80} />
                <div className={styles.textSection}>
                    <div className={styles.nameEmail}>
                        <h2 className={styles.userName}>{user.name}</h2>
                        <p className={styles.userEmail}>{user.email}</p>
                    </div>
                    <p className={styles.userRole}>{user.role}</p>
                </div>
            </section>
        </div>
    );
}
