import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProducts() {
        return [
            {
                id: 1,
                name: 'Laptop',
            },
            {
                id: 2,
                name: 'Mouse',
            },
        ];
    }
}
