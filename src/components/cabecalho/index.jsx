import './index.scss';

export default function Cabecalho(props) {

    return (
        <header className='comp-cabecalho'>
            <h1 className='titulo'>
                {/* O titulo que é passado como parâmetro , o ?? representa iF
                caso não se passe um título , ele exibe ReactJS */}
                {props.titulo ?? 'ReactJS'}
            </h1>
        </header>

    );
};