import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: 'Default title',
    component: <div>Default component</div>,
    handleSave: (e) => {
        console.log('handle default')
    }
}

const ModalReducer = createSlice({
    name: 'ModalReducer',
    initialState,
    reducers: {
        setComponent: (state, action) => {
            state.title = action.payload.title;
            state.component = action.payload.component;
        },
        setHandleSave: (state, action) => {
            state.handleSave = action.payload;
        }
    }
});

export const { setComponent, setHandleSave } = ModalReducer.actions

export default ModalReducer.reducer