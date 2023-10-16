import { IconSquareRoundedXFilled } from "@tabler/icons-react";

function Modal({
  showModal,
  handleCloseModal,
  handleSubmit,
  register,
  submit,
  userIdToEdit,
}) {
  return (
    <section
      className={`fixed bg-black/30 p-4 top-0 bottom-0 right-0 left-0 grid place-items-center transition-all duration-200 ease-linear ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white border-[#C3C1C1] text-black p-4 px-7 rounded-md grid gap-3 w-[min(100%,_400px)] relative"
      >
        <h2 className="text-center">
          {userIdToEdit ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <button onClick={handleCloseModal} type="button">
          <IconSquareRoundedXFilled className="text-red-500 hover:text-red-900 transition-colors absolute top-2 right-2" />
        </button>
        <div className="grid  gap-2">
          <label className="" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="bg-inherit  outline-none rounded-md border px-2 py-1"
            placeholder="Nombre"
            type="text"
            id="first_name"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-2">
          <label className="" htmlFor="last_name">
            Apellidos
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Apellidos"
            type="text"
            id="last_name"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-2">
          <label className="" htmlFor="email">
            Correo
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Correo"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="grid gap-2">
          <label className="" htmlFor="password">
            Contraseña
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Contraseña"
            type="text"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="grid gap-2">
          <label className="" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="bg-inherit  outline-none rounded-md border px-2 py-1"
            placeholder="Cumpleaños"
            type="date"
            id="birthday"
            {...register("birthday")}
          />
        </div>

        <button className="bg-[#555A88] text-white uppercase font-semibold py-2 rounded-md hover:bg-[#4a59e2] transition-colors">
          {userIdToEdit ? "Editar" : "Crear"}
        </button>
        <button
          onClick={handleCloseModal}
          className="hover:underline"
          type="button"
        >
          O cancelar
        </button>
      </form>
    </section>
  );
}
export default Modal;
