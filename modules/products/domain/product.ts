/* export interface IProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISize[];
    slug: string;
    tags: string[];
    title: string;
    type: IType;
    gender: 'men'|'women'|'kid'|'unisex'
}

export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type IType = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: IProduct[],
} */

export interface IProductAsere {
    id:                            number;
    product_item:                  IProductItem;
    human_readable_current_price:  string;
    human_readable_discount_price: string;
    human_readable_price:          string;
    discount_price:                null;
    quantity_discount:             null;
    status_display:                string;
    related_products:              any[];
    units:                         number;
    status:                        string;
    current_net_price:             number;
    sku:                           number;
    price:                         null;
    currency:                      string;
    original_entity:               null;
    updated_by:                    number;
}

export interface IProductItem {
    id:       number;
    product:  IProduct;
    features: Feature[];
}

export interface Feature {
    name:  string;
    value: string;
}

export interface IProduct {
    id:                   number;
    product_image:        string;
    full_name:            string;
    full_name_es:         string;
    full_name_en:         null;
    short_description:    string;
    short_description_es: string;
    short_description_en: null;
    description:          string;
    description_es:       string;
    description_en:       null;
    use_taxes:            boolean;
    customers_of_age:     boolean;
    barcode_base:         string;
    name:                 string;
    name_es:              string;
    name_en:              null;
    slug:                 string;
    type_package:         number;
    category:             number;
}

