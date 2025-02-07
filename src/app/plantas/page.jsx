import Plantas from "@/components/Plantas/Lista";
import { Suspense } from "react";


function PaginaPlantas() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE PLANTAS</h1>

            <Suspense fallback={"Obteniendo planta ..."}>
                <Plantas />
            </Suspense>
        </div>
    )

}

export default PaginaPlantas;

