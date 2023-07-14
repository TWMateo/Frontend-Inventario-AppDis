import React, { useState } from 'react'
import imgSrc from './assets/img/imgMenu'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RoutPages from './routes/Routes'

function App() {
  const OptionsNavBar = [
    { title: "Administracion de Productos", src: "Chart_fill", href: "/AdminProduct" },
    { title: "Productos Inactivos", src: "Chat", href: "/ProductosInactivos" },
    { title: "Admnistración Categoria", src: "User", href: "/Categoria" },
    { title: "Categorias Inactivas", src: "Calendar", href: "/CategoriasInactivas" },
    { title: "Kardex", src: "Folder", href: "/KardexProductos" },
    { title: "Search", src: "Search", href: "/" },
    { title: "Analytics", src: "Chart", href: "/" },
  ]
  const [open, setOpen] = useState(true)
  const handleChangeOpen = (event) => {
    setOpen(!open)
  }
  return (
    <Router>
      <div className="flex">
        <div className={`${open ? "w-40 sm:w-80" : "w-9 sm:w-20"} md:h-screen duration-300 pl-2 gap-4 bg-dark-purple
     relative`}>
          <img src={imgSrc['control']} alt=''
            className={`${!open && "rotate-180"} absolute cursor-pointer rounded-full -right-3
       top-12 w-7 border-2 border-dark-purple`}
            onClick={() => setOpen(!open)}
          />
          <div className='flex gap-x-4 mt-4 items-center text-xs md:text-sm'>
            <img src={imgSrc['logo192']} alt='Logo-React'
              className='w-5 sm:w-16 cursor-pointer duration-500'
            />
            <h1 className={`${!open && "hidden"} sm:text-xl text-white p-0 origin-left font-semibold text-x1 duration-200`}>
              Inventario Productos
            </h1>
          </div>
          <ul className={`${open ? "md:p-10 md:pt-5" : "md:p-0 md:pt-5"} duration-300`}>
            {OptionsNavBar.map((menu, index) => (
              <li key={index} className={`${open ? "mt-9 md:mt-1" : "mt-2"} text-gray-300 flex items-center align-middle
        gap-x-4 cursor-pointer p-2 rounded-md hover:bg-blue-500 duration-300`}>
                <Link to={menu.href} className={`origin-left duration-300 flex items-center align-middle gap-x-4`} onClick={handleChangeOpen}>
                  <img className={`${open ? 'w-0':'w-4 mt-10 mb-10 sm:mt-0 sm:mb-0'} p-0 m-0 sm:w-5`} src={imgSrc[menu.src]} alt='' />
                  <h1 className={`${!open && 'hidden'} text-xs md:text-sm`}>{menu.title}</h1>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-x-4 items-center mt-10 md:mt-0 p-3 cursor-pointer rounded-md hover:bg-blue-500 duration-300'>
            <img src={imgSrc['Setting']} className={`w-5 ml-0`} alt='img-setting' />
            <h1 className={`${!open && "scale-0 m-14"} text-xs md:text-sm text-white font-semibold origin-left textx1 duration-300`}>Settings</h1>
          </div>
        </div>
        <div className={`w-full font-semibold text-xs sm:text-sm
        flex justify-center`}>
          <RoutPages />
        </div>
      </div>
    </Router>
  )
}

function renderApp() {
  return (
    <div>
      {App()}
    </div>
  )

}
export default renderApp
