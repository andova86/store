import { IProductPlatzi } from './../../products/domain/productPlatzi';
import { IProductFake } from './../../products/domain/productFake';

export interface IProductCart {
   product: IProductPlatzi,
   quantity: number
}