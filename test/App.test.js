import App from '../src/components/App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  test('should match snapshot',() =>{
    const wapper = shallow(<App />)

    expect(wapper.find('h1').text()).toBe('Welcome to my Starter App')
    expect(wapper).toMatchSnapshot
  })
});