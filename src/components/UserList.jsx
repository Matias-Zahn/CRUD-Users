import { Toaster } from "sonner";
import User from "./User";

function UserList({ users, handleEditUser, getAllUsers, handleDelete }) {
  return (
    <div className="flex justify-center">
      <article className="grid gap-4 p-4 ">
        {users.map((user) => (
          <User user={user} key={user.id} handleEditUser={handleEditUser} getAllUsers={getAllUsers} handleDelete={handleDelete}/>
        ))}
      </article>
      <Toaster />
    </div>

  );
}
export default UserList;
