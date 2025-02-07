'use client'
import { eliminarPaciente } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PacienteEliminar({ paciente }) {

    const formId = useId();

    const [state, action, pending] = useActionState(eliminarPaciente, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);


    return (
        <>
            <h1 className="text-2xl text-red-600">¿Está seguro que desea eliminar los siguentes datos?</h1>
            <p>PACIENTE: {paciente.nombre}</p>
            <p>FECHA NACIMIENTO: {paciente.fecha_nacimiento.toLocaleDateString()}</p>
            <form action={action} id={formId}>
                <input type="hidden" name="id" defaultValue={paciente.id} />
                <button
                    disabled={pending}
                    className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                    {pending ? "Eliminando..." : "Eliminar paciente"}
                </button>
            </form>
        </>
    );
}

export default PacienteEliminar;