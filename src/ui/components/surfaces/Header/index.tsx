import { Link } from "react-router-dom";
import "./style.css"


function Header(){
    return(
            <header className="header" >
                <ul>
                    <li> <Link to = "/" > Home </Link> </li>
                    <li> <Link to = "/register" > Cadastrar  </Link> </li>
                    <li> <Link to = "/list" >  Listar  </Link></li>
                </ul>
            </header>
    )
}


export default Header;