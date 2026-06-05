import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

private products: { id: number; name: string; price: number; stock: number; category: string }[] = [];

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find((product) => product.id === id);
    }

    createProduct(createProductDto: { name: string; price: number; stock: number; category: string }) {
        const newProduct = {
            id: this.products.length + 1,
            ...createProductDto,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id: number, updateData: Partial<{ name: string; price: number; stock: number; category: string }>) {
        const product = this.products.find((p) => p.id === id); 
        if (!product) {
            return { message: 'Product not found' };
        }
        Object.assign(product, updateData);
        return product;
    }

    deleteProduct(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
        return { message: 'Product deleted successfully' };
    }

}
