import * as React from 'react';
var $ = require('jquery');
var componentStyle={
	width:'135%',
	marginLeft:'-17.5%',
	marginTop:'57px'
}
export default class BestSeller extends React.Component<any, any> 
{
	
	componentDidMount(){
		$(document).ready(function(){
			
		})
	}
    render() {
        return (
            <div className="best_sellers">
		<div className="container">
			
			<br/><br/>
			<div className="row">
				<div className="col">
				<div id="myCarousel" className="carousel slide" data-ride="carousel" style={componentStyle}>
			  <ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
				<li data-target="#myCarousel" data-slide-to="4"></li>
			  </ol>

			  <div className="carousel-inner">
				<div className="item active" >
				  <img src="assets/images/slider1.jpg" alt="Los Angeles"  />
				</div>
		  
				<div className="item" >
				  <img src="assets/images/slider2.jpg" alt="Chicago"  />
				</div>
			  
				<div className="item" >
				  <img src="assets/images/slider3.jpg" alt="New york"   />
				</div>
				<div className="item" >
				  <img src="assets/images/slider4.jpg" alt="New york"   />
				</div>
				<div className="item" >
				  <img src="assets/images/slider5.jpg" alt="New york"   />
				</div>
			  </div>

			  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left"></span>
				<span className="sr-only">Previous</span>
			  </a>
			  <a className="right carousel-control" href="#myCarousel" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right"></span>
				<span className="sr-only">Next</span>
			  </a>
			</div>

				</div>
			</div>
		</div>
		
	</div>
    );
    }
}   