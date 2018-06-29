import * as React from 'react';
import Slider from './slider/slider';
import Banner from './banner/banner';
import NewArrivals from './newarrivals/newarrivals';
import DOWF from './dofw/dowf';
import BestSeller from './bestseller/bestseller';
export default class HomeIndex extends React.Component<any, any> 
{
    render() {
        return (
            <div>
                <BestSeller></BestSeller>
                <Banner></Banner>
                <Slider></Slider>
                <NewArrivals></NewArrivals>
                <DOWF></DOWF>
               
            </div>
    );
    }
}   