import { createSlice } from "@reduxjs/toolkit";
// import { handleSideModal } from "../action";


const initialState = {
isSidePopUpOpen:false,
showSubHeader:false,
currentStep:1
}


const modalsData = createSlice({
    name: 'modalsData',
    initialState,
    reducers: {
        handleSideModal: (state,{payload}) => {
            state.isSidePopUpOpen = payload;
          },
        setCurrentStep: (state,{payload}) => {
            state.currentStep = payload;
          },
    },
    //for api call
    // extraReducers: {

    //     [handleSideModal.fulfilled]: (state, { payload }) => {
    //         state.isSidePopUpOpen=payload
    //     },
    //     [handleSideModal.pending]: (state, { payload }) => {
    //         state.isSidePopUpOpen=payload
    //     },
    //     [handleSideModal.rejected]: (state, { payload }) => {
    //         state.isSidePopUpOpen=payload
    //     },
    // }
})

export const { handleSideModal,setCurrentStep } = modalsData.actions;
export default modalsData.reducer;