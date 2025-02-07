import Planta from "@/components/Plantas/Item";
import { Suspense } from "react";


async function PaginaPlanta({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE PLANTA</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Planta id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaPlanta;
