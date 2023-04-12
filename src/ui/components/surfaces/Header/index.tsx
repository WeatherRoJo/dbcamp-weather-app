import { Link } from "react-router-dom";



function Header(){
    return(
        <div>
            <header>
                <ul>
                    <li> <Link to = "/" > Home </Link> </li>
                    <li> <Link to = "/register" > Cadastrar  </Link> </li>
                    <li> <Link to = "/list" >  Listar  </Link></li>
                </ul>
            </header>
        </div>
    )
}


export default Header;