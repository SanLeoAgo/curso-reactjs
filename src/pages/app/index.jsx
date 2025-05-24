
import './index.scss';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'; 

export default function App() {
  return (
    <div className="pagina-app pagina">
      {/* <header className='cabecalho'>
        <h1 className='titulo1'>
          Estudo ReactJS &nbsp;
          <i className='fa fa-heart' />
        </h1>
      </header> */}
      <Cabecalho titulo="Estudando ReactJS!!!!"/>

      <section className='secao'>
        <h1>Temas</h1>

        {/* <input type="text" placeholder='Digite aqui' />
        <br /><br />

        <select>
          <option >Item 1</option>
          <option >Item 2</option>
          <option >Item 3</option>
        </select>

        <br /><br />
        
        <button>Clique Aqui</button> */}

        <ul>
          <li>
            <Link to='/contato'>Ir para Contato</Link>
          </li>
          <li>
          <Link to='/eventos'>Ir para Eventos</Link>
          </li>
          <li>
          <Link to='/varestado'>Ir para Variável de Estado</Link>
          </li>
          <li>
          <Link to='/componentes'>Ir para Componentes</Link>
          </li>
          <li>
          <Link to='/rend-cond'>Ir para Renderização Condicional</Link>
          </li>
           <li>
          <Link to='/efeitos'>Ir para Efeitos</Link>
          </li>

        </ul>
        
      </section>

    </div>
  );
}


