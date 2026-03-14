import type { Session } from "@supabase/supabase-js";
import { Store } from "lucide-react";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type State = {
  isLoaded: boolean;
  session: Session | null;
};

const initialState = {
  isLoaded: false,
  session: null,
} as State;

const useSessionStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        setsession: (session: Session | null) => {
          set({ session, isLoaded: true });
        },
      },
    })),
    {
      name: "sessionStore",
    },
  ),
);
export const useSession = () => {
  const session = useSessionStore((store) => store.session);
  return session;
};

export const useIsSessionLoaded = () => {
  const isSessionLoaded = useSessionStore((Store) => Store.isLoaded);
  return isSessionLoaded;
};

export const useSetSession = () => {
  const setsession = useSessionStore((store) => store.actions.setsession);
  return setsession;
};
