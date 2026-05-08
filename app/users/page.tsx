import Link from "next/link";
import { getUsers } from "../services/users";

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
