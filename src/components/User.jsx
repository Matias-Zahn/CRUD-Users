import { IconCake, IconEditCircle, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

function User({ user, handleEditUser, getAllUsers }) {
  const [confirmationAlert, setConfirmationAlert] = useState(false);

  const handleDeleteUser = () => {
    setConfirmationAlert(true);
  };
  return (
    <section className="bg-[#E5E5E5] p-4 grid items-center rounded-md gap-2 w-[min(500px,_100%)] ">
      <div className="flex gap-4 justify-between items-center border-b">
        <h1 className="text-2xl tracking-widest font-bold py-2">
          {user.first_name} {user.last_name}
        </h1>
      </div>
      <section className=" grid gap-4">
        <div>
          <h5 className="text-[#D3D3D3]">Correo</h5>
          <p className="text-[#302F2F]">{user.email}</p>
        </div>
        <div>
          <h5 className="text-[#D3D3D3]">Cumpleaños</h5>
          <p className="text-[#302F2F] flex gap-2"> <IconCake />  {user.birthday}</p>
        </div>
      </section>
      <div className="text-white flex gap-1 justify-end">
          <button
            onClick={handleDeleteUser}
            className="bg-red-500 p-1 hover:bg-red-900 transition-colors rounded-md"
          >
            <IconTrash size={28} />
          </button>
          <button
            onClick={() => handleEditUser(user)}
            className="bg-white text-black p-1 hover:bg-slate-200 transition-colors rounded-md"
          >
            <IconEditCircle size={28} />
          </button>
        </div>
      <DeleteUser  setConfirmationAlert={setConfirmationAlert} confirmationAlert={confirmationAlert} userId={user.id} getAllUsers={getAllUsers}/>
    </section>
  );
}
export default User;
