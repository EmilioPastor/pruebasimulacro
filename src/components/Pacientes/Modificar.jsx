'use client'
import { modificarPaciente } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PacienteModificar({ paciente, plantas }) {

    const formId = useId();

    const [state, action, pending] = useActionState(modificarPaciente, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input name='fecha_nacimiento' type='date' defaultValue={paciente.fecha_nacimiento.toISOString().split('T')[0]} />

            <select
                key={paciente.plantaId}
                name="plantaId"
                defaultValue={paciente.plantaId}>
                {
                    plantas.map(planta =>
                        <option key={planta.id} value={planta.id}>
                            {planta.nombre}
                        </option>
                    )
                }
            </select>

            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Modificando..." : "Modificar paciente"}
            </button>
        </form>
    );
}

export default PacienteModificar;