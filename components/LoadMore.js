"use client";

import { useEffect, useState} from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
// import {data} from "./Explore";
import {fetchData} from "./FetchData";

let page = 2;

function LoadMore() {
const { ref, inView } = useInView();
const [data, setData] = useState([]);
useEffect(() => {
if(inView){
fetchData('/movie/genre', '').then((res)=>{
setData([...data,...res]);
page++;
})
}
},[inView,data]);

return(
<>
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
    {data.map((item)=>{
        return(
            <div key={item.id}>{item.name || item.title}</div>
    )})}
    </section>

    <section className="">
    <div ref={ref}>
    <Image src="./spinner.svg" alt="spinner" width={56} height={56} className=""/>
    </div>
    </section>
</>
)}

export default LoadMore;