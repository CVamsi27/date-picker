import { ChangeEvent } from "react";

export interface CalendarState {
    year: number;
    month: number;
    date: number;
    isCustomModalOpen: boolean;
    repeatEvery: number;
}

export interface CalendarAction {
    setYear: (year: CalendarState["year"]) => void;
    setMonth: (month: CalendarState["month"]) => void;
    setDate: (date: CalendarState["date"]) => void;
    setIsCustomModalOpen: (isCustomModalOpen: CalendarState["isCustomModalOpen"]) => void;
    setRepeatEvery: (repeatEvery: CalendarState["repeatEvery"]) => void;
}

export interface CloseButtonProps {
    setCloseFunction: (isOpen: boolean) => void;
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