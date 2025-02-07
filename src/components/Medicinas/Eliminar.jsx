'use client'
import { eliminarMedicina } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function MedicinaEliminar({ medicina }) {

    const formId = useId();

    const [state, action, pending] = useActionState(eliminarMedicina, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>MEDICINA: {medicina.nombre}</p>
            <p>VIA: {medicina.via}</p>
            <form action={action}>
                <input type="hidden" name="id" defaultValue={medicina.id} />
                <button
                    disabled={pending}
                    className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                    {pending ? "Eliminando..." : "Eliminar medicina"}
                </button>
            </form>
        </>
    );
}

export default MedicinaEliminar;