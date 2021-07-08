
export interface IAddress {
    id?: string;
    title: string;
    address: string;
    zipCode?: number;
    lat?: number;
    lng?: number;

}


export interface IOrder {
    _id?: string;
    title: string;
    description: string;
    from: string;
    to: string;
    createdAt?: string;
    editedAt?: string;
}