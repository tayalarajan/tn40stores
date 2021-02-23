<template>
  <div class="w3_login">
    <h3>Admin Panel</h3>
    <div class="w3_login_module">
      <div>
      <div id="formContent" class="form" v-show="authentication">
        <router-link :to="{name: 'Admin'}">Admin</router-link>
        <h1>Add Active Banner</h1>
        <form>
          <div>
            <input type="text" v-model="bannerTitle" placeholder="Enter Banner Title">
          </div>
          <div>
            <input type="text" v-model="bannerDescription" placeholder="Enter Banner Description">
          </div>
          <div>
            <input type="text" v-model="bannerButtonName" placeholder="Enter Banner Button Name">
          </div>
          <div>
            <input type="text" v-model="bannerButtonLink" placeholder="Enter Banner Button Link">
          </div>
            <h2>Banner Name</h2>
            <div>
                <select placeholder="Select Product Category" v-model="bannerName">
                    <option value="Banner1">Banner 1</option>
                    <option value="Banner2">Banner 2</option>
                    <option value="Banner3">Banner 3</option>
                    <option value="Banner4">Banner 4</option>
                    <option value="Banner5">Banner 5</option>
                </select>
            </div>
          <div>
          <div>
                <label>Choose Images for your Banner With Correct Size!</label><br>
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
            <button class="primary-btn" @click.prevent="createProduct()">Upload!</button>
          </div>
        </form>
      </div>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <p class="message" v-if="message">{{message}}</p>
    </div>
    
  </div>
</template>

<script>
import PostService from '../PostService';
import firebase from 'firebase';
import "firebase/auth";
export default {
  name: 'BannerActive',
  data(){
    return {
      error: '',
      message:'',
      bannerTitle: '',
      bannerDescription: '',
      bannerButtonName: '',
      bannerButtonLink: '',
      bannerImageUrl: '',
      bannerName: '',
      imageUrl: '',
      imageUrlMessage: "Select an Image for uploading product!",
      imageUrlValidation: false,
      fileName: '',  
      fileSize: '',  
      fileType: '',
      uploadStatus: false,
      authentication: false,
    }
  },
  async created(){
    this.authentication=this.$store.state.authentication.status;
  },
  methods: {
    async createProduct(){
      //Data in Json Form
      var data = {
        'bannerTitle': this.bannerTitle,
        'bannerDescription': this.bannerDescription,
        'bannerButtonName': this.bannerButtonName,
        'bannerButtonLink': this.bannerButtonLink,
        'bannerImageUrl': this.bannerImageUrl,
        'bannerName': this.bannerName,
        'timestamp': new Date(),
      }

      var response=await PostService.bannerActive(data);
      this.message=response.data.message;
      this.error=response.data.error;
      document.querySelector('#imageFile').value ='';
      this.bannerTitle= '';
      this.bannerDescription= '';
      this.bannerButtonName= '';
      this.bannerButtonLink= '';
      this.bannerImageUrl= '';
      this.bannerName= '';
      this.imageUrl= '';
      this.imageUrlMessage= "Select an Image for uploading product!";
      this.imageUrlValidation= false;
      this.fileName= '';  
      this.fileSize= '';  
      this.fileType= '';
      this.uploadStatus= false;
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
                        this.bannerImageUrl=this.imageUrl;
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

