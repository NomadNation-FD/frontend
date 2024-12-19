export class Offer {
    id: string;
    destination: string;
    description: string;
    price: number;
    images: string[];

    constructor(id: string, destination: string, description: string, price: number, images: string[]) {
        this.id = id;
        this.destination = destination;
        this.description = description;
        this.price = price;
        this.images = images;
    }
}