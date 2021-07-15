import axios from 'axios';

const urlBaseApi = 'http://192.168.1.74/api-produto/';
const urlListApi = 'list-products/';

export default {
    getAllProducts: (callback) => {
        const urlProducts = urlBaseApi + urlListApi;

        axios
            .get(urlProducts)
            .then((products) => {
                if (callback) {
                    callback(products.data.dados);
                    console.log(products.data.dados)
                }
            }).catch(error => {
                console.log(error)
            })
    }
}