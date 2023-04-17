import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponRepository from "../../domain/repository/CouponRepository";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import CouponRepositoryMemory from "../repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../repository/memory/ItemRepositoryMamory";
import OrderRepositoryMemory from "../repository/memory/OrderRepositoryMamory";

export default class MemoryRepositoryFactory implements RepositoryFactory {

    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }

    createCouponRepository(): CouponRepository {
        return new CouponRepositoryMemory();
    }

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }

}