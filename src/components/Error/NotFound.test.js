import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router'
import NotFound from './NotFound';

describe('`Not found` component', () => {

  const app = shallow(<NotFound />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
