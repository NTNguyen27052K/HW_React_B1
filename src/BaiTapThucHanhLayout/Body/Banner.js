import React, {Component} from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="container bg-light py-5">
          <h1
            className="mt-5 mb-3"
            style={{fontSize: "90px", fontWeight: "100"}}
          >
            A Warm Welcome!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta,
            nobis doloribus nisi iure unde autem ipsum dolor sit amet
            consectetur adipisicing elit. Sit dicta, nobis doloribus nisi iure
            unde autem ipsum dolor sit amet consectetur adipisicing elit. Sit
            dicta, nobis doloribus nisi iure unde autem.
          </p>
          <button className="btn btn-primary">Call to action!</button>
        </div>
      </div>
    );
  }
}
