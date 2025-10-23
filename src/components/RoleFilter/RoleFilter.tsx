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
            <label className='hidden' htmlFor="role-filter">Role</label>
            <select id="role-filter" className={styles.select} value={value} onChange={(e) => onChange(e.target.value as Role | "All roles")}>
                {roleOptions.map((role) => (
                    <option className={styles.option} key={role} value={role}>{role}</option>
                ))}
            </select>
        </div>
    );
}