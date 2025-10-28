
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function EconomicChartSection() {
  // Data for main chart
  const mainChartData = {
    labels: ['2025', '2026', '2028', '2030', '2033', '2035'],
    datasets: [
      {
        label: 'Ohne PV (100% Netzstrom)',
        data: [30, 34, 37, 40, 44, 48],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        pointRadius: 6,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#EF4444',
        pointBorderWidth: 3,
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Standard-PV (40% Eigenverbrauch)',
        data: [18, 20.4, 22.2, 24, 26.4, 28.8],
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        pointRadius: 6,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#F97316',
        pointBorderWidth: 3,
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Hauseco (85% Eigenverbrauch + Flex-Tarif)',
        data: [1.35, 1.5, 1.65, 1.8, 2.0, 2.25],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderWidth: 5,
        pointRadius: 8,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#10B981',
        pointBorderWidth: 4,
        tension: 0.4,
        fill: true,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 8,
        shadowColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  }

  // Data for zoom inset (only Hauseco line)
  const insetChartData = {
    labels: ['2025', '2030', '2035'],
    datasets: [
      {
        label: 'Hauseco',
        data: [1.35, 1.8, 2.25],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderWidth: 4,
        pointRadius: 6,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#10B981',
        pointBorderWidth: 3,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const mainChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        titleColor: '#1F2937',
        bodyColor: '#4B5563',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} ct/kWh`
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 500,
          },
          color: '#6B7280',
        },
      },
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          callback: function(value) {
            return value + ' ct'
          },
          font: {
            size: 12,
          },
          color: '#6B7280',
        },
        grid: {
          color: '#E5E7EB',
          lineWidth: 1,
        },
      },
    },
  }

  const insetChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
          color: '#6B7280',
        },
      },
      y: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value + ' ct'
          },
          font: {
            size: 10,
          },
          color: '#6B7280',
        },
        grid: {
          color: '#E5E7EB',
          lineWidth: 1,
        },
      },
    },
  }

  return (
    <section className="py-20 md:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Eyebrow + Headline + Subline */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
            Strompreis-Prognose
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            So entwickeln sich Ihre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Stromkosten</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}bis 2035
          </h2>
          <p className="text-base text-gray-600">
            Durchschnittliche Kosten pro kWh bei 4.000 kWh Jahresverbrauch
          </p>
        </div>

        {/* Main Chart Container */}
        <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 md:p-8 mb-8 relative">
          <div className="h-[400px] md:h-[500px] mb-6">
            <Line data={mainChartData} options={mainChartOptions} />
          </div>

          {/* Zoom Inset - Desktop only, absolute positioned */}
          <div className="hidden lg:block absolute bottom-20 right-12 w-64 h-48 bg-white rounded-xl shadow-xl border-2 border-green-500 p-4">
            <p className="text-sm font-bold text-green-600 mb-2">Hauseco im Detail:</p>
            <div className="h-32">
              <Line data={insetChartData} options={insetChartOptions} />
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-700">Ohne PV (100% Netzstrom)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-sm text-gray-700">Standard-PV (40% Eigenverbrauch)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-700 font-semibold">Hauseco (85% Eigenverbrauch + Flex-Tarif)</span>
            </div>
          </div>
        </div>

        {/* Zoom Inset - Mobile only, below chart */}
        <div className="lg:hidden bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-2 border-green-500 p-4 mb-8">
          <p className="text-sm font-bold text-green-600 mb-2">Hauseco im Detail:</p>
          <div className="h-48">
            <Line data={insetChartData} options={insetChartOptions} />
          </div>
        </div>

        {/* Info Box - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 text-center">
            <div className="text-4xl mb-3">🔴</div>
            <p className="text-lg font-bold text-gray-900 mb-2">Ohne PV</p>
            <p className="text-2xl font-bold text-red-500 mb-1">4.000 kWh</p>
            <p className="text-sm text-gray-600">aus Netz = 100%</p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 text-center">
            <div className="text-4xl mb-3">🟠</div>
            <p className="text-lg font-bold text-gray-900 mb-2">Standard-PV</p>
            <p className="text-2xl font-bold text-orange-500 mb-1">2.400 kWh</p>
            <p className="text-sm text-gray-600">aus Netz = 60%</p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 text-center border-2 border-green-500">
            <div className="text-4xl mb-3">🟢</div>
            <p className="text-lg font-bold text-gray-900 mb-2">Hauseco</p>
            <p className="text-2xl font-bold text-green-500 mb-1">600 kWh</p>
            <p className="text-sm text-gray-600">aus Netz = 15%</p>
          </div>
        </div>

        {/* Fazit Box - Yellow */}
        <div className="bg-yellow-400 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 mb-4">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💰</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jährliche Stromkosten 2025:</h3>
              <div className="space-y-2 text-gray-900">
                <p><span className="font-semibold">Ohne PV:</span> 1.200 € <span className="text-sm text-gray-700">(4.000 kWh × 30 ct)</span></p>
                <p><span className="font-semibold">Standard-PV:</span> 720 € <span className="text-sm text-gray-700">(2.400 kWh × 30 ct)</span></p>
                <p><span className="font-semibold">Hauseco:</span> 54 € <span className="text-sm text-gray-700">(600 kWh × 9 ct)</span></p>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-gray-900/20 space-y-1">
                <p className="font-bold text-lg">→ Hauseco spart <span className="text-green-700">666 €</span> pro Jahr vs. Standard-PV</p>
                <p className="font-bold text-lg">→ Hauseco spart <span className="text-green-700">1.146 €</span> pro Jahr vs. Netzstrom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Copy */}
        <p className="text-xs text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          * Prognose basierend auf aktuellen Marktentwicklungen, CO2-Bepreisung und Netzausbau-Kosten.
          Individuelle Ersparnis abhängig von Verbrauch, Anlagengröße und Standort.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            asChild
          >
            <Link href="#angebot" className="flex items-center gap-2">
              Meine Ersparnis berechnen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
