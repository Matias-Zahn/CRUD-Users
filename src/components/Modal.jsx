import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import { EMAIL, LAST_NAME, NAME, PASSWORD } from "../constants/formValidation";

function Modal({
  showModal,
  handleCloseModal,
  handleSubmit,
  register,
  submit,
  userIdToEdit,
  errors,
}) {
  return (
    <section
      className={`fixed bg-black/30 p-4 top-0 bottom-0 right-0 left-0 grid place-items-center transition-all duration-200 ease-linear ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-[#3C3C3D] border-[#C3C1C1] text-white p-4 px-7 rounded-3xl grid gap-3 w-[min(100%,_400px)] relative"
      >
        <h2 className="text-center">
          {userIdToEdit ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <button onClick={handleCloseModal} type="button">
          <IconSquareRoundedXFilled className="text-red-500 hover:text-red-900 transition-colors absolute top-2 right-2" />
        </button>
        <div className="grid  gap-2">
          <label className="text-[#8EFF8B]" htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit  outline-none rounded-md border px-2 py-1"
            placeholder="Nombre"
            type="text"
            id="first_name"
            {...register("first_name", NAME)}
          />
          {errors.first_name && (
            <span className="text-red-500 text-sm">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-[#8EFF8B]" htmlFor="last_name">
            Apellidos <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Apellidos"
            type="text"
            id="last_name"
            {...register("last_name", LAST_NAME)}
          />
          {errors.last_name && (
            <span className="text-red-500 text-sm">
              {errors.last_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-[#8EFF8B]" htmlFor="email">
            Correo <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Correo"
            type="email"
            id="email"
            {...register("email", EMAIL)}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-[#8EFF8B]" htmlFor="password">
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit   outline-none rounded-md border px-2 py-1"
            placeholder="Contraseña"
            type="text"
            id="password"
            {...register("password", PASSWORD)}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-[#8EFF8B]" htmlFor="birthday">
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
        <div className="grid gap-2">
          <label className="text-[#8EFF8B]" htmlFor="birthday">
            Imagen en URL
          </label>
          <input
            className="bg-inherit  outline-none rounded-md border px-2 py-1"
            placeholder="Imagen"
            type="text"
            id="image_url"
            {...register("image_url")}
          />
        </div>

        <button className="bg-[#CBFFDA] text-black uppercase font-semibold py-2 rounded-md hover:bg-[#5fc97d] transition-colors">
          {userIdToEdit ? "Editar" : "Crear"}
        </button>
        <button
          onClick={handleCloseModal}
          className="hover:underline text-[#CBFFDA]"
          type="button"
        >
          O cancelar
        </button>
      </form>
    </section>
  );
}
export default Modal;
