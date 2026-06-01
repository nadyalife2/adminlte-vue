export type UserRole = 'Admin' | 'Editor' | 'Viewer'
export type UserStatus = 'active' | 'invited' | 'suspended'

export interface UserInput {
  name: string
  email: string
  role: UserRole
  status: UserStatus
}

export interface User extends UserInput {
  id: number
  createdAt: string
}
