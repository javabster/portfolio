export const toggleMode = (mode) => {
    return {
        type: toggleMode,
        mode: mode
    }
}

export const setTabOpen = (tab) => {
    return {
        type: setTabOpen,
        tab: tab
    }
}

export const setAbout = (res) => {
    return {
        type: setAbout,
        data: res
    }
}

export const setEducation = (res) => {
    return {
        type: setEducation,
        data: res
    }
}

export const setSkills = (res) => {
    return {
        type: setSkills,
        data: res
    }
}

export const setLegend = (res) => {
    return {
        type: setLegend,
        data: res
    }
}

export const setButtons = (res) => {
    return {
        type: setButtons,
        data: res
    }
}

// export const setIsClicked = (button) => {
//     return {
//         type: setIsClicked,
//         button: button
//     }
// }
