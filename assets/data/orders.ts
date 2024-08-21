import { Order, OrderItem } from '../../src/types';
import products from './products';
import dayjs from 'dayjs';

const now = dayjs();

const orders: Order[] = [
  {
    id: 12345,
    created_at: now.subtract(2, 'hours').toISOString(),
    total: 45.76,
    status: 'Out for Delivery',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 12345,
        quantity: 3,
        product_id: products[0].id,
        product: products[0], // Corrected property name
        size: products[0].type === 'weight' ? '500g' : 'Single Pack', // Example size, adjust as needed
      },
      {
        id: 2,
        order_id: 12345,
        quantity: 2,
        product_id: products[1].id,
        product: products[1], // Corrected property name
        size: products[1].type === 'volume' ? '250ml' : 'Pack of 2', // Example size, adjust as needed
      },
    ],
  },
  {
    id: 67890,
    created_at: now.subtract(1, 'day').toISOString(),
    total: 28.99,
    status: 'Delivered',
    user_id: '2',
    order_items: [
      {
        id: 1,
        order_id: 67890,
        quantity: 1,
        product_id: products[4].id,
        product: products[4], // Corrected property name
        size: products[4].type === 'weight' ? '1kg' : 'Single Pack', // Example size, adjust as needed
      },
      {
        id: 2,
        order_id: 67890,
        quantity: 4,
        product_id: products[2].id,
        product: products[2], // Corrected property name
        size: products[2].type === 'volume' ? '500ml' : 'Pack of 4', // Example size, adjust as needed
      },
    ],
  },
  {
    id: 24680,
    created_at: now.subtract(2, 'weeks').toISOString(),
    total: 76.33,
    status: 'Delivered',
    user_id: '3',
    order_items: [
      {
        id: 1,
        order_id: 24680,
        quantity: 2,
        product_id: products[5].id,
        product: products[5], // Corrected property name
        size: products[5].type === 'packSize' ? 'Pack of 2' : '1 pc', // Example size, adjust as needed
      },
      {
        id: 2,
        order_id: 24680,
        quantity: 1,
        product_id: products[8].id,
        product: products[8], // Corrected property name
        size: products[8].type === 'count' ? '6 pcs' : '1 pc', // Example size, adjust as needed
      },
      {
        id: 3,
        order_id: 24680,
        quantity: 3,
        product_id: products[7].id,
        product: products[7], // Corrected property name
        size: products[7].type === 'volume' ? '1L' : 'Pack of 4', // Example size, adjust as needed
      },
    ],
  },
];

export default orders;
