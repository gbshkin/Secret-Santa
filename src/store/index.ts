import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import siteReducer from './modules/site'

const index = () => configureStore({
  reducer: {
    site: siteReducer,
  },

})

export const wrapper = createWrapper(index, { debug: false })