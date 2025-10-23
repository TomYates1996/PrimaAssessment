import { useId } from "react";
import styles from "./SearchBox.module.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBox({
    value,
    onChange,
    }: Props) {
    const id = useId();
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>Search Users</label>
            <div className={styles.searchBar}>
                <input id={id} type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search..." className={styles.input}/>
            </div>
        </div>
    );
}
