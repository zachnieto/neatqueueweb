export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 border-4 border-gray-400 border-t-purple-500 rounded-full animate-spin" />
                <span className="text-gray-400 text-lg">Loading...</span>
            </div>
        </div>
    );
}

export const LoadingBar = () => {
    return (
        <div className="h-4 loading-bar bg-slate-700 rounded animate-pulse"></div>
    );
};
