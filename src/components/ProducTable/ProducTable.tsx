import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Table } from "react-bootstrap";
function ProductTable() {
    //recibe los datos de la api
    const [products, setProducts] = useState<Product[]>([]);
    //muesta el loader mientras espera los datos de la api
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        //traigo todos los componentes
        const fetchProducts = async () => {
            const products = await
                ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        }
        fetchProducts();
    }, []);
    console.log(JSON.stringify(products, null, 2));
    return (
        <>
            {isLoading ? <Loader /> : (<Table hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table >)
            }
        </>
    )
}
export default ProductTable;