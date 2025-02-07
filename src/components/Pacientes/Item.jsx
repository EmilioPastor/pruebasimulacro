import { obtenerPaciente } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Paciente({ id }) {
    const paciente = await obtenerPaciente(id)
    //console.log(paciente);

    if (!paciente) notFound()

    return (
        <div>
            <p>Id:  {paciente.id} </p>
            <p>Nombre: {paciente.nombre} </p>
            <p>Fecha: {paciente.fecha_nacimiento.toLocaleDateString()} </p>
            <p>Planta: {paciente.planta?.nombre} </p>
        </div>
    );
}
