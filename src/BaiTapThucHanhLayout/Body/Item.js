import React, {Component} from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="content">
            <div className="row text-center">
              <div className="col-4">
                <div className="card">
                  <div style={{height: "150px", width: "320px"}}></div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to build on the text to build on the build.
                    </p>
                  </div>
                  <div
                    className="bg-light"
                    style={{borderTop: "1px solid #D2D2D2"}}
                  >
                    <a
                      href="#"
                      class="btn btn-primary  w-75 my-3  text-center  mx-auto"
                    >
                      Find out more!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div className="card">
                  <div style={{height: "150px", width: "320px"}}></div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to build on the text to build on the build.
                    </p>
                  </div>

                  <div
                    className="bg-light"
                    style={{borderTop: "1px solid #D2D2D2"}}
                  >
                    <a
                      href="#"
                      class="btn btn-primary my-3  w-75  text-center  mx-auto"
                    >
                      Find out more!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div className="card">
                  <div style={{height: "150px", width: "320px"}}></div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content. Some quick example
                      text to build on the text to build on the build.
                    </p>
                  </div>
                  <div
                    className="bg-light"
                    style={{borderTop: "1px solid #D2D2D2"}}
                  >
                    <a
                      href="#"
                      class="btn btn-primary my-3  w-75  text-center  mx-auto"
                    >
                      Find out more!
                    </a>
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
