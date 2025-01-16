import * as React from "react";

const presetAmounts = [
    { value: "50L", label: "50L" },
    { value: "1Cr", label: "1Cr" },
    { value: "5Cr", label: "5Cr" },
    { value: "20Cr", label: "20Cr" }
];

export function AmountPresets() {
    return (
        <div className="flex gap-2.5 mb-8 max-sm:flex-wrap">
            {presetAmounts.map((preset) => (
                <button
                    key={preset.value}
                    type="button"
                    className="px-5 py-2.5 text-sm font-semibold rounded-2xl border border-solid cursor-pointer bg-zinc-100 border-zinc-100 text-stone-300 max-sm:flex-[1_0_40%]"
                >
                    {preset.label}
                </button>
            ))}
        </div>
    );
}