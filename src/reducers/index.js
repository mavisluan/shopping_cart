import { combineReducers } from 'redux'
import activeTab from './activeTab'
import cartIds from './cartIds'

const rootReducer = combineReducers({
    cartIds,
    activeTab
})

export default rootReducer