import { Carousel } from "react-bootstrap";
export function CarrouselHome() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="container mt-4">
                <Carousel fade data-bs-theme="dark">
                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '60rem', objectFit: 'cover' }}
                            src="src/assets/utn.jpg" alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Nuestra Unversidad</h1>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/cursos.png" alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Cursos</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/arte.jpeg" alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Salon de arte</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>);

}