'use client'
import { modificarPlanta } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PlantaModificar({ planta }) {

    const formId = useId();

    const [state, action, pending] = useActionState(modificarPlanta, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input type="hidden" name="id" defaultValue={planta.id} />
            <input name='nombre' defaultValue={planta.nombre} />
            <input name='jefe_planta' defaultValue={planta.jefe_planta} />
            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Modificando..." : "Modificar paciente"}
            </button>
        </form>
    );
}

export default PlantaModificar;