import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import "./styles.css";

import styled, { css } from 'styled-components'

const Wrapper = styled.section`
    background: palevioletred;
    color: white;

  ${props =>
    props.primary &&
    css`
      background: papayawhip;
      color: green;
    `};
`;

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

function App() {
    return (
        <div className="App">
            <Wrapper primary>
                <ProductList />
            </Wrapper>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
