import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  fetchOptions:{
    credentials: "include",
  }
});

export const signIn = async () => {
  await authClient.signIn.social({
  provider: "google",
  callbackURL: import.meta.env.VITE_FRONTEND_URL+"/songs"

});

};
export const signOut = async () => {
  await authClient.signOut();
}

export const {   useSession } = authClient;
