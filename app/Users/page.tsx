    export default async function UsersPage() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const users = await res.json();

            return (
                <div className="p-6 max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-500 mb-6">Users List</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user: any) => (
                            <div
                                key={user.id}
                                className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
                                <p className="text-gray-500">{user.email}</p>
                                <p className="text-sm text-gray-400 mt-2">{user.company.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        } catch (error) {
            console.error("Error fetching users:", error);
            return <div className="text-red-500 p-6">Failed to load users. Please try again later.</div>;
        }       
    }                                                                            