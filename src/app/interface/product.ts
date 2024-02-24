export interface IProduct {
    id: string | number | undefined;
    name: string;
    price: number;
    desc: string;
    thumbnail: string;
    id_category: string | number | undefined;
}