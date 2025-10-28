
'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ProgressBar from './ui/progress-bar'

export default function SolarQuoteForm() {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null)

  const handleOptionSelect = (option: 'yes' | 'no') => {
    setSelectedOption(option)
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* In 2min Badge */}
        <div className="inline-flex items-center mb-4">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
            In 2min
          </div>
        </div>
        
        {/* Yellow Banner */}
        <div className="bg-yellow-400 text-black px-6 py-4 rounded-2xl text-xl md:text-2xl font-bold inline-block">
          Dein Solarangebot anfragen!
        </div>
      </div>

      {/* Question Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Bist Du Eigentümer des Hauses?
        </h1>

        {/* Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Ja Button */}
          <button
            onClick={() => handleOptionSelect('yes')}
            className={cn(
              "flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 min-w-[160px] min-h-[140px] transform hover:scale-105",
              selectedOption === 'yes'
                ? "bg-yellow-400 border-yellow-400 shadow-xl scale-105"
                : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow-lg"
            )}
          >
            <div className={cn(
              "rounded-full p-3 mb-3 transition-all duration-300",
              selectedOption === 'yes' 
                ? "bg-white shadow-md" 
                : "bg-white border border-gray-200"
            )}>
              <Check className={cn(
                "w-8 h-8 transition-colors duration-300",
                selectedOption === 'yes' ? "text-green-600" : "text-gray-600"
              )} />
            </div>
            <span className="text-lg font-medium text-gray-900">Ja</span>
          </button>

          {/* Nein Button */}
          <button
            onClick={() => handleOptionSelect('no')}
            className={cn(
              "flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-300 min-w-[160px] min-h-[140px] transform hover:scale-105",
              selectedOption === 'no'
                ? "bg-yellow-400 border-yellow-400 shadow-xl scale-105"
                : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow-lg"
            )}
          >
            <div className={cn(
              "rounded-full p-3 mb-3 transition-all duration-300",
              selectedOption === 'no' 
                ? "bg-white shadow-md" 
                : "bg-white border border-gray-200"
            )}>
              <X className={cn(
                "w-8 h-8 transition-colors duration-300",
                selectedOption === 'no' ? "text-red-600" : "text-gray-600"
              )} />
            </div>
            <span className="text-lg font-medium text-gray-900">Nein</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={12} />
    </div>
  )
}
