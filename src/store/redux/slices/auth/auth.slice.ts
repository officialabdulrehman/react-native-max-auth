import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthResponse } from "../../../../services/api/auth/Auth.api.model"

type State = {
  token: string
  tokenData?: AuthResponse
}

const initialState: State = {
  token: "",
  tokenData: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, { payload }: PayloadAction<AuthResponse>) => {
      state.token = payload.idToken
      state.tokenData = payload
    },
    logout: (state, action: PayloadAction<void>) => {
      state.token = ""
      state.tokenData = undefined
    }
  }
})

export const authReducer = authSlice.reducer
export const { authenticate, logout } = authSlice.actions