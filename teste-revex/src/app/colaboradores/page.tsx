import React from 'react'
import getColaboradores from '@/lib/getColaboradores'
import Link from 'next/link';
import styles from '@/app/styles/page.module.css'
import NovoColaborador from './novoColaborador/NovoColaborador';

export default async function Colaboradores() {
  const colaboradoresData: Promise<Colaboradores[]> = getColaboradores();
  const colaboradores = await colaboradoresData;

  const content = (
    <section>
      <h2>
        <Link href={"/"}>
          Voltar para a Home
        </Link>
      </h2>
      <br />
      <h2>Colaboradores: </h2>
      {
        colaboradores.map( colaborador => {
          return(
            <>
            <br />
            <div key={colaborador.id}>
              <div className={styles.caixaIndividual}>
              <div className={styles.descIndividual}>
              <h2>{colaborador.nome}</h2>
              <h1>{`Data de admissão: ${colaborador.admissao}`}</h1>
              <h1>{`Cargo: ${colaborador.cargo}`}</h1>
              <h1>{`Setor: ${colaborador.setor}`}</h1>
              <h1>{`Salário: ${colaborador.salario}`}</h1>
              <Link className={styles.verAtiv} href={`/colaboradores/${colaborador.nome}`}>Ver Atividades</Link>
              </div>
              </div>
            </div>
            </>
          )
        })
      }
      <NovoColaborador>
      </NovoColaborador>
    </section>
  )

  return content;
}
