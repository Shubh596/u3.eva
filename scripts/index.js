//store the products array in localstorage as "products"

let list = JSON.parse(localStorage.getItem("products")) || [];

function AddProducts(t, d, p, i) {
  (this.type = t), (this.desc = d), (this.price = p), (this.image = i);

}

function myfunction(e){
    e.preventDefault();

    let form=document.getElementById("products");

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let a=new AddProducts(type,desc,price,image);
    

    list.push(a)
    console.log("list:",list)
    localStorage.setItem("products",JSON.stringify(list));
}