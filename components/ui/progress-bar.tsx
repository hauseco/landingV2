
'use client'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full mb-3">
        <div 
          className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
        {/* Progress Dot */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-md transition-all duration-300 ease-out"
          style={{ left: `calc(${progress}% - 12px)` }}
        />
      </div>
      
      {/* Progress Text */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-900 font-medium">
          {progress}% geschafft
        </span>
        <span className="text-gray-400 font-medium">
          weiter
        </span>
      </div>
    </div>
  )
}
