import React from 'react'

export default async function getColaboradorNome(nome: string) {
    const res = await fetch(`http://localhost:8080/colaboradores/nome/${nome}`);
    
    if(!res.ok){
        throw new Error('Falha ao buscar colaborador')
    }    
    return res.json();
}
