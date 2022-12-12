import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthResponse } from "../../../../services/api/auth/Auth.api.model"

type State = {
  token: string
  tokenData?: AuthResponse
  isAuthenticated: boolean
}

const initialState: State = {
  token: "",
  tokenData: undefined,
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, { payload }: PayloadAction<AuthResponse>) => {
      state.token = payload.idToken
      state.tokenData = payload
      state.isAuthenticated = true
      AsyncStorage.setItem("tokenData", JSON.stringify(payload))
      AsyncStorage.setItem("token", payload.idToken)
    },
    logout: (state, action: PayloadAction<void>) => {
      state.token = ""
      state.tokenData = undefined
      state.isAuthenticated = false
      AsyncStorage.removeItem("tokenData")
      AsyncStorage.removeItem("token")
    }
  }
})

export const authReducer = authSlice.reducer
export const { authenticate, logout } = authSlice.actions