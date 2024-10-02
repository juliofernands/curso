
import OrderItemModel from "./order-item.model";
import { OrderModel } from "./order.model";

OrderModel.hasMany(OrderItemModel, { foreignKey: 'order_id' });
OrderItemModel.belongsTo(OrderModel, { foreignKey: 'order_id' });