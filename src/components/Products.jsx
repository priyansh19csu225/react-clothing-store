import { useEffect , useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../axiosService";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort);
  const [products , setProducts] = useState([]);
  const [filteredProducts , setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
          try{
            const res = await publicRequest.get( cat? `/products?category=${cat}`: `/products`);
            // console.log(res.data);
            setProducts(res.data.product);
          }catch(error){

          }
    }
getProducts();
  },[cat]);

 useEffect(()=>{
  cat &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
 },[products,cat ,filters]);

 useEffect(()=>{
if(sort === "newest"){
  setFilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt));
}else if(sort === "asc"){
  setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price));
}else{
  setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price));
}
 },[sort])
  return (
    <Container>
      { cat ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) :  products.map((item) => (
        <Product item={item} key={item._id} />
      ))} 
    </Container>
  );
};

export default Products;