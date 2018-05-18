import React from 'react';
import { shallow } from 'enzyme';
import Invite from './Invite';

describe('Invite', () => {

  const app = shallow(<Invite />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
