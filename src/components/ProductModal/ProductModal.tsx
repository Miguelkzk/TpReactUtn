import { Button, Form, FormControl, FormLabel, Modal, ModalBody } from "react-bootstrap";
import { ModalType } from "../../types/Modal";
import { Product } from "../../types/Product";
//dependencias para formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";
import { toast } from "react-toastify";
import React from "react";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    title: string
    modalType: ModalType;
    prod: Product;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal = ({ show, onHide, title, modalType, prod, refreshData }: ProductModalProps) => {

    //create-actualizar
    const handleSaveUpdate = async (pro: Product) => {
        try {
            const isNew = prod.id === 0;
            if (isNew) {
                await ProductService.createProduct(pro);
            } else {
                await ProductService.updateProduct(pro.id, pro);
            }
            toast.success(isNew ? "Producto creado" : "Producto actualizado", {
                position: "top-center",
            });
            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }
    }

    //delete
    const handleDelete = async () => {
        try {
            await ProductService.deleteProduct(prod.id);
            toast.success("Producto eliminado con exito", {
                position: "top-center",
            });
            onHide();
            refreshData(prevState => !prevState);
        }
        catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }

    }





    //esquema de validacion
    function validationSchema() {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required('El titulo es requerido'),
            price: Yup.number().min(0).required('El precio es requerido'),
            description: Yup.string().required('La descripcion es requerida'),
            category: Yup.string().required('La categoria es requerida'),
            image: Yup.string().min(0).required('La url es requerida'),
        });
    };

    //formik utliza el esquema de validacion 
    const formik = useFormik({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),

    });

    return (
        <>
            {modalType === ModalType.DELETE ? (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <p>Seguro que desea eliminar el producto <br />
                                <strong>{prod.title}</strong>?</p>
                        </ModalBody>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/*formulario para dar de alta o modficar un producto */}

                            <Form onSubmit={formik.handleSubmit}>

                                {/*Campo para titulo*/}
                                <Form.Group controlId="formTitulo">
                                    <FormLabel>Titulo</FormLabel>
                                    <Form.Control
                                        name="title"
                                        type="text"
                                        value={formik.values.title || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.title && formik.touched.title)}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.title}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/*Campo para titulo*/}
                                <Form.Group controlId="formPrecio">
                                    <FormLabel>Precio</FormLabel>
                                    <Form.Control
                                        name="price"
                                        type="number"
                                        value={formik.values.price || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.price && formik.touched.title)}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>


                                {/*Campo para descripcion*/}
                                <Form.Group controlId="formDescripcion">
                                    <FormLabel>Descripcion</FormLabel>
                                    <Form.Control
                                        name="description"
                                        type="text"
                                        value={formik.values.description || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.description && formik.touched.title)}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.description}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/*Campo para categoria*/}
                                <Form.Group controlId="formCategoria">
                                    <FormLabel>Categoria</FormLabel>
                                    <Form.Control
                                        name="category"
                                        type="text"
                                        value={formik.values.category || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.category && formik.touched.title)}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.category}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/*Campo para imagen*/}
                                <Form.Group controlId="formImagen">
                                    <FormLabel>Imagen</FormLabel>
                                    <Form.Control
                                        name="image"
                                        type="text"
                                        value={formik.values.image || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.image && formik.touched.title)}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.image}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Modal.Footer className="mt-4">
                                    <Button variant="secondary" onClick={onHide} >Cancelar</Button>
                                    <Button variant="primary" type="submit" disabled={!formik.isValid}>Aceptar</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    )
}
export default ProductModal;
