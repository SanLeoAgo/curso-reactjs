

export function tratarNumero(valor){
    return Number(valor.replaceAll(',','.'));
}

export function formatarResultado(valor){
    return Number(valor.replaceAll('.',',')).toFixed(2);
}


