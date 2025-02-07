import { HYDRATE } from 'next-redux-wrapper';
import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeviceState {
  mobile: boolean;
}

const initialState: DeviceState = {
  mobile: false,
};

const name = 'site';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    isMobile(state, action: PayloadAction<boolean>) {
      state.mobile = action.payload;
    },
  },
  // extraReducers: (builder: ActionReducerMapBuilder<DeviceState>) => {
  //   builder.addCase(
  //     HYDRATE,
  //     (state, action: PayloadAction<{ site: DeviceState }>) => {
  //       return {
  //         ...state,
  //         ...action.payload.site,
  //       };
  //     }
  //   );
  // },
});


export const mobileSelector = (state: { site: DeviceState }) => state.site.mobile;
export const { isMobile } = slice.actions;
export default slice.reducer;