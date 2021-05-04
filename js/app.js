'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Location(locationName, mainCustomers, maxCustomers, avgCookie, customersEachHour, cookiesEachHour, total) {
    this.locationName = locationName;
    this.mainCustomers = mainCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookie = avgCookie;
    this.customersEachHour = customersEachHour;
    this.cookiesEachHour = cookiesEachHour;
    this.total = total ;
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Location.prototype.calcCustomersEachHour = function() {
            for (let i = 0; i < hours.length; i++) {
                this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));
                console.log(this);}

Location.prototype.calcCookiesEachHour = function() {
            for (let i = 0; i < hours.length; i++) {
                this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
                this.total += this.cookiesEachHour[i];
                console.log(this.cookiesEachHour);
                console.log(this);
            }}            
        }
let container = document.getElementById('parent')
        

Location.prototype.render = function() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

    let article = document.createElement('article');
    container.appendChild(article);

    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.locationName;

    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.locationName} is one of the location and is ${this.mainCustomers} minimum number of customer in it and its is ${this.mainCustomers} maxmum number of customer.`

    let ul = document.createElement('ul');
    article.appendChild(ul);
    for (let i =0; i < this.customersEachHour.lenght; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Number of customer: ${this.customersEachHour[i]}`;
    }
     for (let i = 0; i < this.cookiesEachHour.lenght; i++) {
         console.log(this.cookiesEachHour[i]);
        let li = document.createElement('li');
    }    
    for (let i = 0; i < hours.lengthl; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hours[i]}:${this.cookiesEachHour[i]} cookies`
    } 
    let totalLi = document.createElement('li');
    ul.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.total} Cookies` 

    let img = document.createElement('img');
    article.appendChild(img);

    img.setAttribute('src', `img/salmon.png`);
}


Location.prototype.tableRender = function() {

    let table = document.createElement('table');
    container.appendChild(table);
    console.log(container);

    let headRow = document.createElement('tr');
    table.appendChild(headRow);
    let th1 = document.createElement('th');
    headRow.appendChild(th1);
    th1.textContent = '';
    for (let i = 0; i < hours.length; i++) {
        let th2 = document.createElement('th');
        headRow.appendChild(th2);
        th2.textContent = hours[i];
    }





let dataRow = document.createElement('tr');
table.appendChild(dataRow);

let td1 = document.createElement('td');
dataRow.appendChild(td1);
td1.textContent = this.locationName;

}

let seattle = new Location('seattle', 23, 65, 6.5, [], []);
console.log(seattle);
seattle.render();
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.tableRender();

let tokyo = new Location('tokyo', 3, 24, 1.2, [], []);
console.log(tokyo);
tokyo.render();
tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.tableRender();

let dubai = new Location('dubai', 11, 38, 3.7, [], []);
console.log(dubai);
dubai.render();
dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.tableRender();

let paris = new Location('paris', 20, 38, 2.3, [], []);
console.log(paris);
paris.render();
paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.tableRender();

let lima = new Location('lima', 2, 16, 4.6, [], []);
console.log(paris);
lima.render();
lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.tableRender();

// const seattle = {
//     locationName: 'Seattle',
//     mainCustomers: 23,
//     maxCustomers: 65,
//     avgCookie: 6.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calcCustomersEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

//         }
//     },

//     calcCookiesEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
//             this.total += this.cookiesEachHour[i];
//         }
//     },

//     renderFunction: function () {
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
//         shopName.textContent = this.locationName;

//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
//             listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

//         }

//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }
// console.log(seattle);
// seattle.calcCustomersEachHour();
// seattle.calcCookiesEachHour();
// seattle.renderFunction();



// const tokyo = {
//     locationName: 'Tokyo',
//     mainCustomers: 3,
//     maxCustomers: 24,
//     avgCookie: 1.2,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calcCustomersEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

//         }
//     },

//     calcCookiesEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
//             this.total += this.cookiesEachHour[i];
//         }
//     },

//     renderFunction: function () {
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
//         shopName.textContent = this.locationName;

//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
//             listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

//         }

//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// tokyo.calcCustomersEachHour();
// tokyo.calcCookiesEachHour();
// tokyo.renderFunction();



// const dubai = {
//     locationName: 'Dubai',
//     mainCustomers: 11,
//     maxCustomers: 38,
//     avgCookie: 3.7,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calcCustomersEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

//         }
//     },

//     calcCookiesEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
//             this.total += this.cookiesEachHour[i];
//         }
//     },

//     renderFunction: function () {
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
//         shopName.textContent = this.locationName;

//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
//             listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

//         }

//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// dubai.calcCustomersEachHour();
// dubai.calcCookiesEachHour();
// dubai.renderFunction();



// const paris = {
//     locationName: 'Paris',
//     mainCustomers: 20,
//     maxCustomers: 38,
//     avgCookie: 2.3,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calcCustomersEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

//         }
//     },

//     calcCookiesEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
//             this.total += this.cookiesEachHour[i];
//         }
//     },

//     renderFunction: function () {
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
//         shopName.textContent = this.locationName;

//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
//             listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

//         }

//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// paris.calcCustomersEachHour();
// paris.calcCookiesEachHour();
// paris.renderFunction();


// const lima = {
//     locationName: 'Lima',
//     mainCustomers: 2,
//     maxCustomers: 16,
//     avgCookie: 4.6,
//     customersEachHour: [],
//     cookiesEachHour: [],
//     total: 0,

//     calcCustomersEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

//         }
//     },

//     calcCookiesEachHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
//             this.total += this.cookiesEachHour[i];
//         }
//     },

//     renderFunction: function () {
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
//         shopName.textContent = this.locationName;

//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
//             listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

//         }

//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`

//     }
// }

// lima.calcCustomersEachHour();
// lima.calcCookiesEachHour();
// lima.renderFunction();
