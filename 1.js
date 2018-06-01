const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;

  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = function(order) {
    for (const key in order) {
      if (this.products.hasOwnProperty(key)) {
        let sum = order[key] * products[key];
        this.totalPrice += sum;
      }
    }
    console.log(`Сумма к оплате : ${this.totalPrice}`);
  };
  this.getCustomerMoney = function() {
    let pay;

    do {
      pay = prompt(`К оплате ${this.totalPrice} грн. `);
      if (pay === null) {
        console.log("Вы отказались");
        break;
      }
      pay = Number(pay);

      typeof pay;
      console.log(`Вы заполатили ${pay} грн.`);
    } while (Number.isNaN(pay) || pay <= this.totalPrice);
    this.customerMoney = pay;
  };
  this.countChange = function() {
    // const countPay = this.getCustomerMoney();
    this.changeAmount = this.customerMoney - this.totalPrice;
    // console.log(`Cдача ${this.changeAmount} грн.`);
    
  };
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
  this.serve = function(order) {
    const purchase = Object.entries(order);
    for (const prod of purchase) {
      const [nameProd, conutProd] = prod;
      console.log(`Продукт ${nameProd} Цена ${conutProd} грн.`);
    }
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();

    if(!this.customerMoney) {
        alert('Ошибка');
    }
    else{
        alert(`Спасибо за покупку! Ваша сдача ${this.changeAmount}`);
    }
    
  };
  this.reset();
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const cashier = new Cashier("Mango", products);
// cashier.countTotalPrice(order);
// cashier.getCustomerMoney();
// cashier.countChange();
cashier.serve(order);
