type viaje_detallado_props={
    id:string;
}
const Viajes=(props:viaje_detallado_props)=>(
    <>
        {/*Obtener los datos a partir de la id */}
       <div className="viaje_detallado">
            <img id="imagen_larga" src="" alt="" />
            <h1 id="titulo_pais">TITULO</h1>
            <p id="descripcion_larga">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at dolores error nihil. Veniam nihil deserunt itaque sed tempora. Dolorem hic tempore ea veniam reprehenderit deleniti voluptatum minus itaque nihil!</p>
            <a id="volver" href="/">Volver</a>
       </div>
    </>
)
export default Viajes;