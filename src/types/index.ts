export interface Engine {
    type: string;
    displacement?: number;
    horsepower?: number;
    torque?: number;
}

export interface Vehicle {
    brand: string;
    modelName: string;
    modelYear: number;
    engine: Engine;
    fuelCapacity?: number;
    mileage: number;
    weight?: number;
    topSpeed?: number;
    price: number;
    sellingPrice: number;
    showroomPrice?: number;
    owner: string;
    coverImage: string;
    images: string[];
}

export type requestOptionsType = {
    method: string;
    headers: {
        "Content-Type"?: string,
        Authorization?: string
    }
    body?: any
}