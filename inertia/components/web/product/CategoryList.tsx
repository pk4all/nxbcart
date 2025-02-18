import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
interface Category {
    id: number;
    name: string;
    slug:string;
    icon:string;
    image:string;
  }

const CategoriesList = ({category,setCategory}:any) => {
        const [categories, setCategories] = useState<Category[]>([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            fetch("/api/categories?limit=6")
                .then((response) => response.json())
                .then((data) => {setCategories(data);}) 
                .catch((err) => console.error("Error fetching data:", err));
                setLoading(false);
        }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
     <>
        <ul className="nav nav-tabs tab-style-color-2 tab-style-color">
                <li key={'all'} className="nav-item">
                    <button onClick={()=>{setCategory(0)}} className={category==0?'active nav-link btn':`nav-link btn`} type="button">All</button>
                </li>
            {categories.map((cat) => (
                 <li key={cat?.slug} className="nav-item">
                    <button onClick={()=>{setCategory(cat?.id)}} className={cat?.id==category?'active nav-link btn':`nav-link btn`} type="button">{cat?.name}</button>
                </li>
            ))}
        </ul>
     </>
    );
  };

  export default CategoriesList;
