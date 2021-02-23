<template>
  <div class="w3_login">
    <h3>Admin Panel</h3>
    <div v-show="authentication" class="w3_login_module">
      <router-link :to="{name: 'AdminOrders'}">Admin Orders | </router-link>
      <router-link :to="{name: 'BannerActive'}">Banner | </router-link>
      <button class="btn-danger" v-on:click="logout">Logout</button>
      <div>
      <div id="formContent" class="form">
        <h1>Add Products</h1>
        <form>
          <div>
            <input type="text" ref="productName" placeholder="Enter Product Name">
          </div>
          <div>
            <input type="text" ref="productTitle" placeholder="Enter Product Title">
          </div>
          <div>
            <input type="text" ref="productMRP" placeholder="Enter Product MRP">
          </div>
          <div>
            <input type="text" ref="productPrice" placeholder="Enter Product Price">
          </div>
          <div>
            <select ref="productStockStatus" placeholder="Select Product Stock Status">
              <option value="In Stock">In Stock</option>
              <option value="Out Of Stock">Out Of Stock</option>
            </select>
          </div>
          <h2>Description</h2>
          <div>
            <textarea type="text" ref="productDescription" placeholder="Enter Product Description"></textarea>
          </div>
          <h2>Features and Details</h2>
          <div>
            <input type="text" ref="productFeatures" placeholder="Enter Product Features">
          </div>
            <h2>Product Information</h2>
            <div>
                <input type="text" ref="productBrand" placeholder="Enter Product Brand">
            </div>
            <div>
                <input type="text" ref="productManufacturer" placeholder="Enter Product Manufacturer">
            </div>
            <div>
                <input type="text" ref="productCountryOfOrigin" placeholder="Product Country Of Origin">
            </div>
            <h2>Category</h2>
            <div>
                <select ref="productCategory" placeholder="Select Product Category" v-model="productCategory">
                    <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                    <option value="Dairy and Bakery">Dairy and Bakery</option>
                    <option value="Staples">Staples</option>
                    <option value="Snacks and Branded Foods">Snacks and Branded Foods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Home Care">Home Care</option>
                    <option value="Baby Care">Baby Care</option>
                </select>
            </div>
            <h2>Sub Category</h2>
            <div>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-if="productCategory=='Fruits and Vegetables'" v-model="productSubCategory">
                  <option value="Fresh Fruits">Fresh Fruits</option>
                  <option value="Fresh Vegetables">Fresh Vegetables</option>
                  <option value="Herbs and Seasonings">Herbs and Seasonings</option>
                  <option value="Exotic Fruits and Vegetables">Exotic Fruits and Vegetables</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Dairy and Bakery'" v-model="productSubCategory">
                  <option value="Dairy">Dairy</option>
                  <option value="Toast and Khari">Toast and Khari</option>
                  <option value="Breads and Buns">Breads and Buns</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Staples'" v-model="productSubCategory">
                  <option value="Atta, Flours and Sooji">Atta, Flours and Sooji</option>
                  <option value="Dals and Pulses">Dals and Pulses</option>
                  <option value="Rice and Rice Products">Rice and Rice Products</option>
                  <option value="Edible Oils">Edible Oils</option>
                  <option value="Masalas and Spices">Masalas and Spices</option>
                  <option value="Salt, Sugar and Jaggery">Salt, Sugar and Jaggery</option>
                  <option value="Grains">Grains</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Snacks and Branded Foods'" v-model="productSubCategory">
                  <option value="Biscuits and Cookies">Biscuits and Cookies</option>
                  <option value="Noodles, Pasta and Vermicelli">Noodles, Pasta and Vermicelli</option>
                  <option value="Breakfast Cereals">Breakfast Cereals</option>
                  <option value="Snacks and Namkeen">Snacks and Namkeen</option>
                  <option value="Chocolate and Candies">Chocolate and Candies</option>
                  <option value="Ready to Cook and Eat">Ready to Cook and Eat</option>
                  <option value="Spreads, Sauces, Ketchup">Spreads, Sauces, Ketchup</option>
                  <option value="Pickles">Pickles</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Beverages'" v-model="productSubCategory">
                  <option value="Tea">Tea</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Fruit Juices">Fruit Juices</option>
                  <option value="Energy and Soft Drinks">Energy and Soft Drinks</option>
                  <option value="Health Drink and Supplement">Health Drink and Supplement</option>
                  <option value="Water">Water</option>
                  <option value="Soda and Flavoured Water">Soda and Flavoured Water</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Personal Care'" v-model="productSubCategory">
                  <option value="Hair Care">Hair Care</option>
                  <option value="Oral Care">Oral Care</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Bath and Hand Wash">Bath and Hand Wash</option>
                  <option value="Body Wash and Bathing Accessories">Body Wash and Bathing Accessories</option>
                  <option value="Feminine Hygiene">Feminine Hygiene</option>
                  <option value="Men's Grooming">Men's Grooming</option>
                  <option value="Dea and Fragrances">Dea and Fragrances</option>
                  <option value="Health and Wellness">Health and Wellness</option>
                  <option value="Covid Essentials">Covid Essentials</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Home Care'" v-model="productSubCategory">
                  <option value="Detergents">Detergents</option>
                  <option value="Dish Wash">Dish Wash</option>
                  <option value="All Purpose Cleaners">All Purpose Cleaners</option>
                  <option value="Freshners and Repellents">Freshners and Repellents</option>
                  <option value="Mops, Brushes and Scrubs">Mops, Brushes and Scrubs</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Disposables">Disposables</option>
                  <option value="Pooja Needs">Pooja Needs</option>
                  <option value="Shoe Care">Shoe Care</option>
                  <option value="Bathroom and Laundry Accessories">Bathroom and Laundry Accessories</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Furnishing">Furnishing</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Baby Care'" v-model="productSubCategory">
                  <option value="Baby Grooming">Baby Grooming</option>
                  <option value="Baby Bath and Hygiene">Baby Bath and Hygiene</option>
                  <option value="Diapers and Wipes">Diapers and Wipes</option>
                </select>
            </div>
            <div>
              <select ref="premiumProducts" placeholder="Select Premium Products Status">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
            <div>
              <select ref="specialOffers" placeholder="Select Special Offers Status">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
            <div>
              <select ref="seasonalSales" placeholder="Select Seasonal Sales Status">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
            <div v-if="arrayOfImageUrls.length<maxImageCount">
                <label>Choose Images for your product!</label><br>
                <div class="input-group"> <input type="file" id="imageFile" v-on:change="OnChangeFile">
                  <div class="spinner-grow text-muted" v-show="uploadStatus">.........Uploading</div>
                </div>
                <div v-if="imageUrlValidation">
                  <div class="alert alert-success">{{this.imageUrlMessage}}</div>
                </div>
                <div v-else>
                  <div class="alert alert-danger">{{this.imageUrlMessage}}</div>
                </div>
            </div>
          <div>
            <button class="primary-btn" @click.prevent="getFormValues()">Post!</button>
          </div>
        </form>
        <hr>
        <button class="primary-btn" @click="getEntireProducts()">Get Entire Products!</button>
        <button class="primary-btn" @click="getSpecialProducts('premiumProducts')">Get Premium Products!</button>
        <button class="primary-btn" @click="getSpecialProducts('specialOffers')">Get Special Offers Products!</button>
        <button class="primary-btn" @click="getSpecialProducts('seasonalSales')">Get Seasonal Sales Products!</button>
        <button class="primary-btn" @click="getHugeSavesProducts('productSavingPercentage','desc')">Get Huge Saves Products!</button>
        <hr>
        <select ref="productCategory" placeholder="Select Product Category" v-model="productCategory">
          <option value="Fruits and Vegetables">Fruits and Vegetables</option>
          <option value="Dairy and Bakery">Dairy and Bakery</option>
          <option value="Staples">Staples</option>
          <option value="Snacks and Branded Foods">Snacks and Branded Foods</option>
          <option value="Beverages">Beverages</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Home Care">Home Care</option>
          <option value="Baby Care">Baby Care</option>
        </select>
        <button class="primary-btn" @click="getCategoryProduct(productCategory)">Get Product Based On Category!</button>
        <button class="primary-btn" @click="filter('productCategory',productCategory,'desc','timestamp')">Newest Arrival</button>
        <button class="primary-btn" @click="filter('productCategory',productCategory,'desc','productPrice')">Price High To Low</button>
        <button class="primary-btn" @click="filter('productCategory',productCategory,'asc','productPrice')">Price Low To High</button>
        <hr>
        <div>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-if="productCategory=='Fruits and Vegetables'" v-model="productSubCategory">
                  <option value="Fresh Fruits">Fresh Fruits</option>
                  <option value="Fresh Vegetables">Fresh Vegetables</option>
                  <option value="Herbs and Seasonings">Herbs and Seasonings</option>
                  <option value="Exotic Fruits and Vegetables">Exotic Fruits and Vegetables</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Dairy and Bakery'" v-model="productSubCategory">
                  <option value="Dairy">Dairy</option>
                  <option value="Toast and Khari">Toast and Khari</option>
                  <option value="Breads and Buns">Breads and Buns</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Staples'" v-model="productSubCategory">
                  <option value="Atta, Flours and Sooji">Atta, Flours and Sooji</option>
                  <option value="Dals and Pulses">Dals and Pulses</option>
                  <option value="Rice and Rice Products">Rice and Rice Products</option>
                  <option value="Edible Oils">Edible Oils</option>
                  <option value="Masalas and Spices">Masalas and Spices</option>
                  <option value="Salt, Sugar and Jaggery">Salt, Sugar and Jaggery</option>
                  <option value="Grains">Grains</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Snacks and Branded Foods'" v-model="productSubCategory">
                  <option value="Biscuits and Cookies">Biscuits and Cookies</option>
                  <option value="Noodles, Pasta and Vermicelli">Noodles, Pasta and Vermicelli</option>
                  <option value="Breakfast Cereals">Breakfast Cereals</option>
                  <option value="Snacks and Namkeen">Snacks and Namkeen</option>
                  <option value="Chocolate and Candies">Chocolate and Candies</option>
                  <option value="Ready to Cook and Eat">Ready to Cook and Eat</option>
                  <option value="Spreads, Sauces, Ketchup">Spreads, Sauces, Ketchup</option>
                  <option value="Pickles">Pickles</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Beverages'" v-model="productSubCategory">
                  <option value="Tea">Tea</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Fruit Juices">Fruit Juices</option>
                  <option value="Energy and Soft Drinks">Energy and Soft Drinks</option>
                  <option value="Health Drink and Supplement">Health Drink and Supplement</option>
                  <option value="Water">Water</option>
                  <option value="Soda and Flavoured Water">Soda and Flavoured Water</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Personal Care'" v-model="productSubCategory">
                  <option value="Hair Care">Hair Care</option>
                  <option value="Oral Care">Oral Care</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Bath and Hand Wash">Bath and Hand Wash</option>
                  <option value="Body Wash and Bathing Accessories">Body Wash and Bathing Accessories</option>
                  <option value="Feminine Hygiene">Feminine Hygiene</option>
                  <option value="Men's Grooming">Men's Grooming</option>
                  <option value="Dea and Fragrances">Dea and Fragrances</option>
                  <option value="Health and Wellness">Health and Wellness</option>
                  <option value="Covid Essentials">Covid Essentials</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Home Care'" v-model="productSubCategory">
                  <option value="Detergents">Detergents</option>
                  <option value="Dish Wash">Dish Wash</option>
                  <option value="All Purpose Cleaners">All Purpose Cleaners</option>
                  <option value="Freshners and Repellents">Freshners and Repellents</option>
                  <option value="Mops, Brushes and Scrubs">Mops, Brushes and Scrubs</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Disposables">Disposables</option>
                  <option value="Pooja Needs">Pooja Needs</option>
                  <option value="Shoe Care">Shoe Care</option>
                  <option value="Bathroom and Laundry Accessories">Bathroom and Laundry Accessories</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Furnishing">Furnishing</option>
                </select>
                <select ref="productSubCategory" placeholder="Select Product Sub Category" v-else-if="productCategory=='Baby Care'" v-model="productSubCategory">
                  <option value="Baby Grooming">Baby Grooming</option>
                  <option value="Baby Bath and Hygiene">Baby Bath and Hygiene</option>
                  <option value="Diapers and Wipes">Diapers and Wipes</option>
                </select>
                <button class="primary-btn" @click="getSubCategoryProduct()">Get Product Based On Sub Category!</button>
                <button class="primary-btn" @click="filter('productSubCategory',productSubCategory,'desc','timestamp')">Newest Arrival</button>
                <button class="primary-btn" @click="filter('productSubCategory',productSubCategory,'desc','productPrice')">Price High To Low</button>
                <button class="primary-btn" @click="filter('productSubCategory',productSubCategory,'asc','productPrice')">Price Low To High</button>
            </div>
      </div>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <p class="message" v-if="message">{{message}}</p>
    <div>
        <label for="search">Search:</label>
        <input type="text" id="search" v-model="search" v-on:keyup="filteredList" placeholder="Search for a user">
    </div>
    <div>
      <div class="col-md-3"
        v-for="(product, index) in filteredList"
        v-bind:item="product"
        v-bind:index="index"
        v-bind:key="product.productId"
      >
          <div>
            <div>
              <div>
								<figure>
									<div>
										<div>
                      <img title=" " alt=" " :src="product.arrayOfImageUrls[0]" class="img-responsive"/>
                      <p>{{product.productName}}</p>
                      <h4>RS {{product.productPrice}} <span>RS {{product.productMRP}}</span></h4>
                      <p class="btn-success">% {{product.productSavingPercentage}}</p>
										</div>
                    <div>
                      <router-link class="nav-link" :to="{name: 'AdminProduct', params: {productId: product.productId}}">Update</router-link>
                      <button class="btn-danger" v-on:click="deleteProduct(product.productId)">Delete</button>
										</div>
									</div>
								</figure>
              </div>
            </div>  
          </div>
      </div>
    </div>
    </div>
    <div v-show="!authentication">
      <h1>Admin Portal</h1>
      <form @submit.prevent="submitForm">
        <label>Secret Name:</label>
        <input type="text" ref="secretname">
        <label>Secret Key:</label>        
        <input type="password" ref="secretpassword">
        <button type="submit" class="sbtn">Try In</button>
      </form>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
