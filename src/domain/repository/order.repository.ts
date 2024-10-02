
import Address from "../../../valueobject/address";
import CustomerModel from "../../infrastructure/db/sequelize/model/customer.model";
import OrderItemModel from "../../infrastructure/db/sequelize/model/order-item.model";
import { OrderModel } from "../../infrastructure/db/sequelize/model/order.model";

import Order from "../entidade/order";



export default class OrderRepository 
//implements OrderRepositoryInterface 
{
 async create(entity: Order): Promise<void> {
    await OrderModel.create({
      id: entity.id,
      customer_id: entity.customerId,
      total: entity.total,
      items: entity.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        product_id: item.productId,
        quantity: item.quantity
      }))
    },{include: [ {model: OrderItemModel}]}
  );
  }

}