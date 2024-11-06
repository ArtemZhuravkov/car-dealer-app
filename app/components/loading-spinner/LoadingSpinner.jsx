import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div
                className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent 
                       rounded-full animate-spin"
                role="status"
            />
            <span className="text-blue-500 font-medium">Loading...</span>
        </div>
    );
}
