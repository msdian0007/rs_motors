export interface Engine {
    type: string;
    displacement?: number;
    horsepower?: number;
    torque?: number;
}

export interface Vehicle {
    _id?: string;
    brand: string;
    modelName: string;
    modelYear: number;
    bsStage?: string;
    engine: Engine;
    fuelCapacity?: number;
    mileage: number;
    weight?: number;
    topSpeed?: number;
    price: number;
    sellingPrice: number;
    showroomPrice?: number;
    owner: string;
    isSold?: boolean;
    coverImage: string;
    images: string[];
}

export interface VehicleResponse {
    status: string;
    data: Vehicle[];
}

export interface newStock {
    _id: string;
    brand: string;
    modelName: string;
    coverImage: string;
};

export interface newStockResponse {
    status: string;
    data: newStock[];
}


export type requestOptionsType = {
    method: string;
    headers: {
        "Content-Type"?: string,
        Authorization?: string
    }
    body?: any
}


export interface mailOptions {
    from: string | undefined;
    to: string | undefined;
    subject?: string;
    html?: string;
}

export interface mailData {
    name: string;
    phoneNumber: number;
    productLink: string;
    cred?: mailOptions;
}

export interface User {
    name: string;
    phoneNumber: number;
    email?: string;
    password?: string;
}

export interface paginationParams {
    page: number;
    limit: number;
}