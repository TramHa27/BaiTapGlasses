import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    let {prd} = this.props;
    return (
        <div className="card" style={{ position: "relative" }}>
          <img src="./img/model.jpg" alt="..." />
          <div
            style={{
              position: "absolute",
              width: "58%",
              marginTop: "170px",
              marginLeft: "100px",
            }}
          >
            <img src={prd.url} style={{ width: "100%", opacity: 0.8 }} alt="..." />
          </div>
          <div
            className="card-body"
            style={{
              position: "absolute",
              backgroundColor: "#bd791b73",
              zIndex: "1",
              left: "0",
              bottom: "0",
              width: "100%",
            }}
          >
            <h3>{prd.name}</h3>
            <p>{prd.desc}</p>
          </div>
        </div>
    );
  }
}
