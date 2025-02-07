'use client'
import { insertarMedicina } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function MedicinaInsertar({ pacientes }) {

    const formId = useId();

    const [state, action, pending] = useActionState(insertarMedicina, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);


    return (
        <form action={action} id={formId}>
            <input name="nombre" placeholder="Nombre" />
            <input name="via" placeholder="Via" />

            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre} />

                        {paciente.nombre}

                    </label>
                )
            }
            <button
                disabled={pending}
                className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
                {pending ? "Insertando..." : "Insertar medicina"}
            </button>
        </form>

    );
}

export default MedicinaInsertar;