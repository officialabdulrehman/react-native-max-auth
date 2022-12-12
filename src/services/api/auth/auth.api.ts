import { AUTH_URL, FIREBASE_WEB_API_KEY } from "../../../config/env"
import { api } from "../../../lib/api/api.base"
import { AuthResponse, LoginParams, SignupParams } from "./Auth.api.model"

class AuthApi {

  public async signup(data: SignupParams): Promise<AuthResponse> {
    const { data: result } = await api.post(`${AUTH_URL}:signUp?key=${FIREBASE_WEB_API_KEY}`, { ...data, returnSecureToken: true }, {})
    return result
  }

  public async login(data: LoginParams): Promise<AuthResponse> {
    const { data: result } = await api.post(`${AUTH_URL}:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`, { ...data, returnSecureToken: true, }, {})
    return result
  }

  private transformData(data: any) {
  }

}

export const authApi = new AuthApi()