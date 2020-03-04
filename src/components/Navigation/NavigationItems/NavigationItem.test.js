import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItem';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems/>', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>);
    });
    it('should render two <NavigationItem/> elements if not authenticated',
        ()=>{
        //testing logic

            expect(wrapper.find(NavigationItem)).toHaveLength(2);
        });

    it('should render three <NavigationItem/> elements if  authenticated',
        ()=>{
            //testing logic
            // wrapper = shallow(<NavigationItems isAuthenticated/>); first way
            wrapper.setProps({isAuthenticated: true}); //second way
            expect(wrapper.find(NavigationItem)).toHaveLength(3);
        });

    it('should an exect logout button',
        ()=>{
            wrapper.setProps({isAuthenticated: true});
            expect(wrapper.contains(<NavigationItem link="/logout">Logout
            </NavigationItem>)).toEqual(true);
        });
});

//resources
//jest: https://jestjs.io/
//enzyme: https://airbnb.io/enzyme/docs/api/