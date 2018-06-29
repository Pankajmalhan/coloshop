import * as React from 'react';
import { Link } from 'react-router-dom';

interface ComponentState{
    paging:number,
    order:string
}

interface ComponentProp{
    Paging:Function,
    Order:Function
}

interface order{
    displayName:string,
    value:string
}
 
var spanStyle={
    color:'black'
}
export default class SortPaging extends React.PureComponent<ComponentProp, ComponentState> 
{
    constructor(props:ComponentProp){
        super(props);
        this.state={paging:20,order:'Default Sorting'}
    }

    orderList:order[]=[
        {displayName:'Default Sorting',value:'default'},
        {displayName:'Price',value:'price'},
        {displayName:'Product Name',value:'name'}
        ];

    paging=(pageNumber:number,e:any)=>{
        this.setState({paging:pageNumber});
        this.props.Paging(pageNumber);
    }

    order=(orderBy:string,e:any)=>{
        this.setState({order:this.orderList.filter(x=>x.value==orderBy)[0].displayName});
        this.props.Order(orderBy);
    }

    renderPaging=()=>{
        var pagingArray=[5,10,20];
        return pagingArray.map((item)=>{
            return  <li key={item} className="num_sorting_btn" onClick={(e)=>this.paging(item,e)}><span>{item}</span></li>;
        })
    }

    renderOrder=()=>{
        return this.orderList.map((item:order)=>{
            return  <li key={item.displayName} className="type_sorting_btn" onClick={(e)=>this.order(item.value,e)} ><span>{item.displayName}</span></li>
        })
    }

    ordering=()=>{

    }

    render() {
        return (
            <div className="product_sorting_container product_sorting_container_top">
            <ul className="product_sorting">
                <li>
                    <span className="type_sorting_text" style={spanStyle}>{this.state.order}</span>
                    <i className="fa fa-angle-down"></i>
                    <ul className="sorting_type">
                        {this.renderOrder()}
                    </ul>
                </li>
                <li>
                    <span style={spanStyle}>Show</span>
                    <span className="num_sorting_text" style={spanStyle}>{this.state.paging}</span>
                    <i className="fa fa-angle-down"></i>
                    <ul className="sorting_num">
                       {this.renderPaging()}
                    </ul>
                </li>
            </ul>
        </div>
    );
    }
}   