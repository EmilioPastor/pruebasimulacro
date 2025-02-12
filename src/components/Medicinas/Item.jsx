import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Medicina({ id }) {
    const medicina = await obtenerMedicina(id);
    
    if (!medicina) notFound();

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl border-l-4 border-green-500">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{medicina.nombre}</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>ID:</strong> {medicina.id}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Vía:</strong> {medicina.via}</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Pacientes:</h3>
                <ul className="mt-2 space-y-2">
                    {medicina.pacientes.map(paciente => (
                        <li key={paciente.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
                            {paciente.nombre}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
