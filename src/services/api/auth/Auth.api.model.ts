export interface SignupParams {
  email: string
  password: string
}

export interface LoginParams {
  email: string
  password: string
}

export interface AuthResponse {
  displayName: string
  email: string
  expiresIn: string
  idToken: string
  kind: string
  localId: string
  refreshToken: string
}