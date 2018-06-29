import * as React from 'react';
import { Fragment } from 'react';
export default class CartItem extends React.Component<any, any> 
{
    render() {
        return (
<tr>
<td>
<figure className="media">
	<div className="img-wrap"><img src="http://bootstrap-ecommerce.com/main/images/items/2.jpg" className="img-thumbnail img-sm"/></div>
	<figcaption className="media-body">
		<h6 className="title text-truncate">Product name goes here </h6>
		<dl className="param param-inline small">
		  <dt>Size: </dt>
		  <dd>XXL</dd>
		</dl>
		<dl className="param param-inline small">
		  <dt>Color: </dt>
		  <dd>Orange color</dd>
		</dl>
	</figcaption>
</figure> 
	</td>
	<td> 
    <select className="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
			<option>4</option>	
		</select> 
	</td>
	<td ><strong>$4.99</strong></td>
    <td ><strong>$9.98</strong></td>
	<td className="text-right"> 
	
	<a href="" className="btn btn-outline-danger removeBtn"> × Remove</a>
	</td>
</tr>
    );
    }
}   