const imageURL = 'https://cdn0.woolworths.media/content/wowproductimages/medium/757750.jpg';
const placeHolder= document.getElementById('holder');

let str="";
const handleOnFetch=()=>{
  const identity=document.querySelector('.productID').value
  console.log(identity)
  fetch(imageURL)
  .then(data=>{
    let productUrl = data.url
    displayImage(productUrl)
   
  })

}
const displayImage=(url)=>{
  const getTheBox = document.getElementById('holderCard');
  const getLink = document.querySelector('#urlbar');
 
  console.log(getTheBox)
  if(getTheBox){
    console.log(getLink.getAttribute('src'));
    //getTheBox.img.src="https://cdn0.woolworths.media/content/wowproductimages/medium/757751.jpg"
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
}
  placeHolder.innerHTML=str;
}

const idGetter = (abc)=>{
  console.log(`this is abc ${abc}`)
}