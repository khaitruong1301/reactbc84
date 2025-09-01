import React from 'react'
import useHomePageData from './useHomePageData';

const HomePageMobile = () => {


     const {data} = useHomePageData();
return (
    <div className="container py-3" style={{ maxWidth: 480 }}>
        <h2 className="h5 mb-3">Sản phẩm nổi bật</h2>

        <div className="row g-3">
            {data.map((item,index)=>{
                return <div className="col-12" key={index}>
                <div className="card">
                    <div className="row g-0 align-items-center">
                        <div className="col-4">
                            <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                        </div>
                        <div className="col-8">
                            <div className="card-body p-2">
                                <h5 className="card-title mb-1">{item.title}</h5>
                                <p className="text-muted small mb-1">{item.shortDescription}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="fw-bold text-danger">{item.price}</div>
                                    <div>
                                        <button className="btn btn-sm btn-primary me-1">Xem</button>
                                        <button className="btn btn-sm btn-outline-secondary">Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            })}
            



        </div>
    </div>
)
}

export default HomePageMobile