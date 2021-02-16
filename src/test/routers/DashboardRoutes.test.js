import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
const { mount, configure } = require("enzyme");

configure({adapter: new Adapter})

describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue ={
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('debe mostrarse correctamente', () => {
      
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>

        );

        expect(wrapper).toMatchSnapshot();
    })
})