import Client from "./Client";
import Order from "./Order";

type Sort = "maior" | "menor";

export default class OrderRepository {
  private _orders: Order[] = [];

  get orders() { return this._orders }

  addOrder(value: Order): void { this.orders.push(value)}

  removeOrder(value: Order): void { 
    const index = this._orders.findIndex((order) => order.id === value.id);
    this.orders.splice(index, 1);
  }

  listByClient(client: Client) { return this.orders.filter((order) => order.client === client)}

  listBySortedValue(value: Sort) {
    if (value === 'maior') return this.orders
      .sort((a, b) => b.totalWithDiscount() - a.totalWithDiscount());
    
    return this.orders
    .sort((a, b) => a.totalWithDiscount() - b.totalWithDiscount());
  }
}