// Define the types of products available in the grocery store
export type ProductType = 'weight' | 'volume' | 'packSize' | 'count';

// Represents a product in the grocery store
export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
};

// Define possible options for each product type
export type WeightSize = '250g' | '500g' | '1kg' | '2kg';
export type VolumeSize = '250ml' | '500ml' | '1L' | '2L';
export type PackSize = 'Single Pack' | 'Pack of 2' | 'Pack of 4' | 'Pack of 6';
export type CountSize = '1 pc' | '6 pcs' | '12 pcs' | '24 pcs';

// Define a cart item, where size is dependent on the product type
export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: WeightSize | VolumeSize | PackSize | CountSize;
  quantity: number;
};

// Define possible order statuses
export type OrderStatus = 'New' | 'Processing' | 'Out for Delivery' | 'Delivered';

// List of order statuses
export const OrderStatusList: OrderStatus[] = [
  'New',
  'Processing',
  'Out for Delivery',
  'Delivered',
];

// Represents an order made by a user
export type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;
  order_items?: OrderItem[];
};

// Represents an item within an order
export type OrderItem = {
  id: number;
  product_id: number;
  product: Product;
  order_id: number;
  size: WeightSize | VolumeSize | PackSize | CountSize;
  quantity: number;
};

// Represents a user's profile
export type Profile = {
  id: string;
  group: string;
};
