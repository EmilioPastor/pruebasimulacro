'use client'
import { insertarPlanta } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PlantaInsertar() {

    const formId = useId();

    const [state, action, pending] = useActionState(insertarPlanta, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input name="nombre" placeholder="Nombre" />
            <input name="jefe_planta" placeholder="Jefe de Sala" />
            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Insertando..." : "Insertar planta"}
            </button>
        </form>

    );
}

export default PlantaInsertar;