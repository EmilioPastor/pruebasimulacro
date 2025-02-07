import Modal from "@/components/Modal";
import { obtenerMedicinas, obtenerPacientes } from "@/lib/data";
import MedicinaEliminar from "./Eliminar";
import MedicinaModificar from "./Modificar";
import MedicinaInsertar from "./Insertar";
import Link from "next/link";

export default async function Medicinas() {
  const medicinas = await obtenerMedicinas();
  const pacientes = await obtenerPacientes();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Botón para insertar medicina */}
      <Modal
        openElement={
          <button className="mb-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-green-600 hover:scale-105">
            ➕ Insertar medicina
          </button>
        }
      >
        <MedicinaInsertar pacientes={pacientes} />
      </Modal>

      {/* Lista de medicinas */}
      <div className="w-full max-w-3xl space-y-6">
        {medicinas.map((medicina) => (
          <div
            key={medicina.id}
            className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-blue-500"
          >
            {/* Nombre de la medicina */}
            <Link
              href={`/medicinas/${medicina.id}`}
              className="text-2xl font-semibold text-gray-800 hover:underline"
            >
              {medicina.nombre}
            </Link>
            
            <p className="text-gray-600 mt-1">👨‍🏫 Via: {medicina.via}</p>

            {/* Botones de acción */}
            <div className="mt-4 flex space-x-4">
              <Modal
                openElement={
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:scale-105">
                    ✏️ Modificar
                  </button>
                }
              >
                <MedicinaModificar medicina={medicina} pacientes={pacientes} />
              </Modal>

              <Modal
                openElement={
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md transition-all hover:bg-red-600 hover:scale-105">
                    ❌ Eliminar
                  </button>
                }
              >
                <MedicinaEliminar medicina={medicina} />
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
