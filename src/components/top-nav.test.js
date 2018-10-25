import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Should call onNewGame game when new game is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onRestartGame={callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});

	it('Should call onGenerateAuralUpdate when status is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
		const link = wrapper.find('.status-link');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});
});