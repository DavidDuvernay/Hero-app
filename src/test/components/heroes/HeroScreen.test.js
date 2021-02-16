import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
const { mount, configure } = require("enzyme")

configure({adapter: new Adapter})

describe('pruebas en <HeroScreen  />', () => {
    const history ={
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };
    
    
    
    test('debe mostrar el componente redirect si no hay argumetos en el URL', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history = {history}/>
        </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('debe de mostrar un hero si el parametro existe', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            <Route path= '/hero/:heroeId' component ={HeroScreen}/>
        </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true)
    })
})