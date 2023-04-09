// vamos agregar una pequeña animación para que cuando  nosotros le demos click en el botón de cerra, vayamos a llamar una función que a su vez esta función añada un estilo a neustro componente y despues con JavaScript vamos a detectar cuando esa función termine, cuando termine esa animación, vamos a eliminar el componente de nuestro sitio incluso DOM
import { useRef } from "react"
import styles from "../styles/Modal.module.css"

interface Props {
  children: React.ReactNode
  title: string
  root: any
}

export default function Modal({ children, title, root }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function cb(e: Event) {
    // Destruimos el componente y lo removemos del DOM, quedando sin ninguna referencia del modal
    root.unmount()
    // No se para que sirve el !, supongo que es como en angular donde si existe lo hace document.body.removeChild(ref.current!);
    // De esta forma eliminamos hasta la capa que contenía nuestro modal desmontado
    document.querySelector("#modal")?.remove()
    // Ahora como ya no hay referencia del modal tenemos que remover el addEventListener que agregamos
    document.removeEventListener("animationend", cb)
  }

  function handleClick() {
    // La animación de fadeOut no esta asignado al div, por lo que se lo vamos asignar cuando vayamos a cerrar el modal
    ref.current && ref.current.classList.add(styles.fadeOut)
    // Para dectectar cuando termina la animación de fadeOut y poder destruir este componente
    // aca para el tema de ts podemos hacer ref.current && ref.current.addEventListener("animationend", function); or ref.current?
    ref.current?.addEventListener(
      "animationend",
      cb,
      // Con esto nos aseguramos que este addEventListener solo exista una vez, ahora si queremos manejarlo de otra forma o sumarle esta forma de limpieza de memoria
      { once: true }
    )
  }

  /* El primer Div es el que va a oscurecer toda la pagina */
  /* El segundo div es el contenedor de mi modal, la cajita blanca que se va a mostrar */
  return (
    <div
      ref={ref}
      className={`modalContainer fixed top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.3)] text-black`}
    >
      {/* el Overflow es para que si nuestro modal no es lo suficientemente grande, no queremos que crezca, siempre va haber un tamaño específico*/}
      {/* Si quisieramos agregarle un scroll porque el contenido va a ser mas grande, eso lo agregaríamos en la capa de contenido, pero no de los estilos bases del modal personalizado */}
      <div
        className={`${styles.modalView} h-[90vh] w-[90%] overflow-hidden rounded-[10px] bg-white`}
      >
        <div className={`modalHeader flex justify-between bg-white p-[10px]`}>
          <div>{title}</div>
          <div>
            <button
              className="closeBtn cursor-pointer rounded-[3px] bg-none px-[15px] py-[10px] font-bold text-[#999] hover:text-black"
              onClick={handleClick}
            >
              X
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
