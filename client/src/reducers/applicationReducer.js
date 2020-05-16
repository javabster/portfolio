import * as actions from '../actions/applicationActions';

export const defaultState = {
    mode: 'light',
    tabOpen: 'about',
    language: 'english',
    buttons: {
        lightTitle: 'Light Mode',
        darkTitle: 'Dark Mode',
    },
    about: {
        title: null,
        body: {
            title: null,
            content: null,
        }
    },
    education: {
        title: null,
        body: [],
    },
    skills: {
        title: null,
        skillsList: []
    },
    skillsLegend: {
            title: null,
            bubbleText: null,
    }
}

export default function applicationReducer(state, action) {
    switch(action.type) {
        case actions.toggleMode: {
            return {
                ...state,
                mode: action.mode
            }
        }
        case actions.setTabOpen: {
            return {
                ...state,
                tabOpen: action.tab
            }
        }
        case actions.setAbout: {
            return {
                ...state,
                about: action.data
            }
        }
        case actions.setEducation: {
            return {
                ...state,
                education: action.data
            }
        }
        case actions.setSkills: {
            return {
                ...state,
                skills: action.data
            }
        }
        case actions.setLegend: {
            return {
                ...state,
                skillsLegend: action.data
            }
        }
        case actions.setButtons: {
            return {
                ...state,
                buttons: action.data
            }
        }
        // case actions.setIsClicked: {
        //     let newState = {...state};
        //     newState.about.isClicked = false
        //     newState.education.isClicked = false
        //     newState.skills.isClicked = false
        //     newState[action.button].isClicked = true
        //     return newState;
        // }
        default:
        return state
    }
}
