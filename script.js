let imageURL = ''; 
const placeHolder= document.getElementById('holder');
const alertBox = document.getElementById('alertBox');
let productID;
let str="";
const handleOnFetch=()=>{
  const productCode=document.querySelector('.productID').value;
  console.log(!productCode)
  if(!productCode){
    alertBox.classList.remove('d-none');
  }else{
    productID=productCode;
    imageURL=`https://cdn0.woolworths.media/content/wowproductimages/medium/${productID}.jpg`;
    fetch(imageURL)
    .then(data=>{
      let productUrl = data.url;
      displayImage(productUrl,productID);
    })
  }
}
const displayImage=(url,productCode)=>{
  const getTheBox = document.getElementById('holderCard');
  const getLink = document.querySelector('#urlbar');
  if(getTheBox){
    const newUrl= `https://cdn0.woolworths.media/content/wowproductimages/medium/${productCode}.jpg`;
    getLink.setAttribute('src',newUrl);
  }else{
    str+=` <div class="card" id="holderCard" style="width: 18rem;">
    <h1 class=" text-center midOne mt-2">
      <i class="fa-solid fa-magnifying-glass text-success"></i>
    </h1>
    <sub class="text-center">Woolworths Image Finder</sub>
    <img src="${url}" class="card-img-top mt-5" id="urlbar" alt="...">
    <div class="card-body">
    <input type="text" class="form-control mb-2 productID" placeholder="Enter Product ID" required>
    <button class="btn btn-success w-100" onClick="handleOnFetch(this)"> Find Image</button>
    </div>
  </div>`
  placeHolder.innerHTML=str;
}

}
const hideAlert=()=>{
  alertBox.classList.add('d-none');
}