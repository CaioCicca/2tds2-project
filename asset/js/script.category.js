// Categoria possui varios produtos
class Category {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category){
        const id = this.nextProductId++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService()
const productList = new ProductService()

function createCategory(){
    const categoryName = document.getElementById("categoryName").value;
    console.log(categoryName)
    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);

    clearFormFields()
}

function createProduct(){
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = categoryList.categories[0];
    if(productPrice < 0) {
        alert("digite um preço válido!");
        document.getElementById("productPrice").value = '';
    } else {
    productList.addProduct(productName, productPrice, productCategory);
    console.log(productList.products);
    
    clearFormFields()
    }
}

function clearFormFields(){
    document.getElementById("categoryName").value = '';
    document.getElementById("productName").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productCategory").value = '';
}