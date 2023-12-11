import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className=" h-screen w-screen7ybh flex justify-center items-center">
        <div>
        <h2>Upss... Página no encontrada</h2>
        <Link to={'/'}>Volver al inicio</Link>
        </div>

    </div>
  )
}
