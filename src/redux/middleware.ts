import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";


export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(

  ),
  effect: (_, listenerApi) => {

  },
});
