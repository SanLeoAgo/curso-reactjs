import './index.scss'
import { useState } from 'react';
import {tratarNumero} from'../../utils/conversao'
import {calcularTotalIngresso} from '../../services/ingresso'

export default function VarEstado() {
    //Variáveis de estado
    // const[nome_da_variável,método para alterar o valor da variável]=valor inicial da variável(0);
    const [contador, setContador] = useState(0);
    const [tituloS2,setTituloS2]=useState('Oie');
    const [tituloS3,setTituloS3]=useState('Escolha um item');
    const [marcouOpcaoS4,setmarcouOpcaoS4]=useState(false);
    const [tituloS5,setTituloS5]=useState('Oie');
    const [descricaoS5,setDescricaoS5]=useState('Oie');

    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [res,setRes]= useState(0);

    const [qtdIng,setQtdIng]= useState(0);
    const [meioIng,setMeioIng]= useState(false);
    const [cupom,setCupom]= useState('');
    const [totalIng,setTotalIng]= useState(0);

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

   function somar(){
    let soma = tratarNumero(num1) + tratarNumero(num2);
    return setRes(soma);
   }

   function calcularIngresso(){
   let tot =calcularTotalIngresso(qtdIng,meioIng,cupom)

        setTotalIng(tot);
   }

    return (

        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao ingresso'>
                <h1>Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label >Quantidade</label>
                        <input type="text" value={qtdIng} onChange={e=>setQtdIng(e.target.value)}/>
                    </div>
                    <div>
                        <label>Meia entrada</label>
                        <input type="checkbox" checked={meioIng} onChange={e=>setMeioIng(e.target.checked)}/>
                    </div>
                    <div>
                        <label>Cupom:</label>
                        <input type="text" value={cupom} onChange={e=>setCupom(e.target.value)}/>
                    </div>
                    <div>
                        {/* &nbsp; espaço vazio*/}
                        <label >&nbsp;</label>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>
                   
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                    
                </div>

            </div>

            
            
            <div className='secao calculadora'>
                <h1>Calculadora</h1>
                <div className='entrada'>
                    {/* Criando o vincula das variáveis de estado com o input */}
                    <input type="text" value={num1} onChange={e=>setNum1(e.target.value)}/>
                    <input type="text" value={num2} onChange={e=>setNum2(e.target.value)}/>
                    <div>=</div>
                    <div className='res' >{res}</div>
                </div>
                <button onClick={somar}> Somar </button>
            </div>

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
                <input type="text" value={tituloS2} onChange={e=>setTituloS2(e.target.value)}/>
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e=>setTituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML/CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é lindezinha? {marcouOpcaoS4 ? 'Sim':'Não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={e=>setmarcouOpcaoS4(e.target.checked)}/>Programar é lindezinha?
            </div>

            <div className='secao'>
                <h1>{tituloS5}</h1>

                <input type="text" value={descricaoS5} onChange={e=> setDescricaoS5(e.target.value)}/>

                <button onClick={()=>setTituloS5(descricaoS5)}>Alterar</button>
            </div>

        </div>
    )
}