import * as actions from '../actions/applicationActions';

export const defaultState = {
    mode: 'light',
    tabOpen: 'about',
    isMobile: null,
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
    videos: {
        title: null,
        videoList: []
    }
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
        case actions.setMobile: {
            return {
                ...state,
                isMobile: action.mobile
            }
        }
        case actions.setAbout: {
            return {
                ...state,
                about: action.data
            }
        }
        case actions.setTalks: {
            return {
                ...state,
                talks: {
                    title: 'Speaking',
                    talksList: action.data
                }
            }
        }
        case actions.setBlogs: {
            return {
                ...state,
                blogs: {
                    title: 'Writing',
                    blogsList: action.data
                }
            }
        }
        case actions.setVideos: {
            return {
                ...state,
                videos: {
                    title: 'YouTube',
                    videoList: action.data
                }
            }
        }
        default:
            return state
    }
}
