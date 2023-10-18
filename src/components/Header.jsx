import { IconExposurePlus1 } from "@tabler/icons-react"

function Header({handleOpenModal}) {
  return (
    <header className="grid place-items-center  gap-5 mt-20">
      <h1 className="text-[#8EFF8B] font-bold text-5xl ">Lista de usuarios</h1>
        <button onClick={handleOpenModal} className=" flex gap-2 bg-[#CBFFDA] mb-6  font-light uppercase  p-4 items-center justify-center  rounded-md hover:bg-[#8cca9d] transition-colors" >
            <IconExposurePlus1 size={18} />
            Crear nuevo usuario
        </button>
    </header>
  )
}
export default Header