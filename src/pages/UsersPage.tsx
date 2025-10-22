import { useState } from "react";
import type { User, Role } from "../types/user";
import { UsersList } from "../components/UserList/UsersList";
import SearchBox from "../components/SearchBox/SearchBox";
import RoleFilter from "../components/RoleFilter/RoleFilter";
import styles from "./UsersPage.module.css";
import { UserModal } from "../components/UserModal/UserModal";

export function UsersPage({ 
    users,
    loading = false,
    error = null, 
}: { users: User[]; loading?: boolean; error?: string | null }) {
    const [searchInput, setSearchInput] = useState("");
    const [role, setRole] = useState<Role | "All">("All");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const visible = users.filter(user => {
        const term = searchInput.trim().toLowerCase();
        const matchRole = role === "All" || user.role === role;
        const matchName = !term || user.name.toLowerCase().includes(term);
        return matchRole && matchName;
    });

    function clearAll() {
        setSearchInput("");
        setRole("All");
    }

    return (
        <main className="page">
            <section className={styles.usersSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.leftWrap}>
                        <h1 className={styles.title}>Users list</h1>
                        <div className={styles.filters}>
                            <SearchBox value={searchInput} onChange={setSearchInput} placeholder="Search for name…"/>
                            <RoleFilter value={role} onChange={setRole} />
                            <button className={styles.clearButton} type="button" onClick={clearAll} aria-label="Clear all filters">
                                Clear filters
                            </button>
                        </div>
                    </div>
                    {selectedUser && (
                        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
                    )}
                    <section className={styles.usersInner}>
                        {loading && <p>Loading…</p>}
                        {!loading && error && <p role="alert">Error: {error}</p>}
                        {!loading && !error && <UsersList users={visible} onSelectUser={setSelectedUser} />}
                    </section>
                </div>
            </section>
        </main>
    );
}