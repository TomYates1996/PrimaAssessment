import { useEffect, useState } from "react";
import type { User } from "./types/user";
import { getUsers } from "./api/routes";
import UsersPage from "./pages/UsersPage";
import "./App.css";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        getUsers()
        .then(setUsers)
        .catch((e) => setError(e.message || "Failed to load users"))
        .finally(() => setLoading(false));
    }, []);

    return <UsersPage users={users} loading={loading} error={error} />;
}