import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
interface Category {
    id: number;
    name: string;
    slug:string;
    icon:string;
    subCategories: Category[];
  }

const CategoriesList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("/categories")
            .then((response) => response.json())
            .then((data) => {setCategories(data);setLoading(false);console.log(data,'categories')})
            .catch((err) => console.error("Error fetching categories:", err));
      }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (     
        <div className="header-nav-left">
            <button className="dropdown-category dropdown-category-2">
                <i className="iconly-Category icli"></i>
                <span>All Categories</span>
            </button>
            <div className="category-dropdown">
                <div className="category-title">
                    <h5>Categories</h5>
                    <button type="button" className="btn p-0 close-button text-content">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <ul className="category-list">
                {categories.map((category) => (
                    <li key={category.slug} className="onhover-category-list">
                        <Link href={category.slug} className="category-name">
                            <img src={category.icon?category.icon:'/images/category_default.png'} alt={category.name} />
                            <h6>{category.name}</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </Link>
                        {
                            (category.subCategories?.length)>0 &&
                            (
                            <div className="onhover-category-box w-100">
                                <div className="list-1">
                                    <ul>
                                    {
                                        category.subCategories.map(
                                            (subCategory)=>
                                                (<li key={subCategory.slug}>
                                                    <Link href={subCategory.slug}>{subCategory.name}</Link>
                                                </li>)
                                        )
                                    }
                                    </ul>
                                </div>
                            </div>
                            )
                        }
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
  };

  export default CategoriesList;
