import React, { createContext } from "react";

export const context = createContext();

class contextProvider extends React.Component {
  state = {
    isAmharic: false,
    amharic: {
      navBar: {
        list1: "ቤት",
        list2: "ዜና",
        list3: "አክሲዮን",
      },
    },
    english: {
      navBar: {
        list1: "Home",
        list2: "News",
        list3: "Stock",
      },
    },
  };
  render() {
    return (
      <context.Provider value={{ ...this.state }}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export default contextProvider;
