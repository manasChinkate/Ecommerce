import axios from "axios";

const url = "https://fakestoreapi.com"


export default   async function getProducts(){
   
    return  await axios.get(`${url}/products` ,{
     
    });
}
export  async function getEachProduct(id){
   
    return await axios.get(`https://fakestoreapi.com/products/${id}` ,{
     
    });
}