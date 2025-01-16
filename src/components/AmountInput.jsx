import React, { useState } from "react";

export function AmountInput() {
    const [amount, setAmount] = useState("2000000"); // Store numeric value
    const formattedAmount = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
    }).format(amount);

    const handleInputChange = (e) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        setAmount(rawValue || "0"); // Fallback to "0" if input is empty
    };

    return (
        <div>
            <label htmlFor="amount" className="mb-2.5 text-base text-zinc-500">
                Amount
            </label>
            <input
                id="amount"
                type="text"
                value={formattedAmount} // Display formatted value
                onChange={handleInputChange} // Handle user input
                className="p-4 mb-2.5 w-full text-lg rounded-2xl border border-solid bg-neutral-100 border-zinc-100 text-zinc-500"
            />
            <div className="mb-5 text-sm text-zinc-400">
                {convertToWords(amount)} {/* Display amount in words */}
            </div>
        </div>
    );
}

// Utility to convert number to words
function convertToWords(number) {
    const units = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ];
    const tens = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];
    const teens = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];

    function convert(n) {
        if (n < 10) return units[n];
        if (n < 20) return teens[n - 10];
        if (n < 100)
            return tens[Math.floor(n / 10)] + " " + units[n % 10];
        if (n < 1000)
            return (
                units[Math.floor(n / 100)] +
                " Hundred " +
                convert(n % 100)
            );
        if (n < 100000)
            return (
                convert(Math.floor(n / 1000)) +
                " Thousand " +
                convert(n % 1000)
            );
        if (n < 10000000)
            return (
                convert(Math.floor(n / 100000)) +
                " Lakh " +
                convert(n % 100000)
            );
        return (
            convert(Math.floor(n / 10000000)) +
            " Crore " +
            convert(n % 10000000)
        );
    }

    return convert(Number(number));
}
