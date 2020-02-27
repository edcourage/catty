import React from 'react'
import { shallow } from 'enzyme'
import { create } from "react-test-renderer";
import RandomCat from '../components/randomCat'

// jest.mock('../components/buttonWithObj', () => "hello")

describe('RandomCat', function() {

  it ("returns loading before api response", function() {
    const layout = shallow(<RandomCat/>)

    expect(layout.text()).toEqual("Loading...")
  })

})
