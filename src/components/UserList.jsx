import User from "./User";

function UserList({ users, handleEditUser, getAllUsers }) {
  return (
    <div className="flex justify-center">
      <article className="grid gap-4  md:grid-cols-[repeat(auto-fit,_390px)] items-center m-0 p-4 max-w-4xl">
        {users.map((user) => (
          <User user={user} key={user.id} handleEditUser={handleEditUser} getAllUsers={getAllUsers}/>
        ))}
      </article>

    </div>

  );
}
export default UserList;