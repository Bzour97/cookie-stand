'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let container = document.getElementById('container');
let shopSalmon = [];
let table = document.createElement('table');
container.appendChild(table);
let ShopSalCookie;

function ShopSalCookies(shopName, minCustomer, maxCustomer, avgCookies)
{
this.shopName = shopName;
this.minCustomer = minCustomer;
this.maxCustomer = maxCustomer;
this.avgCookies = avgCookies;
this.total = 0;
this.randCustomer = [];
this.avgCookiesPerH = [];
this.salesByHour = [];
this.salesByDay = 0;
//this.salesDailyByHour();
//ShopSalCookies.push(this);
}

ShopSalCookies.prototype.calcRandomCustPerH = function() 
{
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) 
    {
        min = Math.ceil(this.minCustomer);
        max = Math.floor(this.maxCustomer);
        let randCust = Math.floor(Math.random() * (max - min + 1) + min);
        this.randCustomer.push(randCust);
     }
}

ShopSalCookies.prototype.calcAvgCookiesPerH = function() 
{
    for (let i = 0; i < hours.length; i++) 
    {
        this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
        this.total = this.total + this.avgCookiesPerH[i];
    }
}

ShopSalCookies.prototype.render = function() 
{
    let h2EL = document.createElement('h2');
        h2EL.textContent = this.shopName;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) 
        {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
}

let seattle = new ShopSalCookies('Seattle', 23, 65, 6.3);
let tokyo = new ShopSalCookies('Tokyo', 3, 24, 1.2);
let dobai = new ShopSalCookies('Dubai', 11, 38, 3.7);
let paris = new ShopSalCookies('Paris', 20, 38, 2.3);
let lima = new ShopSalCookies('Lima', 2, 16, 4.6);

let listOfShop = [seattle, tokyo, dobai, paris, lima];

var rowHOfHeader = document.createElement('tr');
table.appendChild(rowHOfHeader);
var th = document.createElement('th');
rowHOfHeader.appendChild(th);
th.textContent = '-----';

for (var i = 0 ; i < hours.length ; i++) 
{
    var th = document.createElement('th');
    rowHOfHeader.appendChild(th);
    th.textContent = hours[i];
}

var th = document.createElement('th');
rowHOfHeader.appendChild(th);
th.textContent = 'Daily Location Total';

for (var indexOfShop = 0 ; indexOfShop < listOfShop.length ;  indexOfShop++ ) 
{
    var presentShop = listOfShop[indexOfShop];
    var rowOfShops = document.createElement('tr');
    table.appendChild(rowOfShops);
    var shopTd = document.createElement('td');
    rowOfShops.appendChild(shopTd);
    shopTd.textContent = presentShop.location;


   
    for (var cell = 0 ; cell < hours.length ; cell++ ) {
        var content = document.createElement('td');
        rowOfShops.appendChild(content);
        content.textContent = presentShop.salesByHour[cell];
    }

    shopTd = document.createElement('td');
    rowOfShops.appendChild(shopTd);
    shopTd.textContent = presentShop.salesByDay;
}

var rowOfFooter = document.createElement('tr');
table.appendChild(rowOfFooter);
var th = document.createElement('th');
rowOfFooter.appendChild(th);
th.textContent = 'Totals';

var sumSalmonTotalSales = 0;
for (var hourrr = 0; hourrr < hours.length; hourrr++) {
    var td = document.createElement('td');
    rowOfFooter.appendChild(td);
    var sum = 0;
    for (var shopCell = 0; shopCell < listOfShop.length; shopCell++) {
        var presentShop = listOfShop[shopCell];

        sum += presentShop.salesByHour[hourrr];
    }
 
    td.textContent = sum;
    sumSalmonTotalSales += sum;
}
var td = document.createElement('td');
rowOfFooter.appendChild(td);
td.textContent = sumSalmonTotalSales;




// let seattle = {
//     shopName: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies: 6.3,
//     randCustomer: [],
//     avgCookiesPerH: [],
//     total: 0,

//     calcRandomCustPerH: function () {
//         let min;
//         let max;
//         for (let i = 0; i < hours.length; i++) {
//             min = Math.ceil(this.minCustomer);
//             max = Math.floor(this.maxCustomer);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCustomer.push(randCust);
//         }
//     },

