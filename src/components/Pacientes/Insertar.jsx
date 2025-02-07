'use client'
import { insertarPaciente } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function PacienteInsertar({ plantas }) {

    const formId = useId();

    const [state, action, pending] = useActionState(insertarPaciente, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" type='date' />

            <select name="plantaId">
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
                {pending ? "Insertando..." : "Insertar paciente"}
            </button>

        </form>
    );
}

export default PacienteInsertar;