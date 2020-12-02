import React, { Component } from 'react';


 class ListKiri extends Component {



    render(){

        return(
            <li className="media">
            <img src={this.props.images} style={{"width":"150px","height":"150px"}}
             className="img-thumbnail" alt="..."/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">{this.props.title}</h5>
              {this.props.description}
            </div>
            <div>
            <button type="button" onClick={e=>{this.props.eventClick(this.props.model)}} className="btn btn-primary btn-lg">Add to Cart</button>
            </div>
          </li>
        );


    }




 }

 export default ListKiri;