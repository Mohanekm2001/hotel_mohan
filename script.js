
async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    const menuDiv = document.querySelector('#menu');
    data.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <h4>${item.price}</h4>
      `;
      menuDiv.appendChild(menuItem);
    });
  } catch (error) {
    console.log('Error fetching menu:', error);
  }
}

function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Veggie Burger', 'Cheese Burger', 'Chicken Burger'];
      const order = {
        burger1: burgers[Math.floor(Math.random() * burgers.length)],
        burger2: burgers[Math.floor(Math.random() * burgers.length)],
        burger3: burgers[Math.floor(Math.random() * burgers.length)],
      };
      console.log('Order:', order);
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = false;
      const order = {
        order_status: orderStatus,
        paid: paid,
      };
      console.log('Order status:', order);
      resolve(order);
    }, 1500);
  });
}

function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = true;
      const order = {
        order_status: orderStatus,
        paid: paid,
      };
      console.log('Order status:', order);
      resolve(order);
    }, 1000);
  });
}

function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// call functions in sequence using async/await
async function orderSequence() {
  await getMenu();
  const order = await takeOrder();
  const orderStatus = await orderPrep();
  const paymentStatus = await payOrder();
  if (paymentStatus.paid) {
    thankyouFnc();
  }
}

window.addEventListener('load', orderSequence);
