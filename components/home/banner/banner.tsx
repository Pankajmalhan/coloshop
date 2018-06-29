import * as React from 'react';
import { Link } from 'react-router-dom';
var scope = {
    image1: {
        backgroundImage: "url(assets/images/banner_1.jpg)"
    },
    image2: {
        backgroundImage: "url(assets/images/banner_2.jpg)"
    },
    image3: {
        backgroundImage: "url(assets/images/banner_3.jpg)"
    }
};
export default class Banner extends React.Component<any, any> 
{
    
    render() {
        
        return (
            <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={scope.image1}>
                            <div className="banner_category">
                            <Link to='/products/3' >women's</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={scope.image2}>
                            <div className="banner_category">
                            <Link to='/products/4' >accessories's</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={scope.image3}>
                            <div className="banner_category">
                            <Link to='/products/2' >men's</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}   