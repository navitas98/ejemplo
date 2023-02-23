type Viajes_Index={
    imagen:string;
    titulo:string;
    descripcion:string;
}
const Viajes=(props:Viajes_Index)=>(
    <>
        
        <div className="contenedor">
            <img src={props.imagen} alt="" />
            <div className="contenido">
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
            </div>
        </div>
    </>
)
export default Viajes;