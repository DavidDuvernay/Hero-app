import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

configure({adapter: new Adapter})

describe('Pruebas en <AppRouter />', () => {

    const contextValue  = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('debe de mostrar el login si no está autenticado', () => {
        
        const wrapper = shallow(
            <AuthContext.Provider value ={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar el componente de marvel si está autenticado',() => {
  
        const contextValue  = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'David'
            }
        };
    
        const wrapper = mount(
            <AuthContext.Provider value ={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})