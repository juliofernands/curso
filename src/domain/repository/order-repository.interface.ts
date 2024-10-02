import { Order } from "sequelize";
import Customer from "../entidade/customer";
import RepositoryInterface from "./repository-Interface";


export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {
    

  }