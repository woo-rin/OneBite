import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const usecountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                const count = get().count;
                set({
                  count: count + 1,
                });
                set((state) => {
                  state.count += 0;
                });
              },
              decrease: () => {
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countstore",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

usecountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listener
    console.log(count, prevCount);

    const store = usecountStore.getState();
    // usecountStore.setState((store) => {});
  },
);

// export const usecountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       const count = get().count;
//       set({
//         count: count + 1,
//       });
//       set((store) => ({
//         count: store.count,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = usecountStore((Store) => Store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = usecountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = usecountStore((store) => store.actions.decrease);
  return decrease;
};
