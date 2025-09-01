import React, { use } from 'react'
import useHomePageData from './useHomePageData';

const HomePage = () => {
    const {data} = useHomePageData();
    
    return (
        <div>
            <h3>Homepage</h3>
            <div className="container py-4">
                <h4 className="mb-4 fw-bold">Danh sách sản phẩm</h4>
                <div className="row g-3">
                    {data.map((item,index) => {
                        return <div className='col-3' key={index}>
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text'>{item.shortDescription}</p>
                                <a href="#" className='btn btn-primary'>View Details</a>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage