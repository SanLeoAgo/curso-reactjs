import './index.scss'
import { useState } from 'react';

export default function VarEstado() {

    // const[nome_da_variável,método para alterar o valor da variável]=valor inicial da variável(0);
    const [contador, setContador] = useState(0);
    const [tituloS2,setTituloS2]=useState('Oie');
    const [tituloS3,setTituloS3]=useState('Escolha um item');
    const [marcouOpcaoS4,setmarcouOpcaoS4]=useState(false);
    const [tituloS5,setTituloS5]=useState('Oie');
    const [descricaoS5,setDescricaoS5]=useState('Oie');

    // let contador = 0;
    function aumentar() {
        // contador++;
        if (contador < 10)
            setContador(contador + 1);
        alert(contador);
    }
    function diminuir() {
        // contador--;
        if (contador > 0)
            setContador(contador - 1);

    }

    function alterarTituloS2(e){
        let novoValor=e.target.value;
        setTituloS2(novoValor);
    }
    
    function alterarTituloS3(e){
        let novoValor=e.target.value;
        setTituloS3(novoValor);
    }

    function alterarOpcaoS4(e){
        let novoValor=e.target.checked;
        setmarcouOpcaoS4(novoValor);
    }

    function alterarDescricaoS5(e){
        let novoValor= e.target.value;
        setDescricaoS5(novoValor);
    }
    function alterarTituloS5(){
        setTituloS5(descricaoS5);
    }

    return (

        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>
            </div>

            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={alterarTituloS2}/>
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={alterarTituloS3}>
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML/CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é lindezinha? {marcouOpcaoS4 ? 'Sim':'Não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={alterarOpcaoS4}/>Programar é lindezinha?
            </div>

            <div className='secao'>
                <h1>{tituloS5}</h1>

                <input type="text" value={descricaoS5} onChange={alterarDescricaoS5}/>

                <button onClick={alterarTituloS5}>Alterar</button>
            </div>

        </div>
    )
}