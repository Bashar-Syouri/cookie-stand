'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle = {
    locationName: 'Seattle',
    mainCustomers: 23,
    maxCustomers: 65,
    avgCookie: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

        }
    },

    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
            this.total += this.cookiesEachHour[i];
        }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        shopName.textContent = this.locationName;

        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }

        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`

    }
}
console.log(seattle);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.renderFunction();



const tokyo = {
    locationName: 'Tokyo',
    mainCustomers: 3,
    maxCustomers: 24,
    avgCookie: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

        }
    },

    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
            this.total += this.cookiesEachHour[i];
        }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        shopName.textContent = this.locationName;

        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }

        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`

    }
}

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.renderFunction();



const dubai = {
    locationName: 'Dubai',
    mainCustomers: 11,
    maxCustomers: 38,
    avgCookie: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

        }
    },

    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
            this.total += this.cookiesEachHour[i];
        }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        shopName.textContent = this.locationName;

        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }

        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`

    }
}

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.renderFunction();



const paris = {
    locationName: 'Paris',
    mainCustomers: 20,
    maxCustomers: 38,
    avgCookie: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

        }
    },

    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
            this.total += this.cookiesEachHour[i];
        }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        shopName.textContent = this.locationName;

        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }

        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`

    }
}

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.renderFunction();


const lima = {
    locationName: 'Lima',
    mainCustomers: 2,
    maxCustomers: 16,
    avgCookie: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.mainCustomers, this.maxCustomers));

        }
    },

    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookie));
            this.total += this.cookiesEachHour[i];
        }
    },

    renderFunction: function () {
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        shopName.textContent = this.locationName;

        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }

        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`

    }
}

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.renderFunction();
