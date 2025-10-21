import type { User } from "../../types/user";

export function UserItem({
    user,
    onClick,
    }: {
    user: User;
    onClick?: ( u : User ) => void;
    }) {
    return (
        <button type="button" className="user-item" onClick={() => onClick?.(user)}>
            <img src={user.profile_picture} alt="" width={40} height={40} aria-hidden="true"/>
            <div className="user-text">
                <p>{user.name} — {user.email} ({user.role})</p>
            </div>
        </button>
    );
}
