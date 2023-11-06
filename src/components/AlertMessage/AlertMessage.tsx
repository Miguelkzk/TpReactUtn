import { useState } from "react";
import AlertGenerator from "../AlertGenerator/AlertGenerator";
import { Button } from "react-bootstrap";

function AlertMessage() {
    //guarda el valor del campo de texto
    const [inputValue, setInputValue] = useState('');
    //guarda el mensaje 
    const [message, setMessage] = useState('');
    //muestra el componente hijo segun el estado
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            setShowAlert(true)
            setMessage(inputValue)
        } else {
            setShowAlert(false)
        }
    }
    return (
        <div className="m-3">
            <h3>Mensaje de alerta</h3>
            <input type="text" value={inputValue} onChange={(e) =>
                setInputValue(e.target.value)} />
            <Button onClick={handleClick} style={{ marginLeft: '20px' }}>Enviar</Button>
            {showAlert && < AlertGenerator message={message} />}
        </div>

    )
} export default AlertMessage;