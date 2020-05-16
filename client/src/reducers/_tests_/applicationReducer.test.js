import reducer, { defaultState } from '../applicationReducer'
import * as actions from '../../actions/applicationActions';
import { isMainThread } from 'worker_threads';

describe('applicationReducer unit tests', () => {
    it('should return the default state', () => {
        expect(reducer(defaultState, {})).toEqual(defaultState)
    })

    it('should handle actions.setTheme', () => {
        expect(reducer(defaultState, {
            type: actions.setTheme,
            theme: 'test theme'
        }))
        .toEqual({
            ...defaultState,
            mode: 'test theme'
        })
    })

    it('should handle actions.setTabOpen', () => {
        expect(reducer(defaultState, {
            type: actions.setTabOpen,
            tab: 'test tab'
        }))
        .toEqual({
            ...defaultState,
            tabOpen: 'test tab'
        })
    })

    it('should handle actions.setLanguage', () => {
        expect(reducer(defaultState, {
            type: actions.setLanguage,
            language: 'test lang'
        }))
        .toEqual({
            ...defaultState,
            language: 'test lang'
        })
    })

    it('should handle actions.setAbout', () => {
        expect(reducer(defaultState, {
            type: actions.setAbout,
            data: {
                title: 'test title',
                body: {
                    title: 'test body title',
                    content: 'test content',
                }
            }
        }))
        .toEqual({
            ...defaultState,
            about: {
                title: 'test title',
                body: {
                    title: 'test body title',
                    content: 'test content',
                }
            }
        })
    })

    it('should handle actions.setEducation', () => {
        expect(reducer(defaultState, {
            type: actions.setEducation,
            data: {
                title: 'test title',
                body: [ 'test 1', 'test 2', 'test 3'],
            }
        }))
        .toEqual({
            ...defaultState,
            education: {
                title: 'test title',
                body: [ 'test 1', 'test 2', 'test 3'],
            }
        })
    })

    it('should handle actions.setSkills', () => {
        expect(reducer(defaultState, {
            type: actions.setSkills,
            data: {
                title: 'test title',
                skillsList: [ 'test 1', 'test 2', 'test 3'],
            }
        }))
        .toEqual({
            ...defaultState,
            skills: {
                title: 'test title',
                skillsList: [ 'test 1', 'test 2', 'test 3'],
            }
        })
    })

    it('should handle actions.setLegend', () => {
        expect(reducer(defaultState, {
            type: actions.setLegend,
            data: {
                title: 'test title',
                bubbleText: [ 'test 1', 'test 2', 'test 3'],
            }
        }))
        .toEqual({
            ...defaultState,
            skillsLegend: {
                title: 'test title',
                bubbleText: [ 'test 1', 'test 2', 'test 3'],
            }
        })
    })

    it('should handle actions.setButtons', () => {
        expect(reducer(defaultState, {
            type: actions.setButtons,
            data: {
                lightTitle: 'test title',
                darkTitle: 'test title 2'
            }
        }))
        .toEqual({
            ...defaultState,
            buttons: {
                lightTitle: 'test title',
                darkTitle: 'test title 2'
            }
        })
    })
})