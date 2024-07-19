import getAtividades from '@/lib/getAtividades'
import getColaboradorNome from '@/lib/getColaboradorNome'
import Atividades from './components/Atividades'
import { Suspense } from 'react'
import NovaAtividade from './components/NovaAtividade'
import Link from 'next/link'

type Params = {
        params: {
            nomeColaborador: string,
        }
}


export default async function ColaboradorPage({params}:Params) {
    const colaboradorData: Promise<Colaboradores> = getColaboradorNome(params.nomeColaborador);
    const atividadesData: Promise<Atividades[]> = getAtividades(params.nomeColaborador);

    let [colaborador, atividades] = await Promise.all([colaboradorData,atividadesData]);
    return (
     <>
        <h2>
        <Link href={"/"}>
          Voltar para a Home
        </Link>
        </h2>
        <br />
        <h2>{colaborador.nome}</h2>
        <h1>{`Data de admissão: ${colaborador.admissao}`}</h1>
        <h1>{`Cargo: ${colaborador.cargo}`}</h1>
        <h1>{`Setor: ${colaborador.setor}`}</h1>
        <h1>{`Salário: ${colaborador.salario}`}</h1>
        <br />
        <div>
        <h2> Atividades do funcionario: </h2>
        <br />
        <div>
        <Suspense fallback = {<h2> Carregando ...</h2>}>
            <Atividades atividades={atividades}></Atividades>
        </Suspense>
        </div>
        <div>
            <NovaAtividade param={colaborador.nome}></NovaAtividade>
        </div>
        </div>
     </>
  )
}
