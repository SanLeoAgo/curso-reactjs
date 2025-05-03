
import './index.css';
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <h1>
        Estudo ReactJS
        <i className='fa fa-heart'/>
        </h1>
        <br />
        <h2>Estudando JSX</h2>
        <ul>
          <li>
            <Link to='/contato'>Ir para contato</Link>
          </li>
        </ul>
    </div>
  );
}

 
