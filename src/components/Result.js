import React from 'react'
//podemos reaizar un destructuring para evitar usar los props.result
const Result = ({result}) => {
    //console.log(result)
    if(Object.entries(result).length === 0) return null;
    return(
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es <span>{result.PRICE}</span></p>
            <p>Precio mas alto del dia <span>{result.HIGHDAY}</span></p>
            <p>Precio mas bajo del dia <span>{result.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas:  <span>{result.CHANGEPCT24HOUR}%</span></p>
            <p>Ultuma actualizacion <span>{result.LASTUPDATE}</span></p>
        </div>
    )
}

export default Result;