import Modal from "@/components/Modal";
import { obtenerPacientes, obtenerPlantas } from "@/lib/data";
import PacienteInsertar from "./Insertar";
import PacienteEliminar from "./Eliminar";
import PacienteModificar from "./Modificar";
import Link from "next/link";

export default async function Pacientes() {
  const pacientes = await obtenerPacientes();
  const plantas = await obtenerPlantas();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Botón para insertar paciente */}
      <Modal
        openElement={
          <button className="mb-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-green-600 hover:scale-105">
            ➕ Insertar paciente
          </button>
        }
      >
        <PacienteInsertar plantas={plantas} />
      </Modal>

      {/* Lista de pacientes */}
      <div className="w-full max-w-3xl space-y-6">
        {pacientes.map((paciente) => (
          <div
            key={paciente.id}
            className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-blue-500"
          >
            {/* Nombre del paciente */}
            <Link
              href={`/pacientes/${paciente.id}`}
              className="text-2xl font-semibold text-gray-800 hover:underline"
            >
              {paciente.nombre}
            </Link>
            
            <p className="text-gray-600 mt-1">📅 Fecha de nacimiento: {paciente.fecha_nacimiento.toLocaleDateString()}</p>

            {/* Botones de acción */}
            <div className="mt-4 flex space-x-4">
              <Modal
                openElement={
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:scale-105">
                    ✏️ Modificar
                  </button>
                }
              >
                <PacienteModificar paciente={paciente} plantas={plantas} />
              </Modal>

              <Modal
                openElement={
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md transition-all hover:bg-red-600 hover:scale-105">
                    ❌ Eliminar
                  </button>
                }
              >
                <PacienteEliminar paciente={paciente} />
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
