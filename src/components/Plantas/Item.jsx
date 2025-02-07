import { obtenerPlanta } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Planta({ id }) {
    const planta = await obtenerPlanta(id)
    //console.log(planta);

    if (!planta) notFound()

    return (
        <div>
            <p>Nombre: {planta.nombre} </p>
            <p>Id:  {planta.id} </p>
            <p>Jefe de planta: {planta.jefe_planta} </p>
        </div>
    );
}


