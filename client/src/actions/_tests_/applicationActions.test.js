import * as actions from '../applicationActions';

describe('application actions unit tests', () => {
    it('setTheme should return correct object', () => {
        let theme = 'test';
        let action = actions.setTheme(theme);
        expect(action).toEqual({
            type: actions.setTheme,
            theme: 'test'
        })
    })

    it('setTabOpen should return correct object', () => {
        let tab = 'test';
        let action = actions.setTabOpen(tab);
        expect(action).toEqual({
            type: actions.setTabOpen,
            tab: 'test'
        })
    })

    it('setLanguage should return correct object', () => {
        let lang = 'test';
        let action = actions.setLanguage(lang);
        expect(action).toEqual({
            type: actions.setLanguage,
            language: 'test'
        })
    })

    it('setAbout should return correct object', () => {
        let res = 'test';
        let action = actions.setAbout(res);
        expect(action).toEqual({
            type: actions.setAbout,
            data: 'test'
        })
    })

    it('setEducation should return correct object', () => {
        let res = 'test';
        let action = actions.setEducation(res);
        expect(action).toEqual({
            type: actions.setEducation,
            data: 'test'
        })
    })

    it('setSkills should return correct object', () => {
        let res = 'test';
        let action = actions.setSkills(res);
        expect(action).toEqual({
            type: actions.setSkills,
            data: 'test'
        })
    })

    it('setLegend should return correct object', () => {
        let res = 'test';
        let action = actions.setLegend(res);
        expect(action).toEqual({
            type: actions.setLegend,
            data: 'test'
        })
    })

    it('setButtons should return correct object', () => {
        let res = 'test';
        let action = actions.setButtons(res);
        expect(action).toEqual({
            type: actions.setButtons,
            data: 'test'
        })
    })
})