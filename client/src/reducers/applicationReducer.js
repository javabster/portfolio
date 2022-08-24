import * as actions from '../actions/applicationActions';

export const defaultState = {
    mode: 'light',
    tabOpen: 'about',
    language: 'english',
    modalOpen: false,
    buttons: {
        lightTitle: 'Light Mode',
        darkTitle: 'Dark Mode',
    },
    about: {
        title: null,
        description: null,
        heading: null,
    },
    talks: {
        title: null,
        talksList: [],
    },
    blogs: {
        title: null,
        blogsList: [],
    },
}

export default function applicationReducer(state, action) {
    switch (action.type) {
        case actions.setTheme: {
            return {
                ...state,
                mode: action.theme
            }
        }
        case actions.setTabOpen: {
            return {
                ...state,
                tabOpen: action.tab
            }
        }
        case actions.setLanguage: {
            return {
                ...state,
                language: action.language
            }
        }
        case actions.setAbout: {
            return {
                ...state,
                about: action.data
            }
        }
        case actions.setButtons: {
            return {
                ...state,
                buttons: action.data
            }
        }
        case actions.setTalks: {
            return {
                ...state,
                talks: {
                    title: 'Talks',
                    talksList: action.data
                }
            }
        }
        case actions.setBlogs: {
            return {
                ...state,
                blogs: {
                    title: 'Articles',
                    blogsList: action.data
                }
            }
        }
        default:
            return state
    }
}
