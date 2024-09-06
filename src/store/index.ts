import { CalendarAction, CalendarState } from "@/types";
import { create } from "zustand";

const useStore = create<CalendarState & CalendarAction>((set) => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    isCustomModalOpen: false,
    repeatEvery: 1,
    setYear: (newYear: number) => set({ year: newYear }),
    setMonth: (newMonth: number) => set({ month: newMonth }),
    setDate: (newDate: number) => set({ date: newDate }),
    setIsCustomModalOpen: (newIsCustomModalOpen: boolean) => set({ isCustomModalOpen: newIsCustomModalOpen }),
    setRepeatEvery: (newRepeatEvery: number) => set({ repeatEvery: newRepeatEvery }),
}))

export default useStore;