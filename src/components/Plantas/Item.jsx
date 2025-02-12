import { obtenerPlanta } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Planta({ id }) {
    const planta = await obtenerPlanta(id)
    //console.log(planta);

    if (!planta) notFound()

    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-green-500">
            <p className="text-2xl font-semibold text-gray-800">🌿 Nombre: {planta.nombre} </p>
            <p className="text-gray-600 mt-1">🆔 Id: {planta.id} </p>
            <p className="text-gray-600 mt-1">👨‍💼 Jefe de planta: {planta.jefe_planta} </p>
        </div>
    );
}
