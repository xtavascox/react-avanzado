import {createContext} from "react";
import {IProductContextProps, IProductCardProps} from "../interfaces/interfaces";

import {useProduct} from "../hooks/useProduct";

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as IProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children}: IProductCardProps) => {

    const {counter, handleCount} = useProduct(0)

    return (
        <Provider value={{
            counter,
            handleCount,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>

    )
}
