"use client"
import React, { FormEvent, useState } from 'react'
import styles from '@/app/styles/page.module.css'
import putColaborador from '@/lib/putColaborador';

export default function NovoColaborador() {

    const[hab,setHab] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setHab(!hab);
        const formData = new FormData(event.currentTarget)
        const response = await putColaborador(formData.get('nome') ,formData.get('cargo'),
        formData.get('admissao'),formData.get('setor'),formData.get('salario'));
        if(response===200  || response===201){
            alert("Colaborador enviado com sucesso!");
        }else{
            alert("Erro ao enviar atividade.");
        }
      }

    const content =(
        <div>
            <button className={styles.buttonForm} onClick={event => setHab(!hab)}>Nova Atividade</button>
            <div className={hab? styles.containerVisivel : styles.containerOculto}>
                <div className={styles.caixaIndividual}>
                    <form className={styles.formColab} onSubmit={onSubmit}>
                    <div className={styles.subdivform}>
                        <label className={styles.labelForm}>Nome</label>
                        <input type="text" name="nome" className={styles.inputForm} required/>
                    </div>
                    <div className={styles.subdivform}>
                        <label className={styles.labelForm}>Cargo</label>
                        <input type="text" name="cargo" className={styles.inputForm} required/>
                    </div>
                    <div className={styles.subdivform}>
                        <label className={styles.labelForm}>Admissão</label>
                        <input type="date" name="admissao" className={styles.inputForm} required/>
                    </div>
                    <div className={styles.subdivform}>
                        <label className={styles.labelForm}>Setor</label>
                        <input type="text" name="setor" className={styles.inputForm} required/>
                    </div>
                    <div className={styles.subdivform}>
                        <label className={styles.labelForm}>Salario</label>
                        <input type="number" name="salario" className={styles.inputForm} required min='0'/>
                    </div>
                    <button type="submit" value="Submit"  className={styles.buttonForm}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
  
    return content;
}