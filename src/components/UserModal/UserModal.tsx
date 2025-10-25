import { useEffect, useRef } from "react";
import type { User } from "../../types/user";
import styles from './UserModal.module.css'

type Props = {
    user: User;
    onClose?: (user: User) => void; 
};

export default function UserModal({ user, onClose }: Props) {

    const closeButtonRef = useRef<HTMLButtonElement>(null);   
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose?.(user);
        };
        window.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, user]);

    return (
        <div className={styles.modalWrapper} onClick={onClose}>
            <section role="dialog" aria-modal="true" aria-labelledby="user-title" className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
                <button ref={closeButtonRef} className={styles.closeModal} type="button" onClick={() => onClose?.(user)} aria-label="Close user details">X</button>
                <img className={styles.userIcon} src={user.profile_picture} alt={`user icon for ${user.name}`} height={80} width={80} />
                <div className={styles.textSection}>
                    <div className={styles.nameEmail}>
                        <h2 id="user-title" className={styles.userName}>{user.name}</h2>
                        <p className={styles.userEmail}>{user.email}</p>
                    </div>
                    <p className={styles.userRole}>User Role: {user.role}</p>
                    <p className={styles.userStatus}>Account Status: {user.status}</p>
                </div>
            </section>
        </div>
    );
}
