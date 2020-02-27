import React from 'react'
import { shallow } from 'enzyme'
import { create } from "react-test-renderer";
import RandomCat from '../components/randomCat'
import fetch from 'isomorphic-unfetch';
// jest.mock('../components/buttonWithObj', () => "hello")

describe('RandomCat', function() {

  it ("returns loading before api response", function() {
    const randomCat = shallow(<RandomCat/>, { disableLifecycleMethods: true })

    expect(randomCat.text()).toEqual("Loading...")
  })

  it ("If can has breed info, render title with name", function() {
    const randomCat = shallow(<RandomCat/>, { disableLifecycleMethods: true })
    var json = require("./reference/randomCatTest.json")
    randomCat.setState({cat: json})
    expect(randomCat.find("#randomCatTitle").text()).toEqual("Your Random Cats is Khao Manee!")
  })

  it ("If can has breed info, render title with name and description", function() {
    const randomCat = shallow(<RandomCat/>, { disableLifecycleMethods: true })
    var json = require("./reference/randomCatTest.json")
    randomCat.setState({cat: json})
    expect(randomCat.find("#description").text()).toEqual("The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.")
  })



})
