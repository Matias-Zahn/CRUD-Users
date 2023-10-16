import axios from "axios";
import { BASE_URL } from "../constants/constants";

function DeleteUser({
  setConfirmationAlert,
  confirmationAlert,
  userId,
  getAllUsers,
}) {
  const handleDelete = () => {
    axios
      .delete(BASE_URL + `/users/${userId}/`)
      .then(() => {
        getAllUsers();
      })
      .catch((err) => console.log(err));

    setConfirmationAlert(false);
  };

  const handleCancel = () => {
    setConfirmationAlert(false);
  };

  return (
    <section
      className={`fixed top-0 right-0 left-0  bottom-0 h-screen bg-slate-100/40 grid place-items-center transition-all duration-200transition-all duration-200 ease-linear ${
        confirmationAlert ? "visible opacity-100" : "invisible opacity-0"
      } `}
    >
      <div className="bg-[#3C3C3D] text-white w-[min(500px,_100%)] grid place-items-center p-4 rounded-2xl gap-4">
        <h3 className="text-2xl text-center p-4">
          ¿Estas seguro que deseas eliminar este usuario?
        </h3>
        <button
          onClick={handleDelete}
          className=" py-2 bg-red-500 hover:bg-red-900 w-[120px] rounded-xl transition-colors"
        >
          Si, eliminar
        </button>
        <button
          onClick={handleCancel}
          className="text-[#CBFFD9] hover:underline"
        >
          o, cancelar
        </button>
      </div>
    </section>
  );
}
export default DeleteUser;
