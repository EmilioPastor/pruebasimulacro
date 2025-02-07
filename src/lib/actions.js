'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'



//  ------------------------ PLANTAS ------------------------


export async function insertarPlanta(prevState,formData) {
    const nombre = formData.get('nombre')
    const jefe_planta = formData.get('jefe_planta')

    await prisma.planta.create({
        data: {
            nombre: nombre,
            jefe_planta: jefe_planta
        }
    })

    revalidatePath('/plantas')
    return {success: 'Exito al registrar la planta'}

}



export async function modificarPlanta(prevState,formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const jefe_planta = formData.get('jefe_planta')


    await prisma.planta.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            jefe_planta: jefe_planta
        }
    })

    revalidatePath('/plantas')
    return {success: 'Exito al modificar la planta'}

}



export async function eliminarPlanta(prevState,formData) {
    const id = Number(formData.get('id'))

    await prisma.planta.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/plantas')
    return {success: 'Exito al eliminar la planta'}

}


//  ------------------------ PACIENTES ------------------------


export async function insertarPaciente(prevState,formData) {
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))

    const plantaId = Number(formData.get('plantaId'))

    await prisma.paciente.create({
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            plantaId: plantaId,
        }
    })

    revalidatePath('/pacientes')
    return {success: 'Exito al registrar el paciente'}


}



export async function modificarPaciente(prevState,formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))

    const plantaId = Number(formData.get('plantaId'))

    await prisma.paciente.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            plantaId: plantaId,
        }
    })

    revalidatePath('/pacientes')
    return {success: 'Exito al modificar el paciente'}

}



export async function eliminarPaciente(prevState,formData) {
    const id = Number(formData.get('id'))

    await prisma.paciente.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pacientes')
    return {success: 'Exito al eliminar el paciente'}


}

// ------------------------------- MEDICINAS -----------------------


export async function insertarMedicina(prevState,formData) {
    const nombre = formData.get('nombre')
    const via = formData.get('via')

    const pacientesIDs = await prisma.paciente.findMany({
        select: { id: true }
    });
    // console.log(pacientesIDs);

    const connect = pacientesIDs.filter(paciente => formData.get(`paciente${paciente.id}`) !== null);

    // console.log(connect);
    await prisma.medicina.create({
        data: {
            nombre: nombre,
            via: via,
            pacientes: {
                connect: connect
            }   
        }
    })

    revalidatePath('/medicinas')
    return {success: 'Exito al registrar la medicina'}

}



export async function modificarMedicina(prevState,formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const via = formData.get('via')

    const pacientesIDs = await prisma.paciente.findMany({
        select: { id: true }
    });
    // console.log(pacientesIDs);

    const connect = pacientesIDs.filter(paciente => formData.get(`paciente${paciente.id}`) !== null);
    const disconnect = pacientesIDs.filter(paciente => formData.get(`paciente${paciente.id}`) === null);

    // console.log(connect);


    await prisma.medicina.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            via: via,
            pacientes: {
                connect: connect,
                disconnect: disconnect
            }   
        }
    })

    revalidatePath('/medicinas')
    return {success: 'Exito al modificar la medicina'}

}



export async function eliminarMedicina(prevState,formData) {
    const id = Number(formData.get('id'))

    await prisma.medicina.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/medicinas')
    return {success: 'Exito al eliminar la medicina'}


}

