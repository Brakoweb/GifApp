import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Test in <GifGridItem />', () => {
    const title = 'Title';
    const url = 'https://url.com/';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('must show the component correctly', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('must have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have the image equal to url and alt of the props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    
    
})
