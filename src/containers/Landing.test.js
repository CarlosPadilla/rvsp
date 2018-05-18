import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {

  const app = shallow(<Landing />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
