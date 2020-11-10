class Car {
     static getSpecs(car){
         return `maxSpeed: ${car._maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
     }
     constructor ({maxSpeed, price} = {}){
         this._maxSpeed = maxSpeed;
         this.speed = 0;
         this.isOn = false;
         this.distance = 0;
         this._price = price;
     }
     get price() {
         return this._price;
     }
     set price(value) {
         this._price = value;
     }
     turnOn() {if(!this.isOn){this.isOn = true}}
     turnOff() {if(this.isOn){
         this.isOn = false;
         this.speed = 0;
        }}
     accelerate(value) {
         this.speed += value;
         if (this.speed > this._maxSpeed) {
             this.speed = this._maxSpeed;
         }
     }
     decelerate(value) {
         this.speed -= value;
         if (this.speed < 0) {
            this.speed = 0;
         }
     }
     drive(hours) {
         if (this.isOn) {
             this.distance += this.speed * hours;
         }
     }
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
mustang.turnOn();
   mustang.accelerate(70);
//    mustang.decelerate(10);
console.log("mustang-1", mustang)
// mustang.accelerate(10);
// console.log("mustang-1", mustang)
mustang.turnOff();
console.log("mustang-2", mustang)
// mustang.turnOn();
// console.log("mustang-2", mustang)
// mustang.accelerate(11230);
// console.log("mustang-1", mustang)
// mustang.decelerate(2002)
// console.log("mustang-1", mustang)
// mustang.accelerate(50);
// mustang.drive(5);
// console.log("mustang-1", mustang)









   
   