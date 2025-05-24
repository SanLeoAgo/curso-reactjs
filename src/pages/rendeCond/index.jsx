import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Cartaofilme from '../../components/cartaofilme';
import { useState } from 'react'

export default function RenderizacaoCondicional() {
    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false);

    const [nomeFilme,setNomeFilme]=useState('');
    const [classificacaoFilme,setClassificacaoFilme]=useState('');
    const [urlFilme,setUrlFilme]=useState('');
    const [estreiaFilme,setEstreiaFilme]=useState('');
    const [destaqueFilme,setDestaqueFilme]=useState(false);
    const [listaFilmes,setListaFilmes]=useState([]);

    function abriFecharBiscoitoSorte() {

        setExibirBiscoitoSorte(!exibirBiscoitoSorte);
    }

    function adicionarfilme(){

        if(nomeFilme ===''|| classificacaoFilme ===''|| urlFilme ===''){
             alert('Preencha todos os campos');
             return;
        }
        let novoFilme={
            nome:nomeFilme,
            classificacao:classificacaoFilme,
            url:urlFilme,
            estreia:estreiaFilme,
            destaque:destaqueFilme
        }
        
        setListaFilmes([...listaFilmes,novoFilme]);
        setNomeFilme('');
        setClassificacaoFilme('');
        setUrlFilme('');
    }

    return (
        
        

        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo=" ReactJS | Renderização Condicional" />

             <div className='secao filmes'>
                            <h1>Catálogo de filmes</h1>
            
                            <div className='entradas'>
                                <input type="text" placeholder='Nome do filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                                <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                                <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)} />
                                <input type="text"  placeholder='Estreia do Filme' value={estreiaFilme} onChange={e=>setEstreiaFilme(e.target.value)}/>
                                <label > Destaque <input type="checkbox" value={destaqueFilme} onChange={e=>setDestaqueFilme(e.target.checked)}/></label>

                                <button onClick={adicionarfilme} >Adicionar</button>
                            </div>
            
                            <div className='lista'>
                                {listaFilmes.map(item =>
                                    <Cartaofilme item={item} />
                                )}
                            </div>
            
                        </div>

            <div className='secao'>
                <h1>Biscoito da Sorte</h1>
                <button onClick ={ abriFecharBiscoitoSorte}>
                    {exibirBiscoitoSorte === true ?   'Fechar' :'Abrir'}
                    </button>

                {exibirBiscoitoSorte === true &&

                    <p className='msg-biscoito'>
                        "Sempre haverá pessoas melhores e piores em
                        habilidades diferentes. Avance e ajude."
                    </p>
                }
            </div>
        </div>
    )
}