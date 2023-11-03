import React, { useState } from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";
type MyModalProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void;
};
//guardar el valor seleccionado en el formulario 
const ModalColorPick = ({ show, onHide, handleColorChange }: MyModalProps) => {
    const [selectedColor, setSelectedColor] = useState("#FFF");
    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };
    //al hacer click se pasa el color a la funcion del padre y se cierra el modal 
    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide();
    }
    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambiar de colors</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">
                    Elije un color
                </Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#FFF"
                    title="Elije tu color"
                    onChange={handleColorPickerChange}
                />
            </Modal.Body>
            <ModalFooter>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleAcceptClick}>
                    Aceptar
                </Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalColorPick

