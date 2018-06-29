import * as React from 'react';
export default class DOWF extends React.Component<any, any> 
{
    render() {
        return (
			<div>
            <div className="deal_ofthe_week">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="deal_ofthe_week_img">
						<img src="assets/images/deal_ofthe_week.png" alt="" />
					</div>
				</div>
				<div className="col-lg-6 text-right deal_ofthe_week_col">
					<div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
						<div className="section_title">
							<h2>Deal Of The Week</h2>
						</div>
						<ul className="timer">
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="day" className="timer_num">03</div>
								<div className="timer_unit">Day</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="hour" className="timer_num">15</div>
								<div className="timer_unit">Hours</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="minute" className="timer_num">45</div>
								<div className="timer_unit">Mins</div>
							</li>
							<li className="d-inline-flex flex-column justify-content-center align-items-center">
								<div id="second" className="timer_num">23</div>
								<div className="timer_unit">Sec</div>
							</li>
						</ul>
						<div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
					</div>
				</div>
			</div>
		</div>	
	</div>
	<div className="benefit">
		<div className="container">
			<div className="row benefit_row">
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>free shipping</h6>
							<p>Suffered Alteration in Some Form</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>cach on delivery</h6>
							<p>The Internet Tend To Repeat</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>45 days return</h6>
							<p>Making it Look Like Readable</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>opening all week</h6>
							<p>8AM - 09PM</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
    );
    }
}   