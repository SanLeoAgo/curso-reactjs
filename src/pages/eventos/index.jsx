import './index.scss'

export default function Eventos() {

    function clicou(){
        alert('Oie, o usuário acaba de clicar!');
    }

    function movimentouMouse(){
        alert('Oie, O usuário acaba de movimentar o mouse!')
        
    }

    function alterauValor(e){
        let novoValor= e.target.value;//string
        alert('Oie, o usuário acaba de alterar o valor do input/select para: '+novoValor)
    }
    function alterouCheck(e){
        let novoValor=e.target.checked;
        alert('Oie, o usuário acaba de alterar o valor do input[checkbox/radio] para: '+novoValor)
    }



    return <div className='pagina-eventos pagina'>

        <header className='cabecalho'>
            <h1>ReactJS | Eventos</h1>
        </header>

        <section className='secao'>
            <h1>Entendendo eventos</h1>

            <p onClick={clicou} onMouseMove={movimentouMouse}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus alias assumenda aperiam minus commodi sint excepturi, tempora nemo exercitationem perspiciatis sunt! Quia voluptatum laboriosam laborum voluptate labore culpa nemo modi!
            </p>

            <input onChange={alterauValor} type="text" placeholder='Digite aqui alguma coisa' />

            <textarea onChange={alterauValor} placeholder='Digite aqui'>
            </textarea>

            <select onChange={alterauValor}>
                <option>Selecione</option>
                <option>Item A</option>
                <option>Item B</option>
            </select>

            <div className='grupo'>
                <div>
                    <input type="checkbox" onChange={alterouCheck} />Opção 1
                </div>
                <div>
                    <input type="checkbox" />Opção 2
                </div>
            </div>

            <div className='grupo'>
                <div>
                    <input type="radio" name='gpo'onChange={alterouCheck} />Opção 1
                </div>
                <div>
                    <input type="radio" name='gpo' />Opção 2
                </div>
            </div>

            <button onClick={clicou}>Clique Aqui</button>

        </section>
    </div>
}