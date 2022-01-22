import { createContext, useContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContexProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;






export const ProductCard = ({ children, product } : ProductCardProps) => {
    
    /*
    const [ counter, setCounter ] = useState(0)

    const increaseBy = ( value: number) => {
        setCounter( prev => Math.max(prev + value, 0));
    }
    */
    const { counter, increaseBy } = useProduct();


    return(
        <div className={ styles.productCard } >
            <Provider value= {{
                counter,
                increaseBy,
                product

            }}>

                { children }
            
            </Provider>
            {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug" /> */}
            {/* <img className={ styles.productImg } src={ noImage } alt="Coffee Mug" />
 */}
            
            {/**         
            <ProductImage img={ product.img } />
            <ProductTitle title={ product.title } />
            <ProductButtons 
            increaseBy={ increaseBy }
            counter={ counter }  />
            */}


        </div>
    )
}

{/**

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
*/}