import React, { Component } from "react";

export default class GlassesList extends Component {



  renderGlassesItem = () => {
    let {itemListGlasses} = this.props;

    return itemListGlasses.map((item, index) => {
      return (
        <button
          onClick={() => this.props.chonKinh(item)}
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            padding: "0",
            width: "100px",
            height: "65px",
          }}
          key={index}
          className="btn"
        >
          <img
            src={item.url}
            style={{
              width: "100px",
              height: "65px",
              border: "1px solid gray",
            }} alt="..."
          />
        </button>
      );
    });
  };
  render() {
    return (
      <div
        className="bg-light mt-5"
        style={{ width: "800px", height: "170px" }}
      >
        {this.renderGlassesItem()}
      </div>
    );
  }
}

