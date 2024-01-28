import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { updateDetailsStatus } from "./slices/details";
import { RootState } from "./configure-store";
import { DETAILS_SLICE_LABEL } from "../constants/redux";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(updateDetailsStatus),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      DETAILS_SLICE_LABEL,
      JSON.stringify((listenerApi.getState() as RootState).details),
    );
  },
});
