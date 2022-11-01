import {expect, describe} from '@jest/globals';

import renderer from 'react-test-renderer';
import MyApp from '../pages/index';


describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
        const domTree = renderer.create(<MyApp/>).toJSON();
        expect(domTree).toMatchSnapshot()
    })
})
