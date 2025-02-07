'use client'
import { eliminarPlanta } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";


function PlantaEliminar({ planta }) {

    const formId = useId();

    const [state, action, pending] = useActionState(eliminarPlanta, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);


    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>PLANTA: {planta.nombre}</p>
            <p>JEFE DE PLANTA: {planta.jefe_planta}</p>
            <form action={action} id={formId}>
                <input type="hidden" name="id" defaultValue={planta.id} />
                <button
                    disabled={pending}
                    className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                    {pending ? "Eliminando..." : "Eliminar planta"}
                </button>
            </form>
        </>
    );
}

export default PlantaEliminar;