import React from 'react';
import { shallow } from 'enzyme';
import InviteList from './InviteList';

describe('InviteList Component', () => {

  const invites = [
    {
      id: 1,
      name: 'Aimar',
      email: 'aimar@snapit.ee'
    },
    {
      id: 2,
      name: 'Marju',
      email: 'marju@domeca.ee'
    }
  ]

  const app = shallow(<InviteList invites={invites} />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
