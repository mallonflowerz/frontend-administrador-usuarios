import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UsersApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">
                                Usuarios
                            </NavLink>
                        </li>
                        {!login.isAdmin ||
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users/register">
                                    Registrar Usuario
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                        {login.user?.username}
                    </span>
                    <button
                        onClick={handlerLogout}
                        className="btn btn-outline-success">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}