import { TOGGLE_ACTIVETAB } from '../action'

const activeTab = ( state='items', action ) => {
    const { activeTab, type }= action

    switch (type) {
        case TOGGLE_ACTIVETAB:
            return activeTab
        default:
            return state
    }
}

export default activeTab