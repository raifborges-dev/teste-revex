"use client"; 
import React, { createRef, FormEvent,  useState } from 'react'
import styles from '@/app/styles/page.module.css'
import putAtividades from '@/lib/putAtividades';

export default function NovaAtividade(props: {param: string}) {
    const ref = createRef<HTMLFormElement>();
    const[hab,setHab] = useState(false);
    const[desc,setDesc] = useState('');
    const[status,setStatus] = useState('Não Iniciado');
    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setHab(!hab);
        const response = await putAtividades(props.param, desc, -1 ,status);
        if(response===200  || response===201){
            alert("Atividade enviada com sucesso!");
        }else{
            alert("Erro ao enviar atividade.");
        }
        ref.current?.reset();
      }

    const content =(
        <div>
            <button className={styles.buttonForm} onClick={event => setHab(!hab)}>Nova Atividade</button>
            <div className={hab? styles.containerVisivel : styles.containerOculto}>
                <div className={styles.caixaIndividual}>
            <form onSubmit={onSubmit} ref={ref}> 
                <h2 className={styles.tituloDesc}>Descrição: </h2>
                <div className={styles.textAreaBox}>
                    <textarea className={styles.caixaDesc}  name= "Descrição" required
                     onChange={event => setDesc(event.target.value)}>
                </textarea>
                </div>    
                    <h2 className={styles.tituloDesc}> Status:</h2>
                    <div className={styles.statusBox}>
                        <select name="atividades" id="atividades" defaultValue={'Não Iniciado'}
                        onChange={event => setStatus(event.target.value)}>
                            <option value={'Não Iniciado'}>Não Iniciado</option>
                            <option value={'Em Progresso'}>Em Progresso</option>
                            <option value={'Finalizado'}>Finalizado</option>
                        </select>
                    </div>
                    <button type="submit" value="Submit"  className={styles.buttonForm}>Enviar</button>
                    </form>
                    </div>
            </div>
        </div>
    );
  
    return content;
}
