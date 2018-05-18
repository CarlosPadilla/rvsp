import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input Component', () => {

  const value = ''
  const onInputChange = jest.fn()

  const app = shallow(
    <Input
      label="Nimi"
      field="name"
      className="input-name"
      type="text"
      value={value}
      onChange={onInputChange}
    />
  )

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

})
