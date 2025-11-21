import { Thermometer, Wind, Droplet, Bug, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

export function MedicinaFiebre() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Thermometer className="size-16 text-red-600" />
        </div>
        <h2 className="text-orange-800">PLANTAS PARA LA FIEBRE Y OTROS MALES</h2>
      </div>

      {/* Fever Section */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="size-8 text-red-700" />
            <h3 className="text-red-800">PARA LA FIEBRE</h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-red-800 mb-3">PLANTAS:</h4>
            <div className="space-y-2">
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-900"><strong>Cxuwes</strong> – verdolaga chiquita</p>
              </div>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-900"><strong>Botoncillo</strong> o Cxuboton</p>
              </div>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-red-900"><strong>Acetaminofén</strong> (preparación tradicional)</p>
              </div>
            </div>
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="text-red-800 mb-3">Dosis:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-700 mt-1">•</span>
                <span><strong>Niños de 2 años:</strong> una cucharada cada 3 horas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 mt-1">•</span>
                <span><strong>Adulto:</strong> un pocillo dar machacado revuelto en agua</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 mt-1">•</span>
                <span><strong>Jugo de sábila:</strong> un cristal o pocillo</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Other Types Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <h3 className="text-orange-800 mb-4">OTROS TIPOS DE DIARREA</h3>
      </div>

      {/* Type 4: Susto */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Wind className="size-8 text-purple-700" />
            <div>
              <h3 className="text-purple-800">4. DIARREA POR SUSTO</h3>
              <p className="text-purple-700">
                <strong>Se identifica por:</strong> líquida color blanco, muy seguida y con vómito,
                los ojos se ponen redondos y muy nerviosos.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Type 5: Lastimadura */}
      <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Droplet className="size-8 text-pink-700" />
            <div>
              <h3 className="text-pink-800">5. DIARREA POR LASTIMADURA</h3>
              <p className="text-pink-700">
                <strong>Se identifica por:</strong> espesa, huele fétido, con baba y a veces con pintas de sangre.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Type 6: Parásitos */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Bug className="size-8 text-green-700" />
            <div>
              <h3 className="text-green-800">6. DIARREA POR PARÁSITOS</h3>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-green-800 mb-3">Parásitos comunes:</h4>
            <div className="flex flex-wrap gap-2">
              {["Tricocéfalo", "Amebas", "Lombrices"].map((parasito) => (
                <div key={parasito} className="bg-green-100 px-4 py-2 rounded-full">
                  <p className="text-green-900">{parasito}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="text-green-800 mb-3">Remedios:</h4>
            <p className="text-gray-700">
              Purga con sumo de verdolaga blanca, paico, verbena, leche con ajo.
            </p>
          </div>
        </div>
      </Card>

      {/* Important Note */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="size-6 flex-shrink-0 mt-1" />
          <div>
            <h4 className="mb-2">Nota Importante:</h4>
            <p className="leading-relaxed">
              Estos remedios son parte de la sabiduría ancestral transmitida por nuestros mayores.
              En casos graves, siempre consulte con los te'wala (autoridades espirituales)
              o profesionales de salud de la comunidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
