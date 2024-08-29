// function test() {
//    console.log('object');
// }

// const a = 'null';

// a && test();


// const arr = [1, 2, 3];
// console.log(Object.prototype.toString.call(arr)); // "[object Array]"
// console.log(Object.getPrototypeOf(arr).constructor.name);

// const date = new Date();
// console.log(Object.prototype.toString.call(date)); // "[object Date]"

// const obj = { name: "John" };
// console.log(Object.prototype.toString.call(obj)); // "[object Object]"


function printPrototypeChain(obj) {
  let prototype = Object.getPrototypeOf(obj);
  console.log(obj);

  while (prototype !== null) {
    console.log(prototype);
    prototype = Object.getPrototypeOf(prototype);
  }
}

 // 创建一个原型对象
const animal = {
    eat: function() {
      console.log("Animal is eating");
    }
  };
  
  // 创建一个继承自原型对象的对象
  const dog = Object.create(animal);
  dog.bark = function() {
    console.log("Dog is barking");
  };
  console.log('第二个继承对象：：',Object.getPrototypeOf(dog).constructor.name)
  
  // 创建一个继承自 dog 对象的对象
  const puppy = Object.create(dog);
  puppy.play = function() {
    console.log("Puppy is playing");
  };
//   console.log(Object.getPrototypeOf(puppy));
//   console.log(Object.prototype.toString(puppy));
  console.log(printPrototypeChain(puppy))

//   puppy.play(); // "Puppy is playing"
//   puppy.bark(); // "Dog is barking"
//   puppy.eat(); // "Animal is eating"