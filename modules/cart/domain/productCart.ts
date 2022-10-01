import { IProductFake } from './../../products/domain/productFake';

export interface IProductCart {
   product: IProductFake,
   quantity: number
}