let imageURL = ''; 
const placeHolder= document.getElementById('holder');
const alertBox = document.getElementById('alertBox');
let productID;
let str="";
const hideAlert=()=>{
  alertBox.classList.add('d-none');
}
const handleOnFetch=()=>{
  const productCode=document.querySelector('.productID').value;
  if(!productCode || productCode===""){
    alertBox.classList.remove('d-none');
  }else{
    let generateZeros=""; //generates zeros to add at the beginnning of the product code
    if(productCode.length<6){
      const logProduct = 6-productCode.length;
      console.log(logProduct);
      for(let i =0;i<logProduct;i++){
        generateZeros+="0"
      }
    }

    productID=generateZeros+productCode;
    imageURL=`https://cdn0.woolworths.media/content/wowproductimages/medium/${productID}.jpg`;
    fetch(imageURL)
    .then(data=>{
      if(data.status===404){
        imageURL = "./404.png"
        displayImage(imageURL,undefined);
      }
      else{
        let productUrl = data.url;
        console.log(productUrl);
        displayImage(productUrl,productID);
      }
 
    })
   
    
  }
}
const displayImage=(url,productCode)=>{
  console.log("Am I being called ?")
  const getTheBox = document.getElementById('holderCard');
  const getLink = document.querySelector('#urlbar');
  if(getTheBox){
    if(productCode===undefined){
      getLink.setAttribute('src','./404.png');
    }else{
      const newUrl= `https://cdn0.woolworths.media/content/wowproductimages/medium/${productCode}.jpg`;
      getLink.setAttribute('src',newUrl);
    }
    
  }else{
    str+=` <div class="card" id="holderCard" style="width: 18rem;">
    <h1 class=" text-center midOne mt-2">
      <i class="fa-solid fa-magnifying-glass text-success"></i>
    </h1>
    <sub class="text-center">Woolworths Image Finder</sub>
    <p class="text-center  mt-2 d-none text-danger" id="alertBox">Please enter product id</p>
    <img src="${url}" class="card-img-top mt-5" id="urlbar" alt="...">
    <div class="card-body">
    <input type="text" class="form-control mb-2 productID" placeholder="Enter Product ID"  onClick = "hideAlert()" required>
    <button class="btn btn-success w-100" onClick="handleOnFetch(this)"> Find Image</button>
    </div>
  </div>`
  productID="";
  placeHolder.innerHTML=str;
}

}
