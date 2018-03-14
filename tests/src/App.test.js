import React from 'react'
import App from '../../src/App'
import renderer from 'react-test-renderer'

describe('App', () => {
    it('should render correctly', () => {
        const component = renderer.create(<App/>)
        expect(component).toMatchSnapshot()
    })
})
