import Item from './Item';
import Client from './Client';

type Payment = 'dinheiro' | 'cartão' | 'vale';

export default class Order {
  private _id: number;
  private _createdAt: Date;
  private _client: Client;
  private _items: Item[] = [];
  private _discount = 0;

  constructor(client: Client, items: Item[], private _paymentMethod: Payment, discount?: number) {
    this._id = Math.round(Date.now() * (Math.random() + 1));
    this._createdAt = new Date();
    this._client = client;
    this.items = items;
    this.paymentMethod = _paymentMethod;

    if (discount) this.discount = discount;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): Payment {
    return this._paymentMethod;
  }

  set paymentMethod(value: Payment) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  total(): number {
    return this.items.reduce((acc, { price }) => acc + price, 0);
  }

  totalWithDiscount(): number {
    return this.total() * (1 - this.discount);
  }
}