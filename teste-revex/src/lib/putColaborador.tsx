'use server'
import { revalidatePath } from 'next/cache';
import React from 'react'

export default async function putColaborador(nome?: string, cargo?: string, admissao?: Date,
     setor?: string, salario?: number) {

        const response = await fetch('http://localhost:8080/colaboradores/novo', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
          },
          body: JSON.stringify({
            nome: nome,
            cargo: cargo,
            admissao : admissao,
            setor: setor,
            salario: salario
          }),
        });
        revalidatePath(`/colaboradores`);
        return response.status;
    
}