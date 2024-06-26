import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import Buttons from "./Buttons";

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [maxpage, setMaxpage] = useState(50);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(res.data);
    };

    fetchdata();
  }, []);

  const paginate = (n) => {
    setCurrentpage(n);
    console.log(n);
  };
  const totalpage = currentpage * maxpage;
  const pagelimit = totalpage - maxpage;

  const dataSlice = data.slice(pagelimit, totalpage);

  return (
    <div>
      <h1>Pagenation</h1>
      <Image data={dataSlice} loading={loading} />
      <Buttons maxpage={maxpage} totalimage={data.length} paginate={paginate} />
    </div>
  );
};

export default Data;
