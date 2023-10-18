import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Components/Style-Product.css";
import axios from "axios";
import { useState } from "react";

const Categories = () => {
  const [Categories, setCategories] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      console.log("Executed");
      const data = await axios.get("https://backend-ue8h.onrender.com/Categories");
      console.log(data);
      setCategories(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <Header />
      {Categories &&
        Categories.data.map((category) => (
          <div className="container my-5">
          <div className="row d-flex justify-content-center">
              <div className="col-12 product-card-container border border-secondary">
                  <div className="row my-3 mx-3">
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                          <img src={category.image} className="img-fluid"/>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 col-12 my-3 mx-sm-auto">
                          <div>
                              <p className="display-6 remove-scrollbar"> {category.name} </p>
                          </div>
                          <div className="mb-md-5">
                              <p className="mt-md-4 ms-md-auto ms-2 pb-md-5 product-font-size"> {category.detail}. Available in various sizes and models to cater to your specific needs.<br/><br/> We offer products from leading brands: {category.brand}. Quality is always assured with our selection.</p>
                          </div>


                          <div className="d-flex justify-content-end mt-lg-5 pt-lg-5 d-flex justify-content-between">
                              <h3 className=" mt-md-1 remove-scrollbar">Range of products: {category.type}</h3>
                              <Link to={`/product/category/batch/${category.batch}`}>
                              <button className="btn cart-button px-lg-5 px-md-4 px-sm-3 px-2 py-lg-2 py-md-2 py-sm-1 py-1"><h5 className="remove-scrollbar">See All</h5></button>
</Link>                          
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        ))}
      <Footer />
    </>
  );
};

export default Categories;
