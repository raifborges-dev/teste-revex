import React from 'react'

export default async function getColaboradores() {
    const res = await fetch('http://localhost:8080/colaboradores/todos');
    
    if(!res.ok){
        throw new Error('Falha ao buscar colaboradores')
    }    
    return res.json();
}
