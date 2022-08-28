export const setTheme = (theme) => {
    return {
        type: setTheme,
        theme: theme
    }
}

export const setTabOpen = (tab) => {
    return {
        type: setTabOpen,
        tab: tab
    }
}

export const setMobile = (mobile) => {
    return {
        type: setMobile,
        mobile: mobile
    }
}

export const setAbout = (res) => {
    return {
        type: setAbout,
        data: res
    }
}

export const setTalks = (res) => {
    return {
        type: setTalks,
        data: res
    }
}

export const setBlogs = (res) => {
    return {
        type: setBlogs,
        data: res
    }
}
