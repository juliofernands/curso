import Product from "../entidade/product";
import RepositoryInterface from "./repository-Interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {
 
    findbyName(name: string): Promise<Product>;
}