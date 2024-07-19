"use client"; 
import putAtividades from '@/lib/putAtividades';
import React, { FormEvent, useState } from 'react'
import styles from '@/app/styles/page.module.css'


export default function FormAtividades(props: {param: Atividades}) {

    const atividades = props.param;
    const[desc, setDesc] = useState(atividades.descricao);
    const[status, setStatus] = useState(atividades.status);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const response = await putAtividades(atividades.dono, desc,atividades.id,status);
        if(response===200  || response===201){
            alert("Atividade atualizada com sucesso!");
        }else{
            alert("Erro ao atualizar atividade.");
        }
      }

    const content = (
        <article key={atividades.id}>
                <div className={styles.boxTitulo}>
                    <h2 className = {styles.nomeTitulo}>Descrição :</h2>
                </div>
                <div >
                <form onSubmit={onSubmit}>
                <div className={styles.textAreaBox}>
                    <textarea className={styles.caixaDesc}  name= "Descrição" 
                    defaultValue={atividades.descricao} onChange={event => setDesc(event.target.value)}>
                </textarea>
                </div>    
                    <h2 className={styles.tituloDesc}> Status:</h2>
                    <div className={styles.statusBox}>
                        <select name="atividades" id="atividades" defaultValue={atividades.status}
                        onChange={event => setStatus(event.target.value)}>
                            <option defaultValue={'Não Iniciado'}>Não Iniciado</option>
                            <option defaultValue={'Em Progresso'}>Em Progresso</option>
                            <option defaultValue={'Finalizado'}>Finalizado</option>
                        </select>
                    </div>
                    <button type="submit" value="Submit" className={styles.buttonForm}>Editar</button>
                    </form>
                </div>
            </article>
    )
    
    return content;
}
