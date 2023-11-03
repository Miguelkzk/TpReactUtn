import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
export function AboutUs() {
    return (
        <>
            <div className="container" style={{ marginTop: '2rem' }}>
                <div className="justify-content-md-center row">
                    <div className="col-sm-12 col-md-9">
                        <h3>Sobre nosotros</h3>
                        <p>La Facultad Regional de Mendoza o FRM es una rama de la Universidad Tecnológica Nacional.
                            Está ubicado en Mendoza, la ciudad capital de Mendoza en Argentina, y ofrece grados académicos en los siguientes campos</p>
                    </div>
                    <Cards titulo="Ingeniería en sistemas"
                        cuerpo=" La ingeniería de sistemas es un campo interdisciplinario de la ingeniería que permite estudiar y comprender la realidad, con el propósito de implementar u optimizar sistemas complejos."
                        url='src/assets/sistemas.png'
                    />
                    <Cards titulo="Ingeniería electrónica"
                        cuerpo=" La ingeniería electrónica es una rama de la ingeniería que se encarga de resolver problemas de la ingeniería tales como el control de procesos industriales y de sistemas electrónicos de potencia."
                        url='src/assets/electronica.jpeg'
                    />
                    <Cards titulo="Ingeniería electromecánica"
                        cuerpo=" La Ingeniería Electromecánica es la aplicación híbrida que surge de la combinación sinérgica de distintas áreas del conocimiento, como el electromagnetismo, la electrónica, la electricidad y la mecánica."
                        url='src/assets/ing-electromecanica.jpg'
                    />


                </div>
            </div>
        </>
    )


}
function Cards(props: { titulo: String; cuerpo: String; url: string }) {
    const { titulo, cuerpo, url } = props;
    return (
        <div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center col-auto">
            <Card style={{ width: '18rem', height: '26rem', margin: '1rem' }}>
                <Card.Img variant="center" src={url} style={{ margin: '0.5rem', maxHeight: '160px' }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {cuerpo}
                    </Card.Text>
                </Card.Body>
            </Card></div>

    )
}