import { UserForm } from "./UserForm";
import { useUsers } from "../hooks/useUsers";

export const UserModalForm = () => {
    
    const { userSelected, handlerCloseForm } = useUsers();
    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal " style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <UserForm 
                                userSelected={userSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}