import { ManufactureDetailsI } from './manufactureDetails.interface';
import { shippingDetailsI } from './shippingDetails.interface';

export interface productI {
  manufacture_details: ManufactureDetailsI;
  shipping_details: shippingDetailsI;
  id: string;
  _id: string;
  item: string;
  description: string;
  price: number;
  quantity: number;
  category: string[];
  images: string[];
  color: string[];
  createdAt: Date;
  __v: number;
}
