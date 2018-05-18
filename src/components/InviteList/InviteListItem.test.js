import React from 'react';
import { shallow } from 'enzyme';
import InviteListItem from './InviteListItem';

describe('InviteListItem Component', () => {

  const invite = {
    id: 1,
    name: 'Aimar',
    email: 'aimar@snapit.ee'
  }

  const app = shallow(<InviteListItem invite={invite} />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
