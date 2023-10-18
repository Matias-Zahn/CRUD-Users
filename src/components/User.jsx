import { IconCake, IconEditCircle, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

function User({ user, handleEditUser, getAllUsers }) {
  const [confirmationAlert, setConfirmationAlert] = useState(false);


  const handleDeleteUser = () => {
    setConfirmationAlert(true);
  };
  return (
    <section className="bg-[#D3D3D3]/50 p-4 grid rounded-2xl gap-2 ">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center border-b transition-all">
        <div className="flex flex-col sm:flex-row items-center mb-1 gap-3">
          {user.image_url !== null && (
            <img
              className={`w-[80px] h-[80px] rounded-full border-2  border-[#8EFF8B] `}
              src={user.image_url}
              alt="No Imagen"
            />
          )}
          <h1 className="text-2xl text-[#0F0F2D] text-center tracking-widest font-bold py-2">
            {user.first_name} {user.last_name}
          </h1>
        </div>
        <div className="text-white mb-1 flex gap-1 justify-end">
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
      </div>
      <section className=" flex flex-col sm:flex-row p-4 gap-4">
        <div className="">
          <h5 className="text-[#D3D3D3]">Correo</h5>
          <p className="text-[#FFFF]">{user.email}</p>
        </div>
        <div className="">
          <h5 className="text-[#D3D3D3]">Cumpleaños</h5>
          <p className="text-[#FFFF] flex gap-2">
            {" "}
            <IconCake /> {user.birthday}
          </p>
        </div>
      </section>
      <DeleteUser
        setConfirmationAlert={setConfirmationAlert}
        confirmationAlert={confirmationAlert}
        userId={user.id}
        getAllUsers={getAllUsers}
      />
    </section>
  );
}
export default User;
