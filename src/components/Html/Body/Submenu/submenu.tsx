"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AccountOptions } from "@/components/Resources/MenuBar";
import { DatePickerRange } from "@/components/Resources/DatePicker";

export default function Submenu() {
    return (
        <div className="bg-white hidden lg:flex justify-between items-center shadow-md w-full h-14 px-2 z-20">
            <div className="flex ml-8">
                <DatePickerRange />
            </div>
            <div className="flex items-center space-x-4 mr-8">
                <AccountOptions />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}