import styles from "./RoleFilter.module.css";
import { ROLES, type Role } from "../../types/user";

type Props = {
    value: Role | "All roles";
    onChange: (value: Role | "All roles") => void;
};

const roleOptions = ["All roles", ...ROLES]; 

export default function RoleFilter({ value, onChange }: Props) {
    return (
        <div className={styles.wrapper}>
            <label className="hidden">Role</label>
            <div className={styles.buttonWrap}>
                {roleOptions.map((role) => (
                    <button key={role} type="button" className={`${styles.roleButton} ${value === role ? styles.active : ""}`} onClick={() => onChange(role as Role | "All roles")}>
                        {role}
                    </button>
                ))}
            </div>
        </div>
    );
}