import firebase from 'firebase';
import "firebase/auth";
export default {
  name: 'PostComponent',
  data(){
    return {
      products: [],
      error: '',
      message:'',
      authentication:false, 
      name:'',
      password:'',
      productName:'', 
      productTitle:'',
      productMRP:'',
      productPrice:'',
      productStockStatus:'',
      productDescription:'',
      productFeatures:'',
      productBrand:'',
      productManufacturer:'',
      productCountryOfOrigin:'',
      productCategory:'',
      productSubCategory:'',
      imageUrl: '',
      imageUrlMessage: "Select an Image for uploading product!",
      imageUrlValidation: false,
      fileName: '',  
      fileSize: '',  
      fileType: '',
      uploadStatus: false,
      arrayOfImageUrls:[],
      maxImageCount:4,
      productSavingPercentage: '',
      search:'',
      premiumProducts: false,
      specialOffers: false,
      seasonalSales: false,
    }
  },
  computed:{
    filteredList() {
      if(this.search == '')
      {
        return this.products
      }
      else
      {
        return this.products.filter(product => {
          console.log(this.search.toLowerCase());
          return product.productName.toLowerCase().includes(this.search.toLowerCase())
        }) 
      }
    }
  },
  async created(){
    this.authentication=this.$store.state.authentication.status;
    try{
        var response = await PostService.getProduct();
        let arr=response.data
        this.products=await this.shuffle(arr)
      } catch(err){
        this.error=err.message;
    }
  },
  methods: {
    async shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    },
    async createProduct(){
      //Data in Json Form
      var data = {
        "productName":this.productName,
        "productTitle":this.productTitle,
        "productMRP":this.productMRP,
        "productPrice":this.productPrice,
        "productStockStatus":this.productStockStatus,
        "productDescription":this.productDescription,
        "productFeatures":this.productFeatures,
        "productBrand":this.productBrand,
        "productManufacturer":this.productManufacturer,
        "productCountryOfOrigin":this.productCountryOfOrigin,
        "productCategory":this.productCategory,
        "productSubCategory":this.productSubCategory,
        "arrayOfImageUrls":this.arrayOfImageUrls,
        "timestamp": new Date(),
        "productSavingPercentage": this.productSavingPercentage,
        "premiumProducts": this.premiumProducts,
        "specialOffers": this.specialOffers,
        "seasonalSales": this.seasonalSales,  
      }

      var response=await PostService.createProduct(data);
      this.message=response.data.message;
      this.error=response.data.error;
      document.querySelector('#imageFile').value ='';
      this.fileName = '';
      this.fileSize = '';  
      this.fileType = '';
      this.imageUrl= '';
      this.imageUrlMessage= "Select an Image for uploading product!";
      this.imageUrlValidation= false;
      this.fileName= '';
      this.fileSize= ''; 
      this.fileType= '';
      this.uploadStatus= false;
      this.arrayOfImageUrls=[];
      this.premiumProducts= false;
      this.specialOffers= false;
      this.seasonalSales= false;
      //Clear Text
      this.$refs.productName.value = ''
      this.$refs.productTitle.value=''
      this.$refs.productMRP.value=''
      this.$refs.productPrice.value=''
      this.$refs.productStockStatus.value=''
      this.$refs.productDescription.value=''
      this.$refs.productFeatures.value=''
      this.$refs.productBrand.value=''
      this.$refs.productManufacturer.value=''
      this.$refs.productCountryOfOrigin.value=''
      this.$refs.productCategory.value=''
      this.$refs.productSubCategory.value=''
      this.$refs.premiumProducts.value= ''
      this.$refs.specialOffers.value= ''
      this.$refs.seasonalSales.value= ''
    },
    getFormValues(){
      this.productName = this.$refs.productName.value
      this.productTitle = this.$refs.productTitle.value
      this.productMRP = this.$refs.productMRP.value
      this.productPrice = this.$refs.productPrice.value
      this.productStockStatus = this.$refs.productStockStatus.value
      this.productDescription = this.$refs.productDescription.value
      this.productFeatures = this.$refs.productFeatures.value
      this.productBrand = this.$refs.productBrand.value
      this.productManufacturer = this.$refs.productManufacturer.value
      this.productCountryOfOrigin = this.$refs.productCountryOfOrigin.value
      this.productCategory = this.$refs.productCategory.value
      
      this.productSavingPercentage=this.relDiff(this.productMRP,this.productPrice)
      this.premiumProducts= this.$refs.premiumProducts.value
      this.specialOffers= this.$refs.specialOffers.value
      this.seasonalSales= this.$refs.seasonalSales.value
      if(this.imageUrlValidation){
        this.createProduct()  
      }
      else{
        this.error="Complete the Image Uploading"
      }
    },
    async submitForm(){
      if(this.$refs.secretname.value=="tn40stores" && this.$refs.secretpassword.value=="tn40storesadmin"){
        var data={
            'status': true,
        }
        this.$store.commit('setAuthentication',{data});
        this.authentication=true;
      }
    },
    async logout(){
      var data={
            'status': false,
        }
      this.$store.commit('setAuthentication',{data});
      this.authentication=false;
      this.$refs.secretname.value=''
      this.$refs.secretpassword.value=''
    },
    async OnChangeFile(event){
            const store = firebase.storage();
            var fileData =  event.target.files[0];
            this.fileName = fileData.name;  
            this.fileSize = fileData.size;  
            this.fileType = fileData.type;
            var File_Name = this.fileName;
            var File_Size = this.fileSize;
            var File_Type = this.fileType;
            var MB =  File_Size / 1024 / 1024;
            if(File_Type=="image/jpeg" || File_Type=="image/png"){
                if(MB < 5){
                    this.uploadStatus=true;
                    var storageRef = store.ref('photos/' + File_Name);
                    await storageRef.put(fileData)
                    .then(snapshot => {
                        return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
                    })
                    .then(downloadURL => {
                        this.imageUrl = `${downloadURL}`;
                        this.uploadStatus=false;
                        this.arrayOfImageUrls.push(this.imageUrl);
                        this.imageUrlMessage="Image Uploaded Successfully";
                        this.imageUrlValidation=true;
                        //Successfully uploaded file and got download link
                        return downloadURL;
                    })
                    .catch(error => {
                        // Use to signal error if something goes wrong.
                        this.imageUrlMessage="Image has'nt uploaded successfully";
                        this.imageUrlValidation=false;
                        this.error=`${error}`;
                    });
                }else{
                    this.imageUrlMessage="File size exceed the 10mb limit";
                    this.imageUrlValidation=false;
                }
            }
            else{
                this.imageUrlMessage="File Format Must be of type PNG or JPEG";
                this.imageUrlValidation=false;
            }
        },
    async deleteProduct(productId){
      var data={
        "productId": productId,
      }
      var response = await PostService.deleteProduct(data);
      this.message=response.data.message;
      this.error=response.data.error;
    },
    relDiff(a, b) {
      var data = (a-b)/a * 100
      console.log(data)
      return Math.round(data);
    },
    async getEntireProducts(){
      try{
        var response = await PostService.getProduct();
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },

    async getCategoryProduct(category){
      var data = {
        'productCategory': category,
      }
      try{
        var response = await PostService.getCategoryProduct(data);
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },
    async getSubCategoryProduct(){
      var data = {
        'productSubCategory': this.$refs.productSubCategory.value,
      }
      try{
        var response = await PostService.getSubCategoryProduct(data);
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },
    async filter(categoryType,categoryValue,orderByType,orderByValue){
      var data = {
        'categoryType':categoryType,
        'categoryValue':categoryValue,
        'orderByType':orderByType,
        'orderByValue':orderByValue,
      }
      try{
        var response = await PostService.filter(data);
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },

    async getSpecialProducts(specialProductType){
      var data = {
        'specialProductType':specialProductType,
      }
      try{
        var response = await PostService.getSpecialProduct(data);
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },

    async getHugeSavesProducts(orderByValue,orderByType){
      var data = {
        'orderByType': orderByType,
        'orderByValue': orderByValue
      }
      try{
        var response = await PostService.getHugeSavesProducts(data);
        this.products=response.data
      } catch(err){
        this.error=err.message;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-top: 50px;
  }

  h1 {
    text-align: center;
  }
  .divSection{
    padding: 1em;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .divSection span{
    text-align: left;
    padding-left: 3em;
  }
  .divSection p{
    text-align: left;
    margin: 0;
    word-break: break-all;
  }
  .submitSection{
    padding-left: 50%;
  }
  .linktext {
    font-size: 13px;
  }
</style>

