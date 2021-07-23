import React, { Component } from "react";
import GlassesItem from "./GlassesItem";
import GlassesList from "./GlassesList";

export default class BaiTapGlasses extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glasses: {
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

  };
    
chonKinh = (glassesClick) => {
  console.log('kinh',glassesClick)
  this.setState({
    glasses: glassesClick,
  });
};
  
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("./img/background.jpg")',
        }}
      >
        <div
          className="header"
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "relative",
          }}
        >
          <h3 className="text-center text-white p-4">TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <GlassesItem prd={this.state.glasses}/>
            </div>
            <div className="col-6">
              <img src="./img/model.jpg" alt="..." style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GlassesList
            itemListGlasses={this.arrGlasses}
            chonKinh={this.chonKinh}
          />
        </div>
      </div>
    );
  }
}
