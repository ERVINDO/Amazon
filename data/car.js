class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h , Trunk is open: ${this.isTrunkOpen}`);
  }

  go() {
    if(this.speed > 200){
      this.speed = 200;
    } else {
      this.speed += 5;
    }
  }

  brake() {
    if(this.speed < 0){
      this.speed = 0;
    } else {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if(this.speed === 0)
    {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
};

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed > 300) {
      this.speed = 300;
    } else {
      this.speed += this.acceleration;
    }
  };

  openTrunk() {
    this.isTrunkOpen = false;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
};

/*
const car = [
  {
    brand: 'Toyota',
    model: 'Corolla'
  },{
    brand: 'Tesla',
    model: 'model 3'
  }
].map((carDetails) => {
  return new Car(carDetails).displayInfo();
});
*/

const car1 = new Car(
  {
    brand: 'Toyota',
    model: 'Corolla'
  }
);
const car2 = new Car(
  {
    brand: 'Tesla',
    model: 'model 3'
  }
);
const car3 = new RaceCar(
  {
    brand: 'Mclaren',
    model: 'F1',
    acceleration: 20
  }
);
car1.go();
car1.go();
car1.go();
car1.brake();
car1.go();
car1.go();
car1.brake();
car1.openTrunk();

car2.brake();
car2.go();
car2.go();
car2.go();
car2.brake();
car2.brake();
car2.openTrunk();

car3.go();
car3.go();
car3.go();
car3.go();  
car3.go();
car3.go();
car3.go();

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
