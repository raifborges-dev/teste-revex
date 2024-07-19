"use client"; 
import styles from '@/app/styles/page.module.css'
import FormAtividades from './FormAtividades';

type Props = {
    atividades: Atividades[]
}

export default async function AtividadesColaborador({atividades } : Props) {

    const content = atividades.map(atividade =>{
        return (
            <div className={styles.caixaIndividual}>
                <FormAtividades param={atividade}></FormAtividades>
            </div>
        )
    })

    return content;
}