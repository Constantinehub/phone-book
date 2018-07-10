let people = [
  {
    "id": 1,
    "name": "Andrew",
    "phone": "123456"
  },
  {
    "id": 2,
    "name": "Eric",
    "phone": "789192"
  },
  {
    "id": 3,
    "name": "John",
    "phone": "323421"
  }
];


let table = document.createElement('table');
let tr = document.createElement('tr');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let th = document.createElement('th');
let td = document.createElement('td');

// Первый способ
// let tableDom = document.body.appendChild(table).appendChild(thead).appendChild(tr).appendChild(th);
//
// for(i = 0; i < people.length; i++) {
//   tableDom.innerHTML = Object.getOwnPropertyNames(people[i]);
// }
//
// console.log(tableDom);


//Второй способ
for(let r = 0; r <= people.length; r++) {
  let row = table.insertRow(r);

  for(let d = 0; d < people.length; d++) {
    let data = row.insertCell(d);

    if(r === 0) {
      data.innerHTML = Object.getOwnPropertyNames(people[r]);
    }
  }
}

document.body.appendChild(table).className = 'table';

//Тестовый способ
// let arr=[];
// let val
// for(let trow = 0; trow <= people.length; trow++) {
//   let row = table.insertRow(trow);
//
//   for(let key in people) {
//     if(trow === 0) {
//
//       // data.innerHTML = ;
//       arr.push(people[key]);
//
//     }
//   }
//
//   for(let tdata = 0; tdata < people.length; tdata++) {
//     let data = row.insertCell(tdata);
//   }
// }
// console.log(arr);
// document.body.appendChild(table).className = 'table';




// for(i = 0; i < people.length; i++) {
//
// }

// for(i = 0; i < people.length; i++){
//   name.innerHTML = people[i].name;
// }