import { IUserState } from '@/models'
import { getLocalStorage, setLocalStorage,clearLocalStorage } from '@/utilities'
import {createSlice} from '@reduxjs/toolkit'
const initialState:IUserState = {token:""}


export const userSlice = createSlice({
    name:'user',
    initialState:getLocalStorage('user')?JSON.parse(getLocalStorage('user') as string):initialState,
    reducers:{
        setUser:(state,action)=>{
            setLocalStorage('user',action.payload)
            return action.payload
        },
        removeSession:()=>{
            clearLocalStorage()
            return initialState
        }
        
    }
})

export const {setUser,removeSession} = userSlice.actions