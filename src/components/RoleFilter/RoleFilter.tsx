import styles from "./RoleFilter.module.css";
import { ROLES, type Role } from "../../types/user";

type Props = {
    value: Role | "All";
    onChange: (value: Role | "All") => void;
};

const roleOptions = ["All", ...ROLES]; 

export default function RoleFilter({ value, onChange }: Props) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="role-filter">Role</label>
            <select id="role-filter" className={styles.select} value={value} onChange={(e) => onChange(e.target.value as Role | "All")}>
                {roleOptions.map((role) => (
                    <option className={styles.option} key={role} value={role}>{role}</option>
                ))}
            </select>
        </div>
    );
}