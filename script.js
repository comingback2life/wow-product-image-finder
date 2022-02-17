let productID=document.getElementsByName('productID')
const imageURL = 'https://cdn0.woolworths.media/content/wowproductimages/medium/757750.jpg';
const placeHolder= document.getElementById('holder');
let str="";
const handleOnFetch=()=>{
  fetch(imageURL)
  .then(data=>{
    let productUrl = data.url
    displayImage(productUrl)
  })

}
const displayImage=(url)=>{
  str+=` <div class="card" style="width: 18rem;">
  <h1 class=" text-center midOne">
    <i class="fa-solid fa-magnifying-glass text-success"></i>
  </h1>
  <sub class="text-center">Woolworths Image Finder</sub>
  <img src="${url}" class="card-img-top mt-5" alt="...">
  <div class="card-body">
  <input type="text" class="form-control mb-2" placeholder="Enter Product ID" required>
  <button class="btn btn-success w-100" onClick="handleOnFetch(this)"> Find Image</button>
  </div>
</div>`
placeHolder.innerHTML=str;
}
