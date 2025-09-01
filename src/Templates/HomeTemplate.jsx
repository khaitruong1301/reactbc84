import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from './HeaderHome'
import ResponsiveItem from './ResponsiveItem'
import BottomTabMenu from './BottomTabMenu'

//Template chứa các thành phần dùng chung của website

const HomeTemplate = () => {
    return (
        <div>
            <ResponsiveItem component={HeaderHome} mobileComponent={BottomTabMenu} />
            {/* nội dung trang con hiển thị */}
            <Outlet />

            


        </div>
    )
}

export default HomeTemplate



