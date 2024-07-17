/* ----     PRODUCTS MOCK       ---- */
global.productsMock = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {"rate":3.9,"count":120}
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "woman's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {"rate":4.1,"count":259}
    },
]

global.categoriesMock = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
]

global.mensClothingCategoryMock = "men's clothing"

global.mensClothingProductMock = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {"rate":3.9,"count":120}
}

/* ----     PERSON STORE MOCK       ---- */
global.emptyPersonMock = {
    id: '',
    name: '',
    surname: '',
    lastName: '',
    dateBirth: '',
    image: '',
    data: {
        address: [],
        cards: [],
        credentialsToShow: {
            login: ''
        }
    }
}

global.firstPersonMock = {
    id: '1',
    name: 'Олег',
    surname: 'Разутчиков',
    lastName: 'Олегович',
    dateBirth: '16.05.1986',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlg5oh_-aZTbY88facOyXmgaKy03z3qaOfw&s',
    data: {
        address: [],
        cards: [],
        credentialsToShow: {
            login: '1'
        }
    }
}
