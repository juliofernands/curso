export default interface RepositoryInterface<T> {
    find(id: string): Promise<T>
    findAllRepository(): Promise<T[]>
    create(entity: T): Promise<void>
    update(entity: T):  Promise<void>
 
}