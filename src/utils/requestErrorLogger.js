import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiBaseUrl } from "./makeUrl";
import {
  URLS_PROCESSED_IN_COMPONENTS,
} from "./constants";

const notify = (text) =>
  toast.error(text, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });

export const requestErrorLogger = () => (next) => (action) => {
  if (action && isRejectedWithValue(action)) {
    const responseUrl = action.meta.baseQueryMeta.response.url;
    let isNotificationNeeded = true;
    if (action.payload.status === 401) {
      isNotificationNeeded = false;
    } else {
      isNotificationNeeded = !(
        URLS_PROCESSED_IN_COMPONENTS.map((item) => apiBaseUrl + item).some(
          (url) =>
            url === responseUrl ||
            // for "/password/reset/confirm/"
            url === responseUrl.split("/", 7).join("/") + "/"
        )
      );
      return;
    }
    if (
      responseUrl !== apiBaseUrl + "/login/" &&
      action.payload.status === 502
    ) {
      isNotificationNeeded = false;
    }
    isNotificationNeeded &&
      notify(
        (action.payload.originalStatus >= 500 && "Server error") ||
          action.payload.data.errors[0].image[0]
      );
  }
  return next(action);
};
