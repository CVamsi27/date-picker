import { CalendarAction, CalendarState } from "@/types";
import { RepeatFrequency, RepeatFrequencySpecific } from "@/utils";
import { create } from "zustand";

const useStore = create<CalendarState & CalendarAction>((set) => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    isCustomModalOpen: false,
    customRepeatEvery: 1,
    customRepeatFrequency: "Daily",
    repeatFrequency: "No Repeat",
    customWeekSelected: {},
    isCustomRepeat: false,
    setYear: (newYear: number) => set({ year: newYear }),
    setMonth: (newMonth: number) => set({ month: newMonth }),
    setDate: (newDate: number) => set({ date: newDate }),
    setIsCustomModalOpen: (newIsCustomModalOpen: boolean) => set({ isCustomModalOpen: newIsCustomModalOpen }),
    setCustomRepeatEvery: (newCustomRepeatEvery: number) => set({ customRepeatEvery: newCustomRepeatEvery }),
    setCustomRepeatFrequency: (newCustomRepeatFrequency: typeof RepeatFrequencySpecific[number]) => set({ customRepeatFrequency: newCustomRepeatFrequency }),
    setRepeatFrequency: (newRepeatFrequency: typeof RepeatFrequency[number]) => set({ repeatFrequency: newRepeatFrequency }),
    setCustomWeekSelected: (newCustomWeekSelected: Record<number, boolean>) => set({ customWeekSelected: newCustomWeekSelected }),
    setIsCustomRepeat: (newIsCustomRepeat: boolean) => set({ isCustomRepeat: newIsCustomRepeat }),
}))

export default useStore;