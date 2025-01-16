import React, { useState } from "react";

export function InterestAndDurationInputs({ 
    interestRate, 
    setInterestRate, 
    tenure, 
    setTenure 
}) {
    const [isMonths, setIsMonths] = useState(true); // Toggle between months and years

    // Marks for sliders
    const interestMarks = [1, 5, 10, 15, 20]; // In percentage
    const durationMarksMonths = [12, 60, 120, 240, 360]; // In months
    const durationMarksYears = [1, 5, 10, 20, 30]; // In years

    // Toggle between months and years
    const toggleDurationUnit = (unit) => {
        if (unit === "months") {
            setIsMonths(true);
            // Convert years to months
            setTenure(tenure * 12);
        } else {
            setIsMonths(false);
            // Convert months to years
            setTenure(Math.round(tenure / 12));
        }
    };

    // Handle duration change based on unit
    const handleDurationChange = (value) => {
        setTenure(value);
    };

    return (
        <div className="flex gap-8">
            {/* Interest Rate Section */}
            <div className="w-full md:w-1/2">
                <label className="mb-4 block text-base text-gray-500">
                    Interest Rate (p.a.)
                </label>
                <div className="p-4 mb-4 bg-gray-100 text-center text-lg rounded-lg">
                    {interestRate}%
                </div>
                <div className="relative w-full h-1 bg-gray-200">
                    {interestMarks.map((mark, index) => (
                        <div
                            key={mark}
                            className={`absolute w-3 h-3 ${
                                interestRate === mark ? "bg-blue-500" : "bg-gray-300"
                            } rounded-full cursor-pointer`}
                            style={{
                                left: `${(index / (interestMarks.length - 1)) * 100}%`,
                            }}
                            onClick={() => setInterestRate(mark)}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                    {interestMarks.map((mark) => (
                        <span key={mark}>{mark}%</span>
                    ))}
                </div>
            </div>

            {/* Duration Section */}
            <div className="w-full md:w-1/2">
                <div className="flex py-2">
                    <label className="mr-4 text-base text-gray-500">Duration</label>
                    <div className="flex justify-center items-center">
                        <button
                            type="button"
                            onClick={() => toggleDurationUnit("months")}
                            className={`px-4 text-sm font-semibold rounded-lg ${
                                isMonths
                                    ? "bg-gray-200 text-gray-500"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }`}
                        >
                            Months
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleDurationUnit("years")}
                            className={`px-4 ml-2 text-sm font-semibold rounded-lg ${
                                isMonths
                                    ? "bg-gray-100 hover:bg-gray-200"
                                    : "bg-gray-200 text-gray-500"
                            }`}
                        >
                            Years
                        </button>
                    </div>
                </div>

                <div className="p-4 mb-4 bg-gray-100 text-center text-lg rounded-lg">
                    {isMonths ? `${tenure} Months` : `${Math.round(tenure/12)} Years`}
                </div>
                <div className="relative w-full h-1 bg-gray-200">
                    {(isMonths ? durationMarksMonths : durationMarksYears).map(
                        (mark, index) => (
                            <div
                                key={mark}
                                className={`absolute w-3 h-3 ${
                                    (isMonths && tenure === mark) ||
                                    (!isMonths && Math.round(tenure/12) === mark)
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                                } rounded-full cursor-pointer`}
                                style={{
                                    left: `${
                                        (index /
                                            ((isMonths ? durationMarksMonths : durationMarksYears)
                                                .length -
                                                1)) *
                                        100
                                    }%`,
                                }}
                                onClick={() => handleDurationChange(isMonths ? mark : mark * 12)}
                            />
                        )
                    )}
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                    {(isMonths ? durationMarksMonths : durationMarksYears).map((mark) => (
                        <span key={mark}>
                            {isMonths ? `${mark}M` : `${mark}Y`}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
