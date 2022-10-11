export interface ICartProductAsere {
    id:                             number;
    reference_id:                   string;
    client:                         number;
    orders:                         number[];
    human_readable_cart_amount:     string;
    human_readable_cart_net_amount: string;
    human_readable_cart_discount:   string;
    orderitems:                     IOrderCartitem[];
    total_items:                    number;
    created_ts:                     Date;
}

export interface IOrderCartitem {
    id:                                      number;
    item_name:                               string;
    item_cart_name:                          string;
    item_full_name:                          string;
    item_image:                              string;
    item_category:                           string;
    sku:                                     number;
    type:                                    string;
    order:                                   number;
    features:                                IFeature[];
    human_readable_discount_quantity_amount: string;
    available:                               IAvailable;
    human_readable_amount:                   string;
    human_readable_total_amount:             string;
    human_readable_net_total_amount:         string;
    item_description:                        string;
    quantity:                                number;
    created_ts:                              Date;
}

export interface IAvailable {
    label: string;
    value: boolean;
}

export interface IFeature {
    id:         number;
    name:       string;
    value:      string;
    color:      null;
    text_color: null;
    image:      null;
    cart_style: string;
}
