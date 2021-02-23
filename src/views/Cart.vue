<template>
  <div class="home">
	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li class="btn btn-default check_out">Shopping Cart</li>
				</ol>
			</div>
			<h1 class="btn-danger">{{error}}</h1>
            <h1 class="btn-success">{{message}}</h1>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<tbody>
						<tr
                            v-for="(product, index) in products"
							v-bind:item="product"
							v-bind:index="index"
							v-bind:key="product.productId"
                        >
							<td class="cart_product" >
								<a v-on:click="gotoIndividualProduct(product.productId)"><img :src="product.arrayOfImageUrls" width="100" height="100" alt=""></a>
							</td>
							<td class="cart_description">
								<h4><a v-on:click="gotoIndividualProduct(product.productId)">{{product.productTitle}}</a></h4>
								<p>Product ID: {{product.productId}}</p>
							</td>
							<td class="cart_price">
								<p style="text-decoration:line-through;">{{product.productMRP}}</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
                                    <a class="cart_quantity_up"> QTY </a>
									<input class="cart_quantity_input" type="text" v-model="quantity[index]" v-on:change="onChange()"  size="3">
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">Rs {{product.productPrice}}</p>
							</td>
                            <td>
								<p class="btn-success">Save %{{product.productSavingPercentage}}</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" v-on:click="deleteFromCart(product.productId)"><i class="fa fa-times"></i></a>
							</td>
						</tr>
						<tr>
							<td>
								<p>                        </p>
							</td>
							<td class="cart_description">
								<h4>                  </h4>
								<p>                   </p>
							</td>
							<td class="cart_price">
								<p>                   </p>
							</td>
							<td class="cart_total">
								<h3 style="text-decoration:line-through;">Rs{{this.MRPtotal}}</h3>
							</td>
                            <td>
								<h1 class="btn-success">Total RS{{this.total}}</h1>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section> <!--/#cart_items-->

	<section id="do_action">
		<div class="container">
			<div class="heading">
				<h3>Get Your Products</h3>
				<h1 class="btn-danger">{{ordererror}}</h1>
                <h1 class="btn-success">{{ordermessage}}</h1>
			</div>
			<div class="row">
				<div class="col-sm-6">
					
				</div>
				<div class="col-sm-6">
					<div class="total_area">
						<ul>
							<li>Cart Sub Total <span>RS {{this.total}}</span></li>
							<li>Eco Tax <span>RS 0</span></li>
							<li>Delivery Cost <span>Free</span></li>
							<li>Cart Total <span>RS {{this.total}}</span></li>
						</ul>
							<h1 class="btn btn-default check_out" v-on:click="checkOut()">Buy Now</h1>
					</div>
				</div>
			</div>
		</div>
	</section><!--/#do_action-->
  </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'Cart',
  data(){
    return {
      products: [],
      quantity:[],
      error: '',
	  message:'',
	  ordererror: '',
      ordermessage:'',
	  total: 0,
	  MRPtotal: 0,
    }
  },
  async beforeCreate(){
	if(this.$store.state.userDetails.userId!=''){
        try{
			var data={
				"userId": this.$store.state.userDetails.userId,
			}
            var response = await PostService.getCart(data);
            this.products=response.data
		} catch(err){
			this.error=err.message;
        }
        for (let i=0; i<this.products.length; ++i) {
			this.quantity[i] = 1;
			this.total=this.total+parseInt(this.products[i].productPrice);
			this.MRPtotal=this.MRPtotal+parseInt(this.products[i].productMRP);
		}
	}
	else{
		this.$router.replace({ name: "Login" });
	}
  },
  methods:{
      async deleteFromCart(productId){
        if(this.$store.state.userDetails.userId!=''){
            try{
                var dataToDelete={
                    "userId": this.$store.state.userDetails.userId,
                    "productId": productId,
                }
                var response1 = await PostService.deleteFromCart(dataToDelete);
                this.message=response1.data.message;
                this.error=response1.data.error;
            } catch(err){
                this.error=err.message;
            }
            try{
                var data={
                    "userId": this.$store.state.userDetails.userId,
                }
                var response = await PostService.getCart(data);
                this.products=response.data
            } catch(err){
                this.error=err.message;
			}
			this.total=0;
			this.MRPtotal=0;
            for (let i=0; i<this.products.length; ++i) {
				this.quantity[i] = 1;
				this.total=this.total+parseInt(this.products[i].productPrice);
				this.MRPtotal=this.MRPtotal+parseInt(this.products[i].productMRP);
			}
        }     
	},
	async onChange(){
		if(this.$store.state.userDetails.userId!=''){
			this.total=0;
			this.MRPtotal=0;
            for (let i=0; i<this.products.length; ++i) {
				this.total=this.total+(parseInt(this.products[i].productPrice)*this.quantity[i]);
				this.MRPtotal=this.MRPtotal+(parseInt(this.products[i].productMRP)*this.quantity[i]);
			}
			console.log(this.total);
        }
	},

	async checkOut(){
		if(this.$store.state.userDetails.userId!=''){
			var data={
				'arrayOfProducts': this.products,
				'arrayOfQuantity': this.quantity,
				'userId': this.$store.state.userDetails.userId,
				'firstname': this.$store.state.userDetails.firstname,
				'lastname': this.$store.state.userDetails.lastname,
				'address': this.$store.state.userDetails.address,
				'phoneNumber': this.$store.state.userDetails.phoneNumber,
				'timestamp': new Date(),
				'total': this.total,
				'MRPtotal': this.MRPtotal,
			}
			var response=await PostService.placeTheOrder(data);
			this.ordermessage=response.data.message
			this.ordererror=response.data.error
        }
	},
	async gotoIndividualProduct(productId){
		this.$router.replace({ name: "IndividualProduct",params:{'productId':productId}});
	},

  }
}
</script>
