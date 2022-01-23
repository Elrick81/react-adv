import { createContext, ReactElement, useContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContexProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties

}



export const ProductCard = ({ children, product, className, style } : Props) => {
    
    /*
    const [ counter, setCounter ] = useState(0)

    const increaseBy = ( value: number) => {
        setCounter( prev => Math.max(prev + value, 0));
    }
    */
    const { counter, increaseBy } = useProduct();


    return(
            <Provider value= {{
                counter,
                increaseBy,
                product

            }}>
                <div className={ `${styles.productCard } ${className}`} 
                style={ style }>
        
                    { children }
                </div>
            
            </Provider>
       


    )
}

{/**

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
*/}