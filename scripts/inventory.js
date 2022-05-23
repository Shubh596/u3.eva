let items = JSON.parse(localStorage.getItem("abb")) || [];



items.map(function(ele,index){
        var box=document.createElement("div")

        var Brand=document.createElement("p");
        Brand.textContent=ele.brand;

        var Name=document.createElement("p");
        Name.setAttribute("class", "name")
        Name.textContent=ele.name;

        var price=document.createElement("p");
        price.textContent = `Price: ${ele.price}`;
        price.style.fontWeight = "bold"
        price.style.color = "goldenrod"

        var Image=document.createElement("img");
        Image.src=ele.image;

        var removebtn=document.createElement("button");
        removebtn.textContent="remove";
        removebtn.setAttribute("remove_product");
        })