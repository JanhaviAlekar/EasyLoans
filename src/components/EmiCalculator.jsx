import * as React from "react";
import { AmountInput } from "./AmountInput";
import { InterestAndDurationInputs } from "./InterestAndDurationInput";
import { AmountPresets } from "./AmountPresets";

function EmiCalculator() {
    return (
        <form className="px-5 py-10 mx-auto my-0 max-w-[874px]">
            <h1 className="mb-8 text-2xl text-zinc-600">
                Calculate EMI for your Home
            </h1>
            <AmountInput />
            <AmountPresets />
            <div className="px-5  max-w-[874px] ">
                <InterestAndDurationInputs />
            </div>
        </form >
    );
}

export default EmiCalculator;