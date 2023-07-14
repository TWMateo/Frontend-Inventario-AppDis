export const ArrayKardexOrdenado = (productosComprados, productosVendidos, detalles,Orden = 1) => {
    const ArrayKardex = [].concat(productosComprados, productosVendidos, detalles)
    let response
    if (Orden === 0) {
        response = ArrayKardex.sort((a, b) => new Date(a.fecha).getTime() > new Date(b.fecha).getTime())
    } else (
        response = ArrayKardex.sort((a, b) => new Date(a.fecha).getTime() < new Date(b.fecha).getTime())
    )
    return response
}
