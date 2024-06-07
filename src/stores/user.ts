import { create } from "zustand";
import { Car } from "../global-env";

interface UserStore {
  username: string | null;
  token: string | null;
  bookmarks: Car[];
  actions: {
    setUserName(name: string): void;
    setUserToken(token: string): void;
    getUserToken(): string | null;
    addBookmark(car: Car): void;
    removeBookmark(id: number): void;
  };
}

export const useUserStore = create<UserStore>((set, get) => ({
  username: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "[]"),

  actions: {
    getUserToken: () => get().token,
    setUserName(username: string) {
      set({ username });
    },
    setUserToken(token: string | null) {
      set({ token });
    },

    addBookmark(car: Car) {
      const bookmarks = get().bookmarks;
      if (bookmarks.includes(car)) {
        return;
      }
      set({ bookmarks: [...bookmarks, car] });
      localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, car]));
    },

    removeBookmark(id: number) {
      const bookmarks = get().bookmarks;
      set({ bookmarks: bookmarks.filter((car) => car.id !== id) });
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks.filter((car) => car.id !== id))
      );
    },
  },
}));

export const {
  setUserName,
  setUserToken,
  getUserToken,
  addBookmark,
  removeBookmark,
} = useUserStore.getState().actions;
