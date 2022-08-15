const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
const customerInfo = (order) => {
  const customerName = order.name;
  const deliveryName = order.order.delivery.deliveryPerson;
  const customerCel = order.phoneNumber;
  const customerAddress = order.address.street;
  const customerNumber = order.address.number;
  const customerAp = order.address.apartment;
  return `Olá ${deliveryName}, entrega para: ${customerName}, Telefone: ${customerCel}, ${customerAddress}, N ${customerNumber}, ap: ${customerAp}`;
}
  
  console.log(customerInfo(order));
  
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const clientName = order.name;
  const clienttotal = order.payment.total;
  const clientDrink = order.order.drinks.coke.type;
  return `Olá ${clientName}, o total do seu pedido de marguerita, peperoni e ${clientDrink} é R$${clienttotal}`;
}
  
  console.log(orderModifier(order));