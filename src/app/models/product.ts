export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number, name, description = '', price = 0, imageUrl = 'https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/66700672_131722378089660_813523037635762485_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=c_oOsyZpuIoAX9EEXkr&oh=76d90fccc425346d700e00e07ab7990e&oe=5EB543EC') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
