import React from 'react'
import { shallow } from 'enzyme'
import FlashingCats from '../components/flashingCats'

describe('FlashingCats', function() {

  it ("returns loading before cats are loaded", function() {
    const flashingCats = shallow(<FlashingCats/>, { disableLifecycleMethods: true })
    expect(flashingCats.text()).toContain("Loading flashing cats...")
  })

  it ("renders 6 cat cards after loading", function() {
    const flashingCats = shallow(<FlashingCats/>)
    
    // Wait for component to mount and set loaded state
    flashingCats.setState({ loaded: true })
    
    // Check that all 6 cats are rendered
    expect(flashingCats.find('.cat-card')).toHaveLength(6)
  })

  it ("renders cat names correctly", function() {
    const flashingCats = shallow(<FlashingCats/>)
    flashingCats.setState({ loaded: true })
    
    const catNames = ['Whiskers', 'Mittens', 'Shadow', 'Tiger', 'Luna', 'Simba']
    catNames.forEach(name => {
      expect(flashingCats.text()).toContain(name)
    })
  })

  it ("renders cat emoji for each card", function() {
    const flashingCats = shallow(<FlashingCats/>)
    flashingCats.setState({ loaded: true })
    
    const emojiElements = flashingCats.find('.cat-emoji')
    expect(emojiElements).toHaveLength(6)
    emojiElements.forEach(emoji => {
      expect(emoji.text()).toEqual('🐱')
    })
  })
})
