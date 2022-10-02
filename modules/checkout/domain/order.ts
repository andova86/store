
export interface IOrder {

    _id? : string;
    orderItems: IOrderItem[]
}

export interface IOrderItem {
    _id : string;
    title: string;
    size: string;
    quantity : number;
    image : string;
    price : number;
    shippingAdrres: IShippingAddress;
    
}

export interface IShippingAddress 
{
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
}