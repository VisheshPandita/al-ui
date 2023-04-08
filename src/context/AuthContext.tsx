import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getConfig } from "../store/features/auth";
import { authenticate } from "../store/features/common";
import { IAuth, IUserConfig } from "../store/types";

export const AuthContext = createContext<{
  username: string | null;
  token: string | null;
  login: any;
  logout: any;
}>({
  username: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const baseURL = "";

const AuthContextProvider = ({ children }: any) => {
  const auth: IAuth = useSelector((state: any) => state?.auth);
  const [username, setUsername] = useState(auth?.userConfig?.userName);
  const [token, setToken] = useState(auth?.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    console.log({ username, password });
    return (
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (username === "manish@gmail.com" && password === "manish123")
            resolve({
              data: { token: "abc", userConfig: { userName: "manish" } },
            });
          else reject();
        }, 1000)
      )

        // return axios
        //   .post(
        //     `${baseURL}/login`,
        //     {},
        //     {
        //       auth: { username, password },
        //     }
        //   )
        .then((res: any) => {
          console.log(res);
          let data = res.data;
          setToken(data.token);
          setUsername(data.userConfig.userName);
          // dispatch(authenticate({ token: data.token }));
          dispatch(authenticate({ token: "abcd" }));

          dispatch(getConfig({ userConfig: data.userConfig }));
          navigate("/profile");
        })
    );
  };
  const logout = () => {
    setToken(null);
    setUsername(null);
    dispatch(authenticate({ token: null }));
    dispatch(getConfig({ userConfig: null }));
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ username, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
