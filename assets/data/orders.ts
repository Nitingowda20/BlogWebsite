import { Order } from '../../src/types';
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
        products: products[0],
      },
      {
        id: 2,
        order_id: 12345,
        quantity: 2,
        product_id: products[1].id,
        products: products[1],
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
        products: products[4],
      },
      {
        id: 2,
        order_id: 67890,
        quantity: 4,
        product_id: products[2].id,
        products: products[2],
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
        products: products[5],
      },
      {
        id: 2,
        order_id: 24680,
        quantity: 1,
        product_id: products[8].id,
        products: products[8],
      },
      {
        id: 3,
        order_id: 24680,
        quantity: 3,
        product_id: products[7].id,
        products: products[7],
      },
    ],
  },
];

export default orders;
