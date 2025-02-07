'use client'
import { modificarMedicina } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";
function MedicinaModificar({ medicina, pacientes }) {
    
    const IDs = medicina.pacientes.map(paciente => paciente.id);
    // console.log(IDs);
    const formId = useId();

    const [state, action, pending] = useActionState(modificarMedicina, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);


    return (
        <form action={action} id={formId}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />

            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre}
                            defaultChecked={IDs.includes(paciente.id)} />

                        {paciente.nombre}

                    </label>
                )
            }
            <button
             disabled={pending}
             className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
             {pending ? "Modificando..." : "Modificar Medicina"}  
            </button>
        </form>
    );
}

export default MedicinaModificar;