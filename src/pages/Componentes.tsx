import AlertMessage from "../components/AlertMessage/AlertMessage"
import ButtonColorPick from "../components/ButtonColorPick/ButtonColorPick"
import DangerInput from "../components/DangerInput/DangerInput"

function Componentes() {
    return (
        <>
            <h5>Estos son algunos ejemplos de componentes con props </h5>
            <DangerInput />
            <AlertMessage />
            <ButtonColorPick />
        </>
    )
}
export default Componentes