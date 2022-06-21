class Customer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Item {
  itemName: string;
  price: number;

  constructor(itemName: string, price: number) {
    this.itemName = itemName;
    this.price = price;
  }
}

class Order {
  customer: Customer;
  consumedItems: Item[] = [];
  paymentMethod: string;
  discount = 0;

  constructor(customer: Customer, consumedItems: Item[], paymentMethod: string, discount: number) {
    this.customer = customer;
    this.consumedItems = consumedItems;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
  }

  total = () => this.consumedItems.reduce((acc, { price }) => acc + price, 0)

  totalWithDiscount = () => {
    if (this.discount !== 0) return this.total() * (1 - this.discount);
    return this.total();
  }
}