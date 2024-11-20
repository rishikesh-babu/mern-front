// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Cards from '../../Components/Cards/Cards';
// import { AxiosInstance } from '../../config/axiosConfig';
// import { useNavigate, useParams } from 'react-router-dom';
// import PaginationBox from '../../Components/PaginationBox/PaginationBox';

// function Home() {
//     const [data, setData] = useState([])
//     const [totalCount, settotalCount] = useState(0)
//     const { pageNo } = useParams()
//     const perPage = 2
//     const navigate = useNavigate()

//     useEffect(() => {
//         getData(pageNo)
//     }, [])

//     function nextPage(newPageNo) {
//         navigate(`/${newPageNo}`)
//         getData(newPageNo)
//     }

//     function getData(newPageNo = 1) {

//         AxiosInstance.get(`/posts/getPostData?pageNo=${newPageNo}&perPage=${perPage}`)
//             .then((res) => {
//                 console.log("Home response: ", res)
//                 setData(res.data[0]?.postData ?? [])
//                 settotalCount(res.data[0]?.totalCount?.[0]?.totalCount ?? 0)
//             })
//             .catch((err) => {
//                 console.log({ err })
//             })
//     }
//     return (
//         <>
//             <div className='d-flex flex-wrap gap-3 m-2 justify-content-evenly'>
//                 {
//                     data.map((item) => <Cards post={item} />)
//                 }
//             </div>
//             <div className='text-align-center'>
//                 <PaginationBox
//                     nextPage={nextPage}
//                     pageNo={parseInt(pageNo) ?? 1}
//                     maxPageNo={Math.ceil(totalCount / perPage)}
//                 />
//             </div>

//         </>
//     )
// }

// export default Home

// --------------------------------------------------------------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import { AxiosInstance } from '../../config/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import PaginationBox from '../../Components/PaginationBox/PaginationBox';
import './Home.css'

function Home() {
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const { pageNo } = useParams();
    const perPage = 2;
    const navigate = useNavigate();

    useEffect(() => {
        getData(pageNo || 1);  // Ensure we handle undefined or empty pageNo.
    }, [pageNo]);

    function nextPage(newPageNo) {
        navigate(`/${newPageNo}`);
    }

    function getData(newPageNo = 1) {
        AxiosInstance.get(`/posts/getPostData?pageNo=${newPageNo}&perPage=${perPage}`)
            .then((res) => {
                console.log("Home response: ", res);
                setData(res.data[0]?.postData ?? []);
                setTotalCount(res.data[0]?.totalCount?.[0]?.totalCount ?? 0);
            })
            .catch((err) => {
                console.log({ err });
            });
    }

    return (
        <>
            <div className='d-flex flex-wrap gap-3 m-2 justify-content-evenly'>
                {data.map((item, index) => (
                    <Cards key={item.id || index} post={item} />  // Ensure unique key usage.
                ))}
            </div>
            <div className='paginationbox'>
                <PaginationBox
                    nextPage={nextPage}
                    pageNo={parseInt(pageNo) || 1}
                    maxPageNo={Math.ceil(totalCount / perPage)}
                />
            </div>
        </>
    );
}

export default Home;
