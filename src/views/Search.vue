<template>
  <div class="w3_login">
    <p class="error" v-if="error">{{error}}</p>
    <p class="message" v-if="message">{{message}}</p>
    <div>
        <label for="search">Search:</label>
        <input type="text" id="search" v-model="search" v-on:keyup="filteredList" placeholder="Search for a product">
    </div>
    <div>
      <div class="col-md-4"
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
                      <img title=" " alt=" " :src="product.arrayOfImageUrls[0]" width="400" height="450"  class="img-responsive"/>
                      <p>{{product.productName}}</p>
                      <h4>RS {{product.productPrice}} <span>RS {{product.productMRP}}</span></h4>
                      <p class="btn-success">% {{product.productSavingPercentage}}</p>
										</div>
                    <div>
                      <a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</figure>
              </div>
            </div>  
          </div>
      </div>
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
      search:'',
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
    async addToCart(product){
		console.log('add to cart')
		if(this.$store.state.userDetails.userId!=''){
			try{
				var data={
					"productId": product.productId,
					"productName":product.productName,
					"productTitle":product.productTitle,
					"productMRP":product.productMRP,
					"productPrice":product.productPrice,
					"productStockStatus":product.productStockStatus,
					"productDescription":product.productDescription,
					"productFeatures":product.productFeatures,
					"productBrand":product.productBrand,
					"productManufacturer":product.productManufacturer,
					"productCountryOfOrigin":product.productCountryOfOrigin,
					"productCategory":product.productCategory,
					"productSubCategory":product.productSubCategory,
					"arrayOfImageUrls":product.arrayOfImageUrls,
					"timestamp": product.timestamp,
					"productSavingPercentage": product.productSavingPercentage,
					"userId": this.$store.state.userDetails.userId,
				}
				await PostService.addToCart(data);
				alert('added successfully');
			} catch(err){
				this.error=err.message;
			}
		}
		else{
			await firebase.auth().onAuthStateChanged(user => {
				if(user==null){
					this.$router.replace({ name: "Login" });
				}
				else{
					this.getUserDetails(user.uid, product);
				}	
			});
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

