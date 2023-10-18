import User from "./User";

function UserList({ users, handleEditUser, getAllUsers }) {
  return (
    <div className="flex justify-center">
      <article className="grid gap-4 p-4 ">
        {users.map((user) => (
          <User user={user} key={user.id} handleEditUser={handleEditUser} getAllUsers={getAllUsers}/>
        ))}
      </article>

    </div>

  );
}
export default UserList;
