import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("A <Header/>", () => {
  it("It should be render", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".header");
    expect(wrapper.length).toBe(1);
  });
});
