import styled from "styled-components";
import Products from "./Products";
import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";

export default function Category({ category }) {
    const { products } = useContext(ProductsContext);
    const productsInThisCategory = products.filter(product => product.category === category);

    return (
        <Wrapper>
            <h2>{category}</h2>
            <Products
                products={productsInThisCategory}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    overflow-x: auto;
    margin: 0 0 25px 15px;
    font-family: "Roboto Mono", monospace;

    h2 {
        font-size: 22px;
        position: sticky;
        top: 0;
        left: 0;
        margin-bottom: 15px;
    }

    &:nth-child(2) {
        margin-top: 200px;
    }
`;