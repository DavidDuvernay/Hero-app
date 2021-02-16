import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { types } from '../../../types/types';
const { mount, configure } = require("enzyme");
const { MemoryRouter, Router } = require("react-router-dom");
const { AuthContext } = require("../../../auth/AuthContext")
const { Navbar } = require("../../../components/ui/Navbar")

configure({adapter: new Adapter})

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'David'
        }
    };

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    } 

    const wrapper = mount(
        <AuthContext.Provider value= {contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot
    })

    test('debe de llamar el logout y user history', () => {
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })

        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
})