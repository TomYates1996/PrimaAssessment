import { useId } from "react";
import styles from "./SearchBox.module.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function SearchBox({
    value,
    onChange,
    placeholder = "Search by name…",
    }: Props) {
    const id = useId();
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>Search Users</label>
            <div className={styles.field}>
                <input id={id} type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={styles.input}/>
                {value && (
                <button type="button" aria-label="Clear search" className={styles.clear} onClick={() => onChange("")}>x</button>
                )}
            </div>
        </div>
    );
}
