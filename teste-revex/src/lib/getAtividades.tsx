
import React from 'react'

export default async function getAtividades(nomeColaborador: string) 
{
    nomeColaborador = nomeColaborador.replace('+','%20');
    
    const res = await fetch(`http://localhost:8080/atividades/${nomeColaborador}`);
    
    if(!res.ok){
        throw new Error('Falha ao buscar atividades')
    }    

    return res.json();
}
