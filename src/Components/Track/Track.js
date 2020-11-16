import React from "react";
import "./Track.css";

class Track extends React.Component {

  

    renderAction() {
        if (this.props.isRemoval) {
          return (<button className="Track-action" onClick={this.removeTrack}> - </button>);
        }
        else {
          return (<button className="Track-action" onClick={this.addTrack}> + </button>);
        }
      }

      
    render(){
        return (
            <div class="Track">
  <div class="Track-information">
    <h3>{/*<!-- track name will go here -->*/}</h3>
    <p>{/*<!-- track artist will go here--> | <!-- track album will go here -->*/}</p>
  </div>
  <button class="Track-action">{/*<!-- + or - will go here -->*/}</button>
</div>
        );
    }
}




    
  
  export default Track;