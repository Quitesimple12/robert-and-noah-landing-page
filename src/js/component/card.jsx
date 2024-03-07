import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

function Cards(props) {
    console.log(props);
    const { cardText } = props;
    return <div className = "col d-flex align-items-stretch">
    <div class="card" style={{ width: "18rem" }}>
    <img class="card-img-top" src={ rigoImage }  alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">{cardText}</p>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary">Find out more!</a>
  </div>
  </div>
  </div>
}

export { Cards };