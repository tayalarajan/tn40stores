<template>
  <div class="home">
    <router-link :to="{name: 'Admin'}">Admin</router-link>
	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li class="btn btn-default check_out">All Orders</li>
				</ol>
			</div>
            <h1 class="btn-success">{{message}}</h1>
            <h1 class="btn-danger">{{error}}</h1>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<tbody
                        v-for="(order, index) in orders"
						v-bind:item="order"
						v-bind:index="index"
						v-bind:key="order.orderId"
                    >
                        <tr>
							<td>
								<h1>{{order.firstname}} {{order.lastname}}</h1>
							</td>
							<td class="cart_description">
								<h2>{{order.phoneNumber}}</h2>
							</td>
                            <td class="cart_price">
								<p>{{order.address}}</p>
							</td>
							<td class="cart_price">
								<p>{{order.timestamp}}</p>
							</td>
                            <td class="cart_price">
								<button class="btn btn-default check_out" v-on:click="delivered(order)">Delivered</button>
							</td>
						</tr>
						<tr
                            v-for="(product, index) in order.arrayOfProducts"
							v-bind:item="product"
							v-bind:index="index"
							v-bind:key="product.productId"
                        >
							<td class="cart_product">
								<a href=""><img :src="product.arrayOfImageUrls" alt="" width="100" height="100"></a>
							</td>
							<td class="cart_description">
								<h4><a href="">{{product.productTitle}}</a></h4>
								<p>Product ID: {{product.productId}}</p>
							</td>
							<td class="cart_price">
								<p style="text-decoration:line-through;">{{product.productMRP}}</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
                                    <a class="cart_quantity_up"> QTY </a>
									<input class="cart_quantity_input" type="text" v-model="order.arrayOfQuantity[index]" v-on:change="onChange()"  size="3">
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">Rs {{product.productPrice}}</p>
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
								<h3 style="text-decoration:line-through;">Rs{{order.MRPtotal}}</h3>
							</td>
                            <td>
								<h1 class="btn-success">Total RS{{order.total}}</h1>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section> <!--/#cart_items-->
  </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'AdminOrders',
  data(){
    return {
      orders: [],
      message: '',
      error: '',
    }
  },
  async beforeCreate(){
	if(this.$store.state.authentication.status){
        try{
			var data={
				"dummy": "dummy",
			}
            var response = await PostService.getAllOrders(data);
            this.orders=response.data
            console.log(this.orders);
		} catch(err){
			this.error=err.message;
        }
    }
  },
    methods:{
        async delivered(order){
            try{
                var response = await PostService.orderDelivered(order);
                this.message=response.data.message;
                this.error=response.data.error;
            } catch(err){
                this.error=err.message;
            }
        },
    },
}
</script>
