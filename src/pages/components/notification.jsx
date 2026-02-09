import { useEffect } from 'react';

export default function Notification({ message, onClose, type = 'success' }) {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    const isSuccess = type === 'success';

    return (
        <div className="fixed top-24 right-5 z-50 animate-in fade-in slide-in-from-right-10 duration-300">
            <div className={`bg-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-b-4 ${isSuccess ? 'border-green-600' : 'border-red-600'}`}>
                <div className={`rounded-full p-1 ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {isSuccess ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    )}
                </div>
                <div>
                    <p className={`font-bold ${isSuccess ? 'text-gray-800' : 'text-gray-800'}`}>{isSuccess ? 'Success!' : 'Error'}</p>
                    <p className="text-sm text-gray-600">{message}</p>
                </div>
            </div>
        </div>
    );
}
