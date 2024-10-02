import Customer from "../entidade/customer";
import RepositoryInterface from "./repository-Interface";


export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {
    

  }