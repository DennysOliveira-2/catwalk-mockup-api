import { Schema, model } from 'mongoose';

interface Location {
    street: string,
    number: number,
    district: string,
    zip: string,
    country: string,
    city: string,
    state: string
};

export interface SupermarketListing {
    name: string,
    mainImage: string,
    additionalImages?: string[],
    location: Location,
    description: string,
    phone: string
};

const SupermarketSchema = new Schema<SupermarketListing>({
    name: { type: String, required: true },
    mainImage: { type: String, required: true },
    additionalImages: [{ type: String }],
    location: {
        street: String,
        number: Number,
        district: String,
        zip: String,
        country: String,
        city: String,
        state: String
    },
    description: String,
    phone: String
}, { timestamps: true });

export const SupermarketModel = model<SupermarketListing>('Supermarket', SupermarketSchema);
