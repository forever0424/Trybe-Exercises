import Client from "./Client";
import Item from "./Item";
import Order from "./Order";
import OrderRepository from "./OrderRepository";

const carolina = new Client('Carolina da Silva');
const lucas = new Client('Lucas da Silva');
const marta = new Client('Marta da Silva');
const joao = new Client('João Antônio da Costa');

const sandwiche = new Item('Sandwiche Natural', 5.00);
const juice = new Item('Suco de Abacaxí', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwiche, juice, dessert], 'cartão');

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(lucasOrder);
orderRepository.addOrder(martaOrder);
orderRepository.addOrder(joaoOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));