import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export function ResultsPieChart({ principal, totalInterest }) {
    const pieChartData = [
        { title: 'Principal', value: Number(principal), color: '#4CAF50' },
        { title: 'Interest', value: totalInterest, color: '#FFA726' }
    ];

    const totalAmount = Number(principal) + totalInterest;
    const principalPercentage = ((Number(principal) / totalAmount) * 100).toFixed(1);
    const interestPercentage = ((totalInterest / totalAmount) * 100).toFixed(1);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Breakdown</h2>
            <div className="w-48 h-48 mb-4">
                <PieChart
                    data={pieChartData}
                    lineWidth={40}
                    rounded
                    animate
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                    labelStyle={{
                        fontSize: '8px',
                        fontFamily: 'sans-serif',
                        fill: '#fff',
                    }}
                    labelPosition={75}
                />
            </div>
            <div className="flex flex-col gap-2 w-full max-w-xs">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
                    <span className="text-sm text-gray-600">
                        Principal: {principalPercentage}%
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FFA726]"></div>
                    <span className="text-sm text-gray-600">
                        Interest: {interestPercentage}%
                    </span>
                </div>
            </div>
        </div>
    );
} 