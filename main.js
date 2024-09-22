// const cars = ["BMW", "MERS", "PORCHE", "CHEVROLET", "RANGE ROVER", "MUSTANG", "BUGATTI", "DOCHE"]

// console.log(cars);

// cars.push("Gentra")

// console.log(cars);

// cars.unshift("Sportage")

// console.log(cars);

// console.log(cars.length);




let fruits = ["olma" , "banan" , "gilos" , "shaftoli"]

console.log(fruits);


alert(`Mevalar savatda : ${fruits.length} ta `)

let question = confirm('Siz savatdan mevalarni olishni xoxlaysizmi')

// console.log(question);

if(question == true) {
    fruits.pop()
    alert(`Mevalar savatda ${fruits.length} ta `)
    console.log(fruits);
}  else {
    alert(`Mevalar savatda: ${fruits.length} ta `)
    console.log(fruits);
}