import { obtenerPlantas } from "@/lib/data";
import PlantaInsertar from "./Insertar";
import PlantaModificar from "./Modificar";
import PlantaEliminar from "./Eliminar";
import Link from "next/link";
import Modal from "../Modal";

export default async function Plantas() {
    const plantas = await obtenerPlantas()
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <Modal openElement={<button className="mb-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-green-600 hover:scale-105">➕ Insertar planta</button>}>
                <PlantaInsertar />
            </Modal>

            <div className="w-full max-w-3xl space-y-6">
                {plantas.map(planta => (
                    <div key={planta.id} className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-blue-500">
                        <Link href={`/plantas/${planta.id}`} className="text-2xl font-semibold text-gray-800 hover:underline">
                            {planta.nombre}
                        </Link>
                        <p className="text-gray-600 mt-1">👨‍🏫 Jefe: {planta.jefe_planta}</p>

                        <div className="mt-4 flex space-x-4">
                            <Modal openElement={<button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:scale-105">✏️ Modificar</button>}>
                                <PlantaModificar planta={planta} />
                            </Modal>

                            <Modal openElement={<button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md transition-all hover:bg-red-600 hover:scale-105">❌ Eliminar</button>}>
                                <PlantaEliminar planta={planta} />
                            </Modal>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