//     calcAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },

//     render: function () {
//         let h2EL = document.createElement('h2');
//         h2EL.textContent = this.shopName;
//         container.appendChild(h2EL);
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//         }
//         let totalEl = document.createElement('li');
//         ulEl.appendChild(totalEl);
//         totalEl.textContent = `Total ${this.total} cookies`;
//     }
// }

// seattle.calcRandomCustPerH();
// seattle.calcAvgCookiesPerH();
// seattle.render();

// let tokyo = {
//     shopName: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookies: 1.2,
//     randCustomer: [],
//     avgCookiesPerH: [],
//     total: 0,

//     calcRandomCustPerH: function () {
//         let min;
//         let max;
//         for (let i = 0; i < hours.length; i++) {
//             min = Math.ceil(this.minCustomer);
//             max = Math.floor(this.maxCustomer);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCustomer.push(randCust);
//         }
//     },

//     calcAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },

//     render: function () {
//         let h2EL = document.createElement('h2');
//         h2EL.textContent = this.shopName;
//         container.appendChild(h2EL);
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//         }
//         let totalEl = document.createElement('li');
//         ulEl.appendChild(totalEl);
//         totalEl.textContent = `Total ${this.total} cookies`;
//     }
// }

// tokyo.calcRandomCustPerH();
// tokyo.calcAvgCookiesPerH();
// tokyo.render();


// let dubai = {
//     shopName: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookies: 3.7,
//     randCustomer: [],
//     avgCookiesPerH: [],
//     total: 0,

//     calcRandomCustPerH: function () {
//         let min;
//         let max;
//         for (let i = 0; i < hours.length; i++) {
//             min = Math.ceil(this.minCustomer);
//             max = Math.floor(this.maxCustomer);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCustomer.push(randCust);
//         }
//     },
    
//     calcAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },

//     render: function () {
//         let h2EL = document.createElement('h2');
//         h2EL.textContent = this.shopName;
//         container.appendChild(h2EL);
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//         }
//         let totalEl = document.createElement('li');
//         ulEl.appendChild(totalEl);
//         totalEl.textContent = `Total ${this.total} cookies`;
//     }
// }

// dubai.calcRandomCustPerH();
// dubai.calcAvgCookiesPerH();
// dubai.render();


// let paris = {
//     shopName: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookies: 2.3,
//     randCustomer: [],
//     avgCookiesPerH: [],
//     total: 0,

//     calcRandomCustPerH: function () {
//         let min;
//         let max;
//         for (let i = 0; i < hours.length; i++) {
//             min = Math.ceil(this.minCustomer);
//             max = Math.floor(this.maxCustomer);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCustomer.push(randCust);
//         }
//     },

//     calcAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },

//     render: function () {
//         let h2EL = document.createElement('h2');
//         h2EL.textContent = this.shopName;
//         container.appendChild(h2EL);
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//         }
//         let totalEl = document.createElement('li');
//         ulEl.appendChild(totalEl);
//         totalEl.textContent = `Total ${this.total} cookies`;
//     }
// }

// paris.calcRandomCustPerH();
// paris.calcAvgCookiesPerH();
// paris.render();


// let lima = {
//     shopName: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookies: 4.6,
//     randCustomer: [],
//     avgCookiesPerH: [],
//     total: 0,

//     calcRandomCustPerH: function () {
//         let min;
//         let max;
//         for (let i = 0; i < hours.length; i++) {
//             min = Math.ceil(this.minCustomer);
//             max = Math.floor(this.maxCustomer);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCustomer.push(randCust);
//         }
//     },

//     calcAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCustomer[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },

//     render: function () {
//         let h2EL = document.createElement('h2');
//         h2EL.textContent = this.shopName;
//         container.appendChild(h2EL);
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//         }
//         let totalEl = document.createElement('li');
//         ulEl.appendChild(totalEl);
//         totalEl.textContent = `Total ${this.total} cookies`;
//     }
// }

// lima.calcRandomCustPerH();
// lima.calcAvgCookiesPerH();
// lima.render();
