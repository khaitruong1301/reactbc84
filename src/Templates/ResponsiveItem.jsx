import React, { useEffect, useState } from 'react'

const ResponsiveItem = (props) => { //<ResponsiveItem component={Component} mobileComponent={mobileComponent} />
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleChangeWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('load', handleChangeWidth);
        window.addEventListener('resize', handleChangeWidth);
        return () => {
            //unmount component
            window.removeEventListener('resize', handleChangeWidth);
            window.removeEventListener('load', handleChangeWidth);
        };
    }, [screenWidth]);

    let Component = props.component;

    if (screenWidth < 768 && props.mobileComponent) {
        Component = props.mobileComponent;
    }

    return (
        <Component />
    )
}

export default ResponsiveItem