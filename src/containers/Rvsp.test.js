import React from 'react';
import { shallow } from 'enzyme';
import Rvsp from './Rvsp';

describe('Rvsp', () => {

  const app = shallow(<Rvsp />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
