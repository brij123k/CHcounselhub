import React from "react";

export default function PageLoading() {
    return (
        <div className="flex w-[100vw] flex-col items-center justify-center h-screen bg-white z-[2000]">
            <div className="bg-white p-[10px]">
                <img className="h-20" src="/images/logonewfav.png" />
            </div>
        </div>
    );
}