import styled from "styled-components";
import Product from "./Product";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext } from "react";
import { useEffect } from "react";
import { getProducts } from "../../services/requests";

export default function Products({ products }) {

    // useEffect(() => {
    //     getProducts()
    //         .then(res => {
    //             setProducts(res.data);
    //         })
    //         .catch(() => window.location.reload());
    // }, []);

    return (
        <Wrapper>
            {products.length === 0 ?
            <span>loading...</span>
            :
            products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    productId={product.id}
                    price={product.price}
                />
            ))
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
`;