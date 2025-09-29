import button from 'daisyui/components/button';
import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json")
.then((res) => res.json())

const AllCategories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
        <div className='grid grid-cols-1 mt-5 gap-3 font-semibold text-accent'>
            {
                categories.map((category)=>(
                    <NavLink key={category.id} className={"btn bg-base-100 border-0 hover:bg-base-200"} to = {`/category/${category.id}`}>{category.name}</NavLink>
                ))
            }
        </div>
        </div>
    );
};

export default AllCategories;