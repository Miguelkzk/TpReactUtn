import { Alert } from "react-bootstrap";

function AlertGenerator(AlertGeneratorProps: { message: String }) {
    const { message } = AlertGeneratorProps;
    return (
        <Alert variant="success" className="mt-2 w-25">
            <Alert.Heading>Mensaje Recibido:</Alert.Heading>
            <p>
                {message}
            </p>

        </Alert>
    )

}
export default AlertGenerator;