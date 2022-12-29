import { useState, useCallback, useEffect } from "react";

const storageName = "data";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((jwtToken, user) => {
    setReady(false);
    setToken(jwtToken);
    setUser(user);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        user: user,
        token: jwtToken
      })
    );

    setReady(true);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    // window.Intercom("shutdown");
    localStorage.removeItem(storageName);
    if (localStorage.getItem("isLoginUsed") !== null) {
      localStorage.removeItem("isLoginUsed");
    }
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.user);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, user, ready };
};


export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(url, {method, body, headers});
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Oops, something went wrong')
      }

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);
  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError}}