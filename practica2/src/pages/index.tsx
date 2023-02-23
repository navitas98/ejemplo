
import styles from '@/styles/Home.module.css'
import Viajes from '@/component/viaje'
import datos from '@/datos/datos'

export default function Home() {
  return (
    <>
    <h1 id='titulo'>Los viajes de Segio y Javier</h1>
    {
      datos.map(n=>(<a href="viaje_detallado"><Viajes descripcion={n.descripcion_corta} imagen="/img/paris.jpeg" titulo={n.titulo}></Viajes></a>))
    }
    </>
  )
}
