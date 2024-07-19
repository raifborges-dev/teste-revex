'use server'
import { revalidatePath } from 'next/cache';
import React from 'react'

export default async function putAtividades(nomeColaborador: string, desc: string, id: number, status: string) {

        const response = await fetch('http://localhost:8080/atividades/novo', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
          },
          body: JSON.stringify({
            id: id,
            status: status,
            descricao : desc,
            dono: nomeColaborador
          }),
        });
        revalidatePath(`/colaboradores/${nomeColaborador}`);
        return response.status;
    
}




  