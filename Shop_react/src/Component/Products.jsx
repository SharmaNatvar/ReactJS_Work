import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    // const navigate = useNavigate();
    // const goToCard = () => {
    //     navigate("./Card")
    // };

    const [data,setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() =>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch ('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter (await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () =>{
                componentMounted = false;
            }
        }
        getProducts();
    },[]);

  const Loading = () => {
    return(
        <>
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>      
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>      
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>      
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>      
        </>
    );
  }

  const FilterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return(
        <>
            <div className='buttons d-flex justify-content-center mb-5 pd-5'>
                <button className='btn btn-outline-dark' onClick={()=>setFilter(data)}> All</button>
                <button className='btn btn-outline-dark ms-2' onClick={()=>FilterProduct("men's clothing")}>Men's Cloth</button>
                <button className='btn btn-outline-dark ms-2' onClick={()=>FilterProduct("women's clothing")}>Women's Cloth</button>
                <button className='btn btn-outline-dark ms-2' onClick={()=>FilterProduct("jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark ms-2' onClick={()=>FilterProduct("electronics")}>Electronic</button>
            </div>
            {filter.map((products)=>{

                return(
                    <>
                        <div className='col-md-3 mb-4'>
                            <div className='card h-100 text-center p-4' key={products.id}>
                            <img src={products.image} className='card-img-top' alt={products.title} height='250px'/>
                            <div className='card-body'>
                                <h5 className='card-title mb-0 '>{products.title.substring(0,12)}...</h5>
                                <p className='card-text lead fw-bold'>${products.price}</p>
                                <NavLink to={`/products/ ${products.id}`} className='btn btn-outline-dark' >Buy Now</NavLink>
                            </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
  }
  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Premium Products</h1>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading/> : <ShowProducts/> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products;