import { ErrorBoundary } from "react-error-boundary";
import { FiAlertCircle } from "react-icons/fi";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen justify-center items-center bg-imagegram-bg px-4">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-border">
        <div className="flex flex-col items-center text-center space-y-4">
          <FiAlertCircle className="text-red-500 w-10 h-10" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Oops! Something went wrong.
          </h1>
          <p className="text-sm text-gray-600">{error.message}</p>
          <button
            onClick={resetErrorBoundary}
            className="bg-brand-green hover:bg-brand-green-light text-white px-6 py-2 rounded-lg transition cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
