export type PageType = "Home" | "About" | "Login" | "Signin";
export interface IConfig {}
export interface IUserConfig {
  userName: string | null;
  id: string;
  config: IConfig;
}
export interface IAuth {
  token: string | null;
  userConfig: IUserConfig;
}
