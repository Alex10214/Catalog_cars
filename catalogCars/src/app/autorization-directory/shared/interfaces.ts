export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbResponse {
  idToken: string;
}

export interface Post {
  name: string;
  description: string;
  age: number;
  id?: any;
  addressIcon: string;
}

export interface FbResponseIdPost {
  name: string;
}

