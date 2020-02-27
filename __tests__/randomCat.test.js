import React from 'react'
import { shallow } from 'enzyme'
import { create } from "react-test-renderer";
import RandomCat from '../components/randomCat'

// jest.mock('../components/buttonWithObj', () => "hello")

describe('RandomCat', function() {

  it ("returns loading before api response", function() {
    const randomCat = shallow(<RandomCat/>, { disableLifecycleMethods: true })

    expect(randomCat.text()).toEqual("Loading...")
  })

  it ("after api response it returns Your Random Cat Title", function() {
    const randomCat = shallow(<RandomCat/>, { disableLifecycleMethods: true })
    randomCat.setState({cat: "something"})

    expect(randomCat.text()).toEqual("Your Random Cat!")
  })



})
