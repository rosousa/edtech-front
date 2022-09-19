import styled from "styled-components";
import Product from "./Product";

export default function Products({ products }) {

    return (
        <Wrapper>
            {products.length === 0 ?
            <span>loading...</span>
            :
            products.map(product => (
                <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    productId={product._id}
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