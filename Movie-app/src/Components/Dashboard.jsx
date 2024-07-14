import React, { useEffect, useState } from "react";
// axios library for api calling
import axios from "axios";
import Searchmodal from "./Searchmodal";
const Dashboard = () => {
  // data state
  const [userdata, setData] = useState([]);
  // api calling for data with axios
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((res) => {
        // console.log(res.data);
        setData([res.data]);
        // console.log(userdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* searchcomponent */}
      <Searchmodal />
      {/* card div starts */}
      <div className="carddivparentdiv p-4">
        {userdata.map((obj, index) => (
          // should be implement this bracket with map function for retunring the whole data
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {obj.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {obj.description}
            </p>

            <div className="imageflexdiv flex justify-center">
              <img src={obj.image} alt="image is broken" className="w-20" />
            </div>

            <button className="bg-white text-black p-3 mt-3 w-full">
              {obj.price}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
