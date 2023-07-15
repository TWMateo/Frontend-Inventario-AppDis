import React, { useState } from 'react';
import UseFetch from '../useFetch'

const AdminProducts = () => {
    const [idProducto, setIdProducto] = useState()
    const [prodConsultado, setProdConsultado] = useState()
    const actualizacionProd = {
        id_prod: "",
        pro_stock: "",
        pro_valor_iva: ""
    }

    const handlerCambiarIdProducto = (event) => {
        setIdProducto(event.target.value)
    }

    const handlerNuevosCamposProd = (event) => {
        const { name, value } = event.target
        actualizacionProd['id_prod'] = idProducto
        switch (name) {
            case 'pro_stock':
                actualizacionProd['pro_stock'] = value;
                //LINEAS QUE EVITAN LA ACTUALIZACION
                //setStockProd(value);
                break;
            case 'pro_valor_iva':
                actualizacionProd['pro_valor_iva'] = value
                //setIvaProd(value);
                break
            default:
                console.log('Opcion invalida')
                break;
        }
        console.log(actualizacionProd)
    }

    const buscarProductoById = async () => {
        const producto = await UseFetch('/productos/id', `${idProducto}`)
        setProdConsultado(Object.values(producto))
        //setStockProd(Object.values(producto)[7])
        console.log(prodConsultado)
    }

    const actualizarProductosById = async () => {
        const response = await UseFetch('/updateProducto', null, 'put', actualizacionProd)
        alert('Producto con id ' + idProducto + ' a sido actualizado.')
        //buscarProductoById()
    }
    return (
        <div className='h-screen border-dark-purple relative flex flex-col md:mt-1 gap-3 rounded-md ml-0'>
            <div className='w-full mt-10 bg-dark-purple grid grid-cols-1 gap-4 rounded-lg border-2 md:p-4'>
                <div className='col-span-2'>
                    <h1 className='text-white text-lg'> Datos Ajuste: </h1>
                </div>
                <div className='w-full col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className=''>
                        <input type='text' name='pro_id' className='w-full cursor-pointer rounded-md border-2 hover:border-black duration-200' placeholder=' Ingrese el codigo' value={idProducto} onChange={handlerCambiarIdProducto} />
                    </div>
                    <div className=''>
                        <input className='w-full cursor-pointer rounded-md border-2 hover:border-black duration-200' placeholder='Fecha de ajuste'></input>
                    </div>
                    <div className=''>
                        <input className='w-full cursor-pointer rounded-md border-2 hover:border-black duration-200' placeholder='Fecha de ajuste 3'></input>
                    </div>
                    <div className=''>
                        <input className=' w-full cursor-pointer rounded-md border-2 hover:border-black duration-200' placeholder='Fecha de ajuste 4'></input>
                    </div>
                </div>
                <div className='rounded-md grid grid-cols-2 m-2 w-full gap-4'>
                    <div className='bg-white border border-black rounded-md'>
                        <div className='m-2'>
                            <h1 >Nombre producto: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[1]}` : 'Nombre'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Descripción producto: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[2]}` : 'Descripción'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Valor iva: </h1>
                            <input type='text' name='pro_valor_iva' className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[3]}` : 'IVA'}`} onChange={handlerNuevosCamposProd} />
                        </div>
                        <div className='m-2'>
                            <h1 >Precio: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[4]}` : 'Precio compra'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Precio venta: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[5]}` : 'Precio venta'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Stock: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' type='text' name='pro_stock' placeholder={`${prodConsultado ? `${prodConsultado[7]}` : 'Cantidad'}`} onChange={handlerNuevosCamposProd}></input>
                        </div>
                        <div className='m-2'>
                            <div className='bg-blue-300 rounded-md p-1 border-2 flex justify-center hover:border-black duration-200' onClick={actualizarProductosById}>Actualizar</div>
                        </div>
                    </div>
                    <div className='bg-white border border-black rounded-md'>
                        <div className='m-2'>
                            <h1 >Nombre producto: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[1]}` : 'Nombre'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Descripción producto: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[2]}` : 'Descripción'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Valor iva: </h1>
                            <input type='text' name='pro_valor_iva' className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[3]}` : 'IVA'}`} onChange={handlerNuevosCamposProd} />
                        </div>
                        <div className='m-2'>
                            <h1 >Precio: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[4]}` : 'Precio compra'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Precio venta: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' placeholder={`${prodConsultado ? `${prodConsultado[5]}` : 'Precio venta'}`}></input>
                        </div>
                        <div className='m-2'>
                            <h1 >Stock: </h1>
                            <input className='w-full rounded-md border-2 hover:border-black duration-200' type='text' name='pro_stock' placeholder={`${prodConsultado ? `${prodConsultado[7]}` : 'Cantidad'}`} onChange={handlerNuevosCamposProd}></input>
                        </div>
                        <div className='m-2'>
                            <div className='bg-blue-300 rounded-md p-1 border-2 flex justify-center hover:border-black duration-200' onClick={actualizarProductosById}>Actualizar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AdminProducts;