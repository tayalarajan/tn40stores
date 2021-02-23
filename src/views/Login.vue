<template>
    <div>
        <section id="form"><!--form-->
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form"><!--login form-->
                            <h2>Login</h2>
                            <div class="btn-danger" v-if="error">{{error.message}}</div>
                            <form @submit.prevent="submitForm">
                                <div>
                                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" 
                                        v-model.trim="$v.email.$model" :class="{
                                                    'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid
                                                }"
                                    >
                                    <div class="valid-feedback">
                                        Your email is valid!
                                    </div>
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.email.required">Email is required.</span>
                                        <span v-if="!$v.email.isUnique">Email is invalid.</span>
                                    </div>
                                </div>

                                <div>
                                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"
                                        v-model.trim="$v.password.$model" :class="{
                                                    'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid
                                                }"
                                    >
                                    <div class="valid-feedback">
                                        Your password is valid!
                                    </div>
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.password.required">Password is required.</span>
                                        <span v-if="!$v.password.minLength">{{$v.password.$params.minLength.min}} characters minimum.</span>
                                    </div>
                                </div>

                                <button type="submit" class="sbtn"> Log In {{ submitstatus }}</button>
                            </form>
                        </div><!--/login form-->
                        <div id="formFooter">
                            <p>Not yet Registered? <router-link to="/register">Register</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--/form-->
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import firebase from 'firebase';
import "firebase/auth";
import PostService from '../PostService';
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
            submitstatus: null,
            error: '',
        }
    },
    validations: {
        email:{
            required,
            email,
            isUnique (value){
                if(value==='') return true

                //eslint-disable-next-line
                var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve(email_regex.test(value))
                    }, 350+Math.random()*300)
                })
            },
        },
        password:{
            required,
            minLength: minLength(8),
        },
    },
    methods: {
        login(){
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
                this.getUserDetails(data.user.uid)
            })
            .catch(error => {
            this.error = error;
            });
        },
        submitForm(){
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitstatus = "FAIL"
            } else{
                this.submitstatus = "SUCCESS"
                this.login()
            }
        },
        async getUserDetails(userid){
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
            this.$router.replace({ name: "Home" });
        }
    }
};
</script>

