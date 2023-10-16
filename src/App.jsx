import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./components/Modal";
import UserList from "./components/UserList";
import Header from "./constants/Header";
import { BASE_URL, EMPTY_FORM_VALUE } from "./constants/constants";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [userIdToEdit, setUserIdToEdit] = useState(null);

  console.log(users);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserIdToEdit(null);
    reset(EMPTY_FORM_VALUE);
  };

  const submit = (data) => {
    userIdToEdit ? UpdateUser(data) : createUser(data);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleCloseModal();
        reset(EMPTY_FORM_VALUE);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const UpdateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${userIdToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleEditUser = (user) => {
    handleOpenModal();
    reset({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
    });
    setUserIdToEdit(user.id);
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="p-4 bg-white h-screen overflow-y-scroll font-['Lato'] ">
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        register={register}
        submit={submit}
        userIdToEdit={userIdToEdit}
      />
      {users.length === 0 ? (
        <h3 className="text-white text-center text-2xl mt-20">Por el momento no has creado ningún usuario</h3>
      ) : (
        <UserList
          users={users}
          handleEditUser={handleEditUser}
          getAllUsers={getAllUsers}
        />
      )}
    </main>
  );
}

export default App;
