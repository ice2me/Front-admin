import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../../utils/makeUrl";
import { logout, setToken } from "../slices/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: apiBaseUrl,
  headers: {
    "content-type": "application/json"
  },
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().userStore;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const isError = result.error && result.error.status === 401;
  /* REFRESH TOKEN ON CLIENT */
  // const isExpired = Date.now() > api.getState().userStore.expiresAt;
  if (isError /* || isExpired */) {
    // try to get a new token
    const refresh = api.getState().userStore.token.refresh;
    const refreshResult = await baseQuery(
      { url: "token/refresh/", method: "POST", body: { refresh } },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // store the new token
      api.dispatch(setToken(refreshResult.data.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
