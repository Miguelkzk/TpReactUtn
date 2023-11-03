import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalColorPick from "../ModalColorPick/ModalColorPick";

function ButtonColorPick() {
    //color inicial
    const [buttonColor, setButtonColor] = useState("#2EFEF7");
    //manejo del modal 
    const [showModal, setShowModal] = useState(false);
    //funcion para cambiar de color 
    const handColorChange = (color: string) => {
        setButtonColor(color);
    }
    //funcion para mostrar el modal 
    const handShowModal = () => {
        setShowModal(true);
    }
    return (
        <div className="m-3">
            <h3>Boton que cambia de color</h3>
            {/*componente padre*/}
            <Button variant="primary" style={{ backgroundColor: buttonColor }}
                onClick={handShowModal}>
                Cambiar Color
            </Button>
            {showModal && < ModalColorPick show={showModal}
                onHide={() => setShowModal(false)}
                handleColorChange={handColorChange}
            />}
        </div>
    )
}
export default ButtonColorPick;