import * as React from "react";
import { AmountInput } from "./AmountInput";
import { InterestAndDurationInputs } from "./InterestAndDurationInput";
import { AmountPresets } from "./AmountPresets";
import { ResultsPieChart } from "./ResultsPieChart";
import { useState } from "react";

function EmiCalculator() {
    // State management with proper number type initialization
    const [principal, setPrincipal] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [emiDetails, setEmiDetails] = useState({
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
        showResults: false
    });

    // Handler for principal amount
    const handlePrincipalChange = (value) => {
        setPrincipal(Number(value));
    };

    // Handler for interest rate
    const handleInterestChange = (value) => {
        setInterestRate(Number(value));
    };

    // Handler for tenure
    const handleTenureChange = (value) => {
        setTenure(Number(value));
    };

    // EMI calculation function
    const calculateEmi = (e) => {
        e.preventDefault();
        
        // Convert values to numbers and check if they're valid
        const principalAmount = Number(principal);
        const rate = Number(interestRate);
        const tenureYears = Number(tenure);

        if (principalAmount > 0 && rate > 0 && tenureYears > 0) {
            try {
                // Convert interest rate to monthly rate (yearly rate / 12 / 100)
                const monthlyRate = rate / 12 / 100;
                
                // Convert tenure to months
                const totalMonths = tenureYears * 12;
                
                // Calculate EMI using formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
                const emi = principalAmount * monthlyRate * 
                    (Math.pow(1 + monthlyRate, totalMonths)) / 
                    (Math.pow(1 + monthlyRate, totalMonths) - 1);
                
                // Calculate total payment and interest
                const totalPayment = emi * totalMonths;
                const totalInterest = totalPayment - principalAmount;

                setEmiDetails({
                    emi: Math.round(emi),
                    totalInterest: Math.round(totalInterest),
                    totalPayment: Math.round(totalPayment),
                    showResults: true
                });
            } catch (error) {
                console.error("Calculation error:", error);
                alert("Error in calculation. Please check your input values.");
            }
        } else {
            alert("Please enter valid values greater than 0 for all fields");
        }
    };

    return (
        <div className="px-5 py-10 mx-auto my-0 max-w-[874px]">
            <h1 className="mb-8 text-2xl text-zinc-600">
                Calculate EMI for your Home
            </h1>
            
            <form onSubmit={calculateEmi}>
                <AmountInput 
                    value={principal} 
                    onChange={handlePrincipalChange} 
                />
                <AmountPresets />
                <div className="px-5 max-w-[874px]">
                    <InterestAndDurationInputs 
                        interestRate={interestRate}
                        setInterestRate={handleInterestChange}
                        tenure={tenure}
                        setTenure={handleTenureChange}
                    />
                </div>
                
                <button 
                    type="submit"
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Calculate EMI
                </button>
            </form>

            {emiDetails.showResults && (
                <div className="results mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700">EMI Details</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Monthly EMI:</span>
                                    <span className="font-semibold">₹{emiDetails.emi.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Principal Amount:</span>
                                    <span className="font-semibold">₹{Number(principal).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Interest:</span>
                                    <span className="font-semibold">₹{emiDetails.totalInterest.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Payment:</span>
                                    <span className="font-semibold">₹{emiDetails.totalPayment.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <ResultsPieChart 
                            principal={principal}
                            totalInterest={emiDetails.totalInterest}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default EmiCalculator;