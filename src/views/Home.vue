<template>
  <div class="home">
	<section id="slider"><!--slider-->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="slider-carousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div class="carousel-inner">
							<div class="item active">
								<div class="col-sm-6" v-if="banner1.length!=0">
									<h1><span>TN40</span>STORES</h1>
									<h2>{{banner1[0].bannerTitle}}</h2>
									<p>{{banner1[0].bannerDescription}} </p>
									<a :href="banner1[0].bannerButtonLink" type="button" class="btn btn-default get">{{banner1[0].bannerButtonName}}</a>
								</div>
								<div class="col-sm-6" v-if="banner1.length!=0">
									<img :src="banner1[0].bannerImageUrl" class="girl img-responsive" alt="" />
									<img src="images/home/new.png"  class="pricing" alt="" />
								</div>
							</div>
							<div class="item"
								v-for="(banner, index) in banner1length"
								v-bind:item="banner"
								v-bind:index="index"
								v-bind:key="banner"
							>
								<div class="col-sm-6">
									<h1><span>TN40</span>STORES</h1>
									<h2>{{banner1[index+1].bannerTitle}}</h2>
									<p>{{banner1[index+1].bannerDescription}} </p>
									<a :href="banner1[index+1].bannerButtonLink" type="button" class="btn btn-default get">{{banner1[index+1].bannerButtonName}}</a>
								</div>
								<div class="col-sm-6">
									<img :src="banner1[index+1].bannerImageUrl" class="girl img-responsive" alt="" />
									<img src="images/home/new.png"  class="pricing" alt="" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</section><!--/slider-->
	
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Category</h2>
						<div class="panel-group category-products" id="accordian"><!--category-productsr-->
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Fruits and Vegetables">Fruits & Vegetables</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Dairy and Bakery">Dairy & Bakery</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Staples">Staples</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Snacks and Branded Foods">Snacks & Branded Foods</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Beverages">Beverages</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Personal Care">Personal Care</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Home Care">Home Care</a></h4>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><a href="/productCategory/Baby Care">Baby Care</a></h4>
								</div>
							</div>
						</div><!--/category-products-->

						<h2>Sub Category</h2>
						<div class="panel-group category-products" id="accordian"><!--sub-category-productsr-->
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#FruitsandVegetables">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Fruits and Vegetables
										</a>
									</h4>
								</div>
								<div id="FruitsandVegetables" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Fresh Fruits">Fresh Fruits </a></li>
											<li><a href="/productSubCategory/Fresh Vegetables">Fresh Vegetables </a></li>
											<li><a href="/productSubCategory/Herbs and Seasonings">Herbs & Seasonings </a></li>
											<li><a href="/productSubCategory/Exotic Fruits and Vegetables">Exotic Fruits & Vegetables</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#DairyBakery">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Dairy & Bakery
										</a>
									</h4>
								</div>
								<div id="DairyBakery" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Dairy">Dairy</a></li>
											<li><a href="/productSubCategory/Toast and Khari">Toast & Khari</a></li>
											<li><a href="/productSubCategory/Breads and Buns">Breads & Buns</a></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#Staples">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Staples
										</a>
									</h4>
								</div>
								<div id="Staples" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Atta, Flours and Sooji">Atta, Flours & Sooji</a></li>
											<li><a href="/productSubCategory/Dals and Pulses">Dals & Pulses</a></li>
											<li><a href="/productSubCategory/Rice and Rice Products">Rice & Rice Products</a></li>
											<li><a href="/productSubCategory/Edible Oils">Edible Oils</a></li>
											<li><a href="/productSubCategory/Masalas and Spices">Masalas & Spices</a></li>
											<li><a href="/productSubCategory/Salt, Sugar and Jaggery">Salt, Sugar & Jaggery</a></li>
											<li><a href="#">Soya Products, Wheat & Other</a></li>
											<li><a href="/productSubCategory/Grains">Grains</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#SnacksBrandedFoods">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Snacks & Branded Foods
										</a>
									</h4>
								</div>
								<div id="SnacksBrandedFoods" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Biscuits and Cookies">Biscuits & Cookies</a></li>
											<li><a href="/productSubCategory/Noodles, Pasta and Vermicelli">Noodles, Pasta, Vermicelli</a></li>
											<li><a href="/productSubCategory/Breakfast Cereals">Breakfast Cereals</a></li>
											<li><a href="/productSubCategory/Snacks and Namkeen">Snacks & Namkeen</a></li>
											<li><a href="/productSubCategory/Chocolate and Candies">Chocolate & Candies</a></li>
											<li><a href="/productSubCategory/Ready to Cook and Eat">Ready to Cook & Eat</a></li>
											<li><a href="/productSubCategory/Spreads, Sauces, Ketchup">Spreads, Sauces, Ketchup</a></li>
											<li><a href="/productSubCategory/Pickles">Pickles, Chutney</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#Beverages">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Beverages
										</a>
									</h4>
								</div>
								<div id="Beverages" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Tea">Tea</a></li>
											<li><a href="/productSubCategory/Coffee">Coffee</a></li>
											<li><a href="/productSubCategory/Fruit Juices">Fruit Juices</a></li>
											<li><a href="/productSubCategory/Energy and Soft Drinks">Energy & Soft Drinks</a></li>
											<li><a href="/productSubCategory/Health Drink and Supplement">Health Drink & Supplement</a></li>
											<li><a href="/productSubCategory/Water">Water</a></li>
											<li><a href="/productSubCategory/Soda and Flavoured Water">Soda & Flavoured Water</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#PersonalCare">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Personal Care
										</a>
									</h4>
								</div>
								<div id="PersonalCare" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Hair Care">Hair Care</a></li>
											<li><a href="/productSubCategory/Oral Care">Oral Care</a></li>
											<li><a href="/productSubCategory/Skin Care">Skin Care</a></li>
											<li><a href="/productSubCategory/Bath and Hand Wash">Bath & Hand Wash</a></li>
											<li><a href="/productSubCategory/Body Wash and Bathing Accessories">Body Wash & Bathing Accessories</a></li>
											<li><a href="/productSubCategory/Feminine Hygiene">Feminine Hygiene</a></li>
											<li><a href="/productSubCategory/Men's Grooming">Men's Grooming</a></li>
											<li><a href="/productSubCategory/Dea and Fragrances">Deo & Fragrances</a></li>
											<li><a href="/productSubCategory/Health and Wellness">Health & Wellness</a></li>
											<li><a href="/productSubCategory/Covid Essentials">Covid Essentials</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#HomeCare">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Home Care
										</a>
									</h4>
								</div>
								<div id="HomeCare" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Detergents">Detergents</a></li>
											<li><a href="/productSubCategory/Dish Wash">Dishwash</a></li>
											<li><a href="/productSubCategory/All Purpose Cleaners">All Purpose Cleaners</a></li>
											<li><a href="/productSubCategory/Freshners and Repellents">Freshners & Repellents</a></li>
											<li><a href="/productSubCategory/Mops, Brushes and Scrubs">Maps , Brushes & Scrubs</a></li>
											<li><a href="/productSubCategory/Electrical">Electrical</a></li>
											<li><a href="/productSubCategory/Disposables">Disposables</a></li>
											<li><a href="/productSubCategory/Pooja Needs">Pooja Needs</a></li>
											<li><a href="/productSubCategory/Shoe Care">Shoe Care</a></li>
											<li><a href="/productSubCategory/Bathroom and Laundry Accessories">Bathroom & Laundry Accessories</a></li>
											<li><a href="/productSubCategory/Stationary">Stationary</a></li>
											<li><a href="/productSubCategory/Furnishing">Furnishing</a></li>
										</ul>
									</div>
								</div>
							</div>

							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#BabyCare">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
											Baby Care
										</a>
									</h4>
								</div>
								<div id="BabyCare" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li><a href="/productSubCategory/Baby Grooming">Baby Grooming</a></li>
											<li><a href="/productSubCategory/Baby Bath and Hygiene">Baby Bath & Hygiene</a></li>
											<li><a href="/productSubCategory/Diapers and Wipes">Diapers & Wipes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div><!--/sub-category-products-->
						
					
						
						
						<div class="shipping text-center"><!--shipping-->
							<img src="images/home/zarkadd1.png" width="275" height="500" alt="" />
							<a href="https://thezark.in/" type="button" class="btn btn-default get">Visit Now</a>
						</div><!--/shipping-->
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
						<h2 class="title text-center">Featured Products</h2>
						<div class="col-sm-4"
							v-for="(product, index) in products.slice(0,6)"
							v-bind:item="product"
							v-bind:index="index"
							v-bind:key="product.productId"
							v-on:click="gotoIndividualProduct(product.productId)"
						>
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img :src="products[index].arrayOfImageUrls[0]" width="100" height="180" alt="" />
											<h2>{{products[index].productTitle}}</h2>
											<h4>RS {{products[index].productPrice}} <span>RS {{products[index].productMRP}}</span></h4>
											<p class="btn-success">Save %{{products[index].productSavingPercentage}}</p>
											<a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{{products[index].productTitle}}</h2>
												<h4>RS {{products[index].productPrice}} <span>RS {{products[index].productMRP}}</span></h4>
												<p class="btn-success">Save %{{products[index].productSavingPercentage}}</p>
												<a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
										</div>
								</div>
							</div>
						</div>
						
						
					</div><!--features_items-->
					
					<div class="category-tab"><!--category-tab-->
						<div class="tab-content">
							<h2 class="title text-center">General Products</h2>
							<div class="tab-pane fade active in">
								<div class="col-sm-3"
									v-for="(product, index) in products.slice(6,10)"
									v-bind:item="product"
									v-bind:index="index"
									v-bind:key="product.productId"
									v-on:click="gotoIndividualProduct(product.productId)"
								>
									<div class="product-image-wrapper">
										<div class="single-products">
											<div class="productinfo text-center">
												<img :src="products[index+6].arrayOfImageUrls[0]" width="100" height="180" alt="" />
												<h2>{{products[index+6].productTitle}}</h2>
												<h4>RS {{products[index+6].productPrice}} <span>RS {{products[index+6].productMRP}}</span></h4>
												<p class="btn-success">Save %{{products[index+6].productSavingPercentage}}</p>
												<a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
											</div>		
										</div>
									</div>
								</div>
							</div>
							
							
						</div>
					</div><!--/category-tab-->
					
					<div class="recommended_items"><!--recommended_items-->
						<h2 class="title text-center">RECOMMENDED PRODUCTS</h2>
						
						<div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
								<div class="item active">	
									<div class="col-sm-4"
										v-for="(product, index) in products.slice(10,13)"
										v-bind:item="product"
										v-bind:index="index"
										v-bind:key="product.productId"
										v-on:click="gotoIndividualProduct(product.productId)"
									>
										<div class="product-image-wrapper">
											<div class="single-products">
												<div class="productinfo text-center">
													<img :src="products[index+10].arrayOfImageUrls[0]" width="100" height="180" alt="" />
													<h2>{{products[index+10].productTitle}}</h2>
													<h4>RS {{products[index+10].productPrice}} <span>RS {{products[index+10].productMRP}}</span></h4>
													<p class="btn-success">Save %{{products[index+10].productSavingPercentage}}</p>
													<a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">	
									<div class="col-sm-4"
										v-for="(product, index) in products.slice(13,16)"
										v-bind:item="product"
										v-bind:index="index"
										v-bind:key="product.productId"
										v-on:click="gotoIndividualProduct(product.productId)"
									>
										<div class="product-image-wrapper">
											<div class="single-products">
												<div class="productinfo text-center">
													<img :src="products[index+13].arrayOfImageUrls[0]" width="100" height="180" alt="" />
													<h2>{{products[index+13].productTitle}}</h2>
													<h4>RS {{products[index+13].productPrice}} <span>RS {{products[index+13].productMRP}}</span></h4>
													<p class="btn-success">Save %{{products[index+13].productSavingPercentage}}</p>
													<a v-on:click.stop="addToCart(product)" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>			
						</div>
					</div><!--/recommended_items-->
					
				</div>
			</div>
		</div>
	</section>
	
	<section id="slider"><!--slider-->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="slider-carousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div class="carousel-inner">
							<div class="item active">
								<div class="col-sm-6" v-if="banner2.length!=0">
									<h1><span>TN40</span>STORES</h1>
									<h2>{{banner2[0].bannerTitle}}</h2>
									<p>{{banner2[0].bannerDescription}} </p>
									<a :href="banner2[0].bannerButtonLink" type="button" class="btn btn-default get">{{banner2[0].bannerButtonName}}</a>
								</div>
								<div class="col-sm-6" v-if="banner2.length!=0">
									<img :src="banner2[0].bannerImageUrl" class="girl img-responsive" alt="" />
									<img src="images/home/new.png"  class="pricing" alt="" />
								</div>
							</div>
							<div class="item"
								v-for="(banner, index) in banner2length"
								v-bind:item="banner"
								v-bind:index="index"
								v-bind:key="banner"
							>
								<div class="col-sm-6">
									<h1><span>TN40</span>STORES</h1>
									<h2>{{banner2[index+1].bannerTitle}}</h2>
									<p>{{banner2[index+1].bannerDescription}} </p>
									<a :href="banner2[index+1].bannerButtonLink" type="button" class="btn btn-default get">{{banner2[index+1].bannerButtonName}}</a>
								</div>
								<div class="col-sm-6">
									<img :src="banner2[index+1].bannerImageUrl" class="girl img-responsive" alt="" />
									<img src="images/home/new.png"  class="pricing" alt="" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</section><!--/slider-->
  </div>
</template>

<script>
import PostService from '../PostService';
import firebase from 'firebase';
import "firebase/auth";
export default {
  name: 'Home',
  data(){
    return {
      products: [],
      error: '',
      message:'',
	  banner1: [],
	  banner1length: 0,
	  banner2: [],
	  banner2length: 0,
    }
  },
  async beforeCreate(){
    try{
        var response = await PostService.getLimitedProduct();
        let arr=response.data
        this.products=await this.shuffle(arr)
      } catch(err){
        this.error=err.message;
    }
	try{
		var data={
			'bannerName': 'Banner1'
		}
		var response1 = await PostService.getBannerActive(data);
		this.banner1=response1.data
		this.banner1length=this.banner1.length-1
      } catch(err){
        this.error=err.message;
	}
	try{
		var data2={
			'bannerName': 'Banner2'
		}
		var response2 = await PostService.getBannerActive(data2);
		this.banner2=response2.data
		this.banner2length=this.banner2.length-1
      } catch(err){
        this.error=err.message;
	}
  },
  methods:{
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
	async gotoIndividualProduct(productId){
		this.$router.replace({ name: "IndividualProduct",params:{'productId':productId}});
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
	async getUserDetails(userid, product){
        console.log(userid)
		var response = await PostService.userAccountInfo(userid);
		var data={
			"firstname":response.data.firstname,
			"lastname":response.data.lastname,
			"userId": response.data.userId,
			"address": response.data.address,
			"phoneNumber": response.data.phoneNumber,
		}
		this.$store.commit('setUserDetails',{data});
		this.addToCart(product);
    },
  }
}
</script>
