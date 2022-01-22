import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { PruductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
// export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


export const ProductCard: PruductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} )


export default ProductCard