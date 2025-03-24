export interface IUserResponse {
  refreshToken: string;
  token: string;
  tokenExpires: number;
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  role: Role;
  status: Status;
  __entity: string;
}

export interface Role {
  id: number;
  name: string;
  __entity: string;
}

export interface Status {
  id: number;
  name: string;
  __entity: string;
}
