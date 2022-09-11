import { IUserState } from '@/models';
import {configureStore} from '@reduxjs/toolkit'
import { userSlice } from "./states";
export interface AppStore{
    user:IUserState
}

export default configureStore<AppStore>({
    reducer:{
        user:userSlice.reducer
    }
})