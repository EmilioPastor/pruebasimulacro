import { obtenerPaciente } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Paciente({ id }) {
    const paciente = await obtenerPaciente(id)
    //console.log(paciente);

    if (!paciente) notFound()

    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-green-500">
            <p className="text-lg font-semibold text-gray-800">🆔 Id: {paciente.id}</p>
            <p className="text-xl font-bold text-blue-600">👤 Nombre: {paciente.nombre}</p>
            <p className="text-gray-600">📅 Fecha: {paciente.fecha_nacimiento.toLocaleDateString()}</p>
            <p className="text-gray-700">🏥 Planta: {paciente.planta?.nombre}</p>
        </div>
    );
}
