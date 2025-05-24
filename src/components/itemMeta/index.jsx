import './index.scss'



export default function ItemMeta(props) {

   

    return (
        // cada linha da lista é um componente que recebe
        //  como parâmetro as funçoes, os identificadores e os itens
        <li className='comp-item-meta'>
            <i className="fa-regular fa-pen-to-square" onClick={() => props.alterarMeta(props.pos)}></i>&nbsp;
            <i className="fa-solid fa-trash-can" onClick={() => props.removerMeta(props.pos)}></i>&nbsp;
            {props.item}
        </li>
    )
}