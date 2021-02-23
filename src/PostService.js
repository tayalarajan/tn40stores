import axios from 'axios';

const url = 'https://tn40stores.herokuapp.com/';

class PostService{
    //Create Product
    static createProduct(data){
        return axios.post(url+'createProduct/',data);
    }

    //Get Entire Product List
    static getProduct(){
        return axios.get(url+'getProduct/');
    }

    //getLimitedProduct
    static getLimitedProduct(){
        return axios.get(url+'getLimitedProduct/');
    }

    static deleteProduct(data){
        return axios.post(url+'deleteProduct/',data);
    }

    static updateIndividualProduct(data){
        return axios.post(url+'updateIndividualProduct/',data);
    }

    static getIndividualProduct(data){
        return axios.post(url+'getIndividualProduct/',data);
    }

    static getCategoryProduct(data){
        return axios.post(url+'getCategoryProduct/',data);
    }

    static getSubCategoryProduct(data){
        return axios.post(url+'getSubCategoryProduct/',data);
    }

    static filter(data){
        return axios.post(url+'filter/',data);
    }

    static getSpecialProduct(data){
        return axios.post(url+'getSpecialProduct/',data);
    }

    static getHugeSavesProducts(data){
        return axios.post(url+'getHugeSavesProducts/',data);
    }

    static bannerActive(data){
        return axios.post(url+'bannerActive/',data);
    }

    static getBannerActive(data){
        return axios.post(url+'getBannerActive/',data);
    }

    //User Account
    static userAccount(data, id){
        return axios.post(url+'userAccount/'+id,data);
    }


    //Get User Account Info
    static userAccountInfo(id){
        return axios.get(url+'userAccountInfo/'+id);
    }

    //addToCart
    static addToCart(data){
        return axios.post(url+'addToCart/',data);
    }

    //get Cart
    static getCart(data){
        return axios.post(url+'getCart/',data);
    }

    //delete Cart
    static deleteFromCart(data){
        return axios.post(url+'deleteFromCart/',data);
    }

    //Place the Order
    static placeTheOrder(data){
        return axios.post(url+'placeTheOrder/',data);
    }

    //Place the Order
    static getUsersOrders(data){
        return axios.post(url+'getUsersOrders/',data);
    }

    //Get All Orders
    static getAllOrders(data){
        return axios.post(url+'getAllOrders/',data);
    }

    //Order Delivered
    static orderDelivered(data){
        return axios.post(url+'orderDelivered/',data);
    }
}

export default PostService;
