import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="d-flex justify-content-evenly align-items-center bg-secondary ">
            <div>
                    <button className="btn btn-success mx-4">Inicio</button>
                    <button className="btn btn-success mx-4">Productos</button>
                    <button className="btn btn-success mx-4">Contactos</button>
            </div>
            <div>
                <h3 className="">Emprendimiento</h3>
            </div>
            <div className="d-flex">
                <CartWidget />
                <p className="mx-2">0</p>
                </div>
            </nav>
          )
}

export default NavBar

