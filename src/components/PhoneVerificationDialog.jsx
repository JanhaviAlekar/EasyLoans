import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export function PhoneVerificationDialog({ open, onClose, onSendOTP, loading }) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendOTP(phoneNumber);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="text-xl font-semibold">
                Enter Phone Number
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} className="space-y-4 min-w-[300px] py-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="+91XXXXXXXXXX"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                    >
                        {loading ? 'Sending...' : 'Send OTP'}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export function OTPVerificationDialog({ open, onClose, onVerifyOTP, loading }) {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerifyOTP(otp);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="text-xl font-semibold">
                Verify OTP
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} className="space-y-4 min-w-[300px] py-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter 6-digit OTP"
                            className="w-full p-3 border border-gray-300 rounded-md"
                            maxLength="6"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                    >
                        {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
} 