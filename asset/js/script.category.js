// Categoria possui varios produtos
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }

    getCategorybyId(id) {
        return this.categories.find((category) => category.id === id)
    }

    updateCategory(id, name) {
        const category = this.getCategorybyId(id);
        category.name = name;
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId++;
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }

    getProductbyId(id) {
        return this.products.find((product) => product.id === id)
    }

    updateProduct(id, name, price, category) {
        const product = this.getProductbyId(id);
        product.name = name;
        product.price = price;
        product.category = category;
    }
}

const categoryList = new CategoryService()
const productList = new ProductService()

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;
    console.log(categoryName)
    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);

    clearFormFields()
    createSelectCategorys()
    displayCategoriesAndProducts()
}

function createProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = categoryList.categories[0];
    if (productPrice < 0) {
        alert("digite um preço válido!");
        document.getElementById("productPrice").value = '';
    } else {
        console.log(productList.products);

        const productCategory = document.getElementById("productCategory").value;
        const category = categoryList.categories.find((category) =>
            category.id == productCategory
        )
        productList.addProduct(productName, productPrice, category);

        clearFormFields()
        displayCategoriesAndProducts()
    }
}

function clearFormFields() {
    document.getElementById("categoryName").value = '';
    document.getElementById("productName").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productCategory").value = '';
}

function createSelectCategorys() {
    let content = ''
    categoryList.categories.forEach((category) => {
        content += `
        <option value="" selected disabled hidden>Selecione sua Categoria</option>
        <option value="${category.id}">${category.name}</option>`
    })
    document.getElementById("productCategory").innerHTML = content
    document.getElementById("productCategory").value = ''
}

function displayCategoriesAndProducts() {
    let content = '';

    categoryList.categories.forEach((category) => {
        content += `
        <li>
            <div class="categoriesList">
            <span><b>Categoria: </b>${category.name}</span>
            <div>
                <button onclick="editarCategoria(${category.id})" class="editButton"><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
                <button onclick="removerCategoria(${category.id})" class="deleteButton"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
            </div>
            </div>
            <ul class="productsListByCategory">`;
        category.products.forEach((product) => {
            content += `
            <li>
                <div class="categoriesList">
                <span><b>Produto: </b>${product.name} - <b> Preço: R$${product.price}</span>
                <div>
                    <button onclick="editarProduto(${product.id})" class="editButton"><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
                    <button onclick="removerProduto(${product.id})" class="deleteButton"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
                </div>
                </div>
            </li>`;
        });
        content += `</ul></li>`;

    });
    document.getElementById("categoriesList").innerHTML = content;
}

let aux = -1;

function removerCategoria(id) {
    
}

function editarCategoria(id) {
    const category = categoryList.getCategorybyId(id);
    document.getElementById('categoryName').value = category.name;
    document.getElementById('categoryName').focus();
    document.getElementById('createbutton').classList.add('hidden');
    document.getElementById('editbutton').classList.remove('hidden');
    aux = id;
}

function updateCategory() {
    const categoryName = document.getElementById("categoryName").value;
    categoryList.updateCategory(aux, categoryName);
    document.getElementById('createbutton').classList.remove('hidden');
    document.getElementById('editbutton').classList.add('hidden');
    aux = -1;
    createSelectCategorys()
    displayCategoriesAndProducts()
    clearFormFields()
}

function removerProduto(id) {

}

function editarProduto(id) {
    const product = productList.getProductbyId(id);
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productName').focus();
    document.getElementById('createbuttonP').classList.add('hidden');
    document.getElementById('editbuttonP').classList.remove('hidden');
    aux = id;
}

function updateProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;
    productList.updateProduct(aux, productName, productPrice, productCategory);
    document.getElementById('createbuttonP').classList.remove('hidden');
    document.getElementById('editbuttonP').classList.add('hidden');
    aux = -1;
    displayCategoriesAndProducts()
    clearFormFields()
}

