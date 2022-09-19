import styled from "styled-components";
import Header from "../common/Header";
import ProductsContext from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import Category from "./Category";
import { getProducts } from "../../services/requests";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res.data);
            })
            .catch(() => window.location.reload());
    }, [])

    return (
        products.length === 0 ?
            <h1>carregando</h1>
            :
            <Wrapper>
                <Header cart />
                <ProductsContext.Provider value={{ products, setProducts }}>
                    <Category category="front-end básico" />
                    <Category category="front-end intermediário" />
                    <Category category="front-end avançado" />
                    <Category category="back-end básico" />
                    <Category category="hardware básico" />
                </ProductsContext.Provider>
            </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(238, 238, 238);
`;

