import './index.scss'

import { Link } from 'react-router-dom'
// o componete é importado
import Cabecalho from '../../components/cabecalho'

export default function Contato() {


    return (
        <div className='pagina-contato pagina'>
            {/* <header className='cabecalho'>
                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1 className='titulo1'>Contato</h1>
            </header> */}
            {/* Passamos o nome do título desta página */}
            <Cabecalho titulo='ReactJS | Contato'/>

            <section className='secao'>
                <h1>Entre em contato!</h1>
                <img className='icone' src="/assets/images/contato.svg" />
            </section>

        </div>
    )
}