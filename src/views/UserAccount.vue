<template>
    <div>
        <section id="form"><!--form-->
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form"><!--login form-->
                            <h2>Register</h2>
                            <div class="btn-danger" v-if="error">{{error.message}}</div>
                            <form @submit.prevent="submitForm">
                                <div class="form-group">
                                        <input type="text" class="fadeIn second" name="login" placeholder="First name" 
                                        v-model.trim="$v.firstname.$model" :class="{
                                            'is-invalid': $v.firstname.$error, 'is-valid': !$v.firstname.$invalid
                                        }">
                                        <div class="valid-feedback">
                                            Your first name is valid!
                                        </div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.firstname.required">First name is required</span>
                                            <span v-if="!$v.firstname.minLength">First name must have at least {{$v.firstname.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.firstname.maxLength">First name can have atmost {{$v.firstname.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                        <input type="text" class="fadeIn third" name="login" placeholder="Last Name"
                                        v-model.trim="$v.lastname.$model" :class="{
                                            'is-invalid': $v.lastname.$error, 'is-valid': !$v.lastname.$invalid
                                        }">
                                        <div class="valid-feedback">
                                            Your last name is valid!
                                        </div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.lastname.required">Last name is required</span>
                                            <span v-if="!$v.lastname.minLength">Last name must have at least {{$v.lastname.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.lastname.maxLength">Last name can have atmost {{$v.lastname.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                        <input type="text" class="fadeIn third" name="login" placeholder="Phone Number"
                                        v-model.trim="$v.phoneNumber.$model" :class="{
                                            'is-invalid': $v.phoneNumber.$error, 'is-valid': !$v.phoneNumber.$invalid
                                        }">
                                        <div class="valid-feedback">
                                            Your Phone Number is valid!
                                        </div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.phoneNumber.required">Phone Number is required</span>
                                            <span v-if="!$v.phoneNumber.minLength">Phone Number must have at least {{$v.phoneNumber.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.phoneNumber.maxLength">Phone Number can have atmost {{$v.phoneNumber.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <div class="form-group">
                                        <input type="text" class="fadeIn third" name="login" placeholder="Address"
                                        v-model.trim="$v.address.$model" :class="{
                                            'is-invalid': $v.address.$error, 'is-valid': !$v.address.$invalid
                                        }">
                                        <div class="valid-feedback">
                                            Your Address is valid!
                                        </div>
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.address.required">Address is required</span>
                                            <span v-if="!$v.address.minLength">Address must have at least {{$v.address.$params.minLength.min}} letters.</span>
                                            <span v-if="!$v.address.maxLength">Address can have atmost {{$v.address.$params.maxLength.max}} letters.</span>
                                        </div>
                                </div>
                                <button type="submit" class="sbtn"> Happy Shopping! {{ submitstatus }}</button>
                            </form>
                        </div><!--/login form-->
                    </div>
                </div>
            </div>
        </section><!--/form-->
    </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import PostService from '../PostService';
import firebase from 'firebase';
import "firebase/auth";
export default {
    name: 'UserAccount',
    data(){
        return {
            firstname: '',
            lastname: '',
            phoneNumber: '',
            submitstatus: null,
            error: '',
            id: '',
            address: '',
        }
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(20)
        },
        lastname: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(20)
        },
        phoneNumber: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(10),
        },
        address: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(100),
        },
    },
    mounted() {
        this.getUserId();
    },
    methods: {
        async register(){
          //Data in Json Form
          var data = {
              "firstname": this.firstname,
              "lastname": this.lastname,
              "userId": this.id,
              "phoneNumber": this.phoneNumber,
              "address": this.address,
            }
            await PostService.userAccount(data,this.id);
            this.$router.replace({ name: "Home" });
        },
        submitForm(){
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitstatus = "NOT YET"
            } else{
                this.submitstatus = "STARTED"
                this.register()
            }
        },
        async getUserId() {
            firebase.auth().onAuthStateChanged(user => {
                this.id = user.uid;
            });
        },
    }
};
</script>

