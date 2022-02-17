let productID="";
const imageURL = 'https://cdn0.woolworths.media/content/wowproductimages/medium/757750.jpg';
const placeHolder= document.getElementById('holder');
const fetchImage=()=>{
  fetch(imageURL)
  .then(data=>{
    let str="";
    str+=` <div class="card" style="width: 18rem;">
    <h1 class=" text-center midOne">
      <i class="fa-solid fa-magnifying-glass text-success"></i>
    </h1>
    <sub class="text-center">Woolworths Image Finder</sub>
    <img src="${data.url}" class="card-img-top mt-5" alt="...">
    <div class="card-body">
      <a href="#" class="btn btn-success w-100">Search</a>
    </div>
  </div>`
  })
  placeHolder.innerHTML=str;
}
const displayImage=(url)=>{
  console.log(url)
}
