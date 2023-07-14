
import moment from 'moment'

export const FormateadorFecha = (fechaIngreso) => {
    const fecha = moment(fechaIngreso).format('YYYY-MM-DD');
    return fecha;
}

