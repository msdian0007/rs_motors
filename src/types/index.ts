interface Engine {
    type: string;
    displacement?: number;
    horsepower?: number;
    torque?: number;
}

interface Vehicle {
    name: string;
    brand: string;
    model: number;
    engine: Engine;
    fuelCapacity: number;
    mileage: number;
    weight?: number;
    topSpeed?: number;
    price: number;
    offerPrice:number;
    showroomPrice: number;
    owner: string;
    images: string[];
}