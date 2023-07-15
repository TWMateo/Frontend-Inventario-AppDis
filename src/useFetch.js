import Axios from 'axios'

const useAxios = async (url, condiciones = null, tipoPeticion = 'get', parametros = null) => {
    const jwToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hdGVpdG8iLCJpYXQiOjE2ODkzNzUxOTEsImV4cCI6MTY4OTQ2MTU5MX0.3KlByk9HFPunPBeEbUFHku0vzGoh32T_bEMEvS4Xdiw';
    const baseUrl = 'https://inventarioproductos.onrender.com'
    let peticion
    let jsonEnvioParametros = {
        pro_id: "",
        pro_campo: [
        ]
    }
    let jsonCompleto
    if (parametros) {
        const claves = Object.keys(parametros)
        const valores = Object.values(parametros)
        jsonEnvioParametros['pro_id'] = valores[0]
        for (let i = 1; i < claves.length; i++) {
            let campo = {}
            campo['campo'] = claves[i]
            campo['valor'] = valores[i]
            jsonEnvioParametros['pro_campo'].push(campo)
        }
        jsonCompleto = JSON.stringify(jsonEnvioParametros)
    }
    let urlPeticion = baseUrl + url

    Axios.defaults.headers.common["Authorization"] = `${jwToken}`;
    Axios.defaults.headers.common["Content-Type"] = "application/json"
    try {
        urlPeticion = `${condiciones ? `${urlPeticion}/${condiciones}` : `${urlPeticion}`}`
        if (!parametros) {
            peticion = await Axios({ method: `${tipoPeticion}`, url: `${urlPeticion}`, jsonCompleto })
                .catch(function (error) { console.log(error) })
                
        }else{
            console.log('tipo de peticion: '+tipoPeticion)
            peticion = await Axios.put(urlPeticion,jsonEnvioParametros).catch(function (error) {console.log(error)})
        }
    } catch (error) {
        peticion = error.Message
    }
    return peticion.data;
}

export default useAxios