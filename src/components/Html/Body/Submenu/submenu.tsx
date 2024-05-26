"use client"

import { DatePickerRange } from "@/components/Resources/DatePicker";

export default function Submenu() {
    return (
        <div className="bg-white hidden lg:flex justify-between items-center shadow-md w-full h-14 px-2 z-20">
            <div className="flex ml-8">
                <DatePickerRange />
            </div>
        </div>
    )
}