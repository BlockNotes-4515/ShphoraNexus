import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import OrderTable from './OrderTable';
import { useSelector } from 'react-redux';
import useOrderFilter from '../../../hooks/useOrderFilter';

const Orders = () => {
  //const adminOrder=[ { "orderId": 1, "email": "user1@example.com", "orderItems": [ { "orderItemId": 1, "product": { "productId": 1, "productName": "Gaming Laptop GX", "image": "7f41fadc-b72a-4761-9712-ebe00ded90b1.png", "description": "High-performance gaming laptop with a 4K display and powerful GPU", "quantity": 23, "price": 1200.0, "discount": 20.0, "specialPrice": 960.0 }, "quantity": 1, "discount": 20.0, "orderedProductPrice": 960.0 } ], "orderDate": "2026-02-18", "payment": { "paymentId": 1, "paymentMethod": "CARD", "pgPaymentId": "pi_1FHEhK2eZVKYlo2CcK4UJNdW", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 960.0, "orderStatus": "Order Accepted !", "addressId": 1 }, { "orderId": 25, "email": "user1@example.com", "orderItems": [ { "orderItemId": 4, "product": { "productId": 257, "productName": "Blender", "image": "0402622f-aa0e-4641-b42c-91f080e0958c.png", "description": "High-performance Blender having the powerfull features for modern family", "quantity": 27, "price": 500.0, "discount": 19.0, "specialPrice": 405.0 }, "quantity": 3, "discount": 19.0, "orderedProductPrice": 405.0 } ], "orderDate": "2026-04-17", "payment": { "paymentId": 25, "paymentMethod": "online", "pgPaymentId": "pi_3TN8MZ7LHzkqIp0c1JhG77ut", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 1215.0, "orderStatus": "Order Accepted !", "addressId": 1 }]
 //const pagination = { pageNumber: 0, pageSize: 50, totalElements: 4, totalPages: 1, lastPage: true }
  const { adminOrder, pagination } = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder?.length === 0;
  return (
    <div className='pb-6 pt-20'>
      {emptyOrder ? (
        <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
          <FaShoppingCart size={50} className='mb-3'/>
           <h2 className='text-2xl font-semibold'>No Orders Placed Yet</h2>
        </div>
      ) : (
          <OrderTable adminOrder={adminOrder} pagination={pagination}/>
      )}
    </div>
  );
}

export default Orders; 
