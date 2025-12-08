import ComponenteFilho from "./ComponenteFilho"

const ComponentePai = () =>{
    return(

        <>
        <div>
            <h2>
                Inicio do Componente Pai
            </h2>
                <ComponenteFilho />
             <h2>
                Fim do Componente pai
            </h2>
        </div>
    </>
    )
}
export default ComponentePai