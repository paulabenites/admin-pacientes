import React, {Fragment, useState} from 'react';

const Formulario = () => {
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })

    // Funcion que se ejecuta cuando usuario escibe en el form

    const actualizarState = e => {
        // console.log(e.target.name); Aqui muestra en que campo se esta escribiendo
        // console.log(e.target.value); Aqui muestra el valor del target

        // Recuerda que no se debe cambiar el valor del state directamente!! Debe ser con la funcion

        actualizarCita({
            // Al actualizar el state se debe de mandar una copia del state anterior!! De lo contrario, lo reescribirá

            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const{mascota, propietario,fecha,hora,sintomas} = cita;
 
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Propietario de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;