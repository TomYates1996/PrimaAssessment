import { useState } from "react";
import type { User, Role } from "../types/user";
import { UsersList } from "../components/UserList/UsersList";
import SearchBox from "../components/SearchBox/SearchBox";
import RoleFilter from "../components/RoleFilter/RoleFilter";

export function UsersPage({ 
    users,
    loading = false,
    error = null, 
}: { users: User[]; loading?: boolean; error?: string | null }) {
    const [searchInput, setSearchInput] = useState("");
    const [role, setRole] = useState<Role | "All">("All");

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
            <section className="user-list-container">
                <h1>Users</h1>
                <div className="filters">
                    <SearchBox value={searchInput} onChange={setSearchInput} placeholder="Search for name…"/>
                    <RoleFilter value={role} onChange={setRole} />
                    <button type="button" onClick={clearAll} aria-label="Clear all filters">
                        Clear filters
                    </button>
                </div>
                <section className="content">
                    {loading && <p>Loading…</p>}
                    {!loading && error && <p role="alert">Error: {error}</p>}
                    {!loading && !error && <UsersList users={visible} onSelectUser={(user) => console.log(user)} />}
                </section>
            </section>
        </main>
    );
}