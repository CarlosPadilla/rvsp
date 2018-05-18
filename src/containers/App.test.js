import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import NotFound from '../components/Error/NotFound';
import Landing from './Landing';

import App from './App';

describe('App component', () => {

  const app = shallow(<App />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })

  describe('Routing', () => {

    it('routes invalid path to 404 page', () => {
      const app = mount(
        <MemoryRouter initialEntries={[ '/somerandompath' ]}>
          <App />
        </MemoryRouter>
      )

      expect(app.find(Landing)).toHaveLength(0)
      expect(app.find(NotFound)).toHaveLength(1)
    })

    it('valid routes should NOT forward to 404 page', () => {
      const app = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App />
        </MemoryRouter>
      )

      expect(app.find(Landing)).toHaveLength(1)
      expect(app.find(NotFound)).toHaveLength(0)
    })

  })

})
