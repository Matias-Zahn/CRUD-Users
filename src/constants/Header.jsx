import { IconExposurePlus1 } from "@tabler/icons-react"

function Header({handleOpenModal}) {
  return (
    <header className="text-center flex flex-col  gap-4 md:justify-between md:flex-row md:mb-20">
      <h1 className="text-[#0F0F2D] font-bold text-5xl"> Usuarios</h1>
        <button onClick={handleOpenModal} className=" flex gap-2 bg-[#555A88] text-white font-light uppercase  p-4 items-center justify-center  rounded-md hover:bg-[#8cca9d] transition-colors" >
            <IconExposurePlus1 size={18} />
            Crear nuevo usuario
        </button>
    </header>
  )
}
export default Header