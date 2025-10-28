
export default function EconomicScenarios() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="relative inline-block">
              <span className="relative z-10">Wirtschaftlichkeit</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}– transparent & realistisch
          </h2>
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Scenario A: Without Storage */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Szenario A: Ohne Speicher</h3>
            
            {/* Assumptions */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-[#EDEDED]">
                Verbrauch: 4.500 kWh
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-[#EDEDED]">
                Südausrichtung
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-[#EDEDED]">
                Dach: 30–35°
              </span>
            </div>
            
            {/* Results */}
            <div className="space-y-4 mb-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-[#EDEDED]">
                <div className="text-sm text-gray-600 mb-1">Autarkie</div>
                <div className="text-3xl font-bold text-gray-900">~35–45 %</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-[#EDEDED]">
                <div className="text-sm text-gray-600 mb-1">Amortisation</div>
                <div className="text-3xl font-bold text-gray-900">8–12 Jahre</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              Werte je nach Haushalt/Region variabel.
            </p>
          </div>

          {/* Scenario B: With Storage + Premium */}
          <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Szenario B: Mit Speicher (10 kWh) + Premium</h3>
            
            {/* Assumptions */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-yellow-50 text-yellow-900 text-sm rounded-full border border-yellow-400">
                Verbrauch: 4.500 kWh
              </span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-900 text-sm rounded-full border border-yellow-400">
                Speicher: 10 kWh
              </span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-900 text-sm rounded-full border border-yellow-400">
                dynamische Tarife aktiv
              </span>
            </div>
            
            {/* Results */}
            <div className="space-y-4 mb-6">
              <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-400">
                <div className="text-sm text-gray-600 mb-1">Autarkie</div>
                <div className="text-3xl font-bold text-gray-900">~60–75 %</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-400">
                <div className="text-sm text-gray-600 mb-1">Amortisation</div>
                <div className="text-3xl font-bold text-gray-900">10–14 Jahre</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              Premium optimiert Lastverschiebung und günstige Zeitfenster.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          Individuelle Berechnung im Angebot – wir rechnen mit deinen echten Daten.
        </p>
      </div>
    </section>
  )
}
