import Medicinas from "@/components/Medicinas/Lista";
import { Suspense } from "react";


function PaginaMedicinas() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE MEDICINAS</h1>

            <Suspense fallback={"Obteniendo medicina ..."}>
                <Medicinas />
            </Suspense>
        </div>
    )

}

export default PaginaMedicinas;

