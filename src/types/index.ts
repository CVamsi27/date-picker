import { RepeatFrequency, RepeatFrequencySpecific } from "@/utils";
import { ChangeEvent, FormEvent } from "react";

export interface CalendarState {
    year: number;
    month: number;
    date: number;
    isCustomModalOpen: boolean;
    customRepeatEvery: number;
    customRepeatFrequency: typeof RepeatFrequencySpecific[number];
    repeatFrequency: typeof RepeatFrequency[number];
    customWeekSelected: Record<number, boolean>;
    isCustomRepeat: boolean;
}

export interface CalendarAction {
    setYear: (year: CalendarState["year"]) => void;
    setMonth: (month: CalendarState["month"]) => void;
    setDate: (date: CalendarState["date"]) => void;
    setIsCustomModalOpen: (isCustomModalOpen: CalendarState["isCustomModalOpen"]) => void;
    setCustomRepeatEvery: (customRepeatEvery: CalendarState["customRepeatEvery"]) => void;
    setCustomRepeatFrequency: (customRepeatFrequency: CalendarState["customRepeatFrequency"]) => void;
    setRepeatFrequency: (repeatFrequency: CalendarState["repeatFrequency"]) => void;
    setCustomWeekSelected: (customWeekSelected: CalendarState["customWeekSelected"]) => void;
    setIsCustomRepeat: (isCustomRepeat: CalendarState["isCustomRepeat"]) => void;
}

export interface CloseButtonProps {
    setCloseFunction: () => void;
}

export interface InputProps<T> {
    label: string;
    name: string;
    value: T;
    onClickFn: (value: T) => void;
}

export interface DropdownProps<T> {
    label: string;
    name: string;
    defaultValue: string;
    onChangeFn: (e: ChangeEvent<HTMLSelectElement>) => void;
    itemsArray: Array<T>;
}

export interface ButtonProps {
    name: string;
    onClickFn: (e: FormEvent<HTMLButtonElement>) => void;
}