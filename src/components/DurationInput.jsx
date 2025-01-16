import * as React from "react";
import { SliderMarks } from "./SliderMarks";

export function DurationInput() {
    const marks = [
        { value: "12M", position: "1/5" },
        { value: "60M", position: "2/5" },
        { value: "120M", position: "3/5" },
        { value: "240M", position: "4/5" },
        { value: "360M", position: "full" }
    ];

    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="duration" className="text-base text-zinc-500">Duration</label>
                <div className="flex p-1 rounded-2xl bg-neutral-100">
                    <button type="button" className="px-5 py-2 text-sm rounded-2xl cursor-pointer">
                        Months
                    </button>
                    <button type="button" className="px-5 py-2 text-sm rounded-2xl cursor-pointer">
                        Years
                    </button>
                </div>
            </div>
            <input
                id="duration"
                type="text"
                value="84 Months"
                className="p-4 w-full text-lg rounded-2xl border border-solid bg-neutral-100 border-zinc-100 text-zinc-500"
            />
            <SliderMarks marks={marks} activeIndex={1} />
        </div>
    );
}