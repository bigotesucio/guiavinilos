export interface PriceTier {
    range: [number, number];
    price: number;
}

export interface PricingData {
    [key: string]: {
        [key:string]: PriceTier[];
    };
}
