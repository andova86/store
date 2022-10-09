import { IProductAsere } from '../../products/domain/product';

export interface IProductCart {
   product: IProductAsere,
   quantity: number
}

export interface IProductUpdateCant {
   id: number,
   quantity: number

}