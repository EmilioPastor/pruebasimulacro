import Modal from "@/components/Modal";
import { obtenerPacientes, obtenerPlantas } from "@/lib/data";
import PacienteInsertar from "./Insertar";
import PacienteEliminar from "./Eliminar";
import PacienteModificar from "./Modificar";
import Link from "next/link";

export default async function Pacientes() {
    const pacientes = await obtenerPacientes()
    const plantas = await obtenerPlantas()

    // console.log(pacientes);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar paciente</p>}>
                <PacienteInsertar plantas={plantas} />
            </Modal>
            {
                pacientes.map(paciente =>
                    <div key={paciente.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pacientes/${paciente.id}`} className="text-2xl block">
                                {paciente.nombre}
                            </Link>
                            <p>{paciente.fecha_nacimiento.toLocaleDateString()}</p>
                        </div>
                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PacienteModificar paciente={paciente} plantas={plantas} />
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PacienteEliminar paciente={paciente} />
                        </Modal>


                        <hr />
                    </div>
                )
            }
        </div>
    );
}