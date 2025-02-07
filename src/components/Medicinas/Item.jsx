import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Medicina({ id }) {
    const medicina = await obtenerMedicina(id)
    // console.log(medicina);

    if (!medicina) notFound()

    return (
        <div>
            <p> Id:  {medicina.id} </p>
            <p> Nombre de medicina:  {medicina.nombre} </p>
            <p> Via: {medicina.via} </p>
            <p>
                Pacientes:  {
                    medicina.pacientes.map(paciente =>
                        <div key={paciente.id}>
                            <p>{paciente.nombre}</p>
                        </div>)
                }
            </p>
             

        </div>
    );
}

