import Paciente from "@/components/Pacientes/Item";
import { Suspense } from "react";


async function PaginaPaciente({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE PACIENTE</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Paciente id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaPaciente;
