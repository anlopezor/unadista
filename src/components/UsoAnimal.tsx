import { Bird, Beef, CircleDot } from "lucide-react";
import { Card } from "./ui/card";

export function UsoAnimal() {
  const animals = [
    {
      emoji: "🐔",
      name: "Gallina",
      uso: "Infundia (grasa) mezclada con plantas medicinales",
      para: "Sobar el vientre de la mujer embarazada para acelerar el parto",
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-300"
    },
    {
      emoji: "🐄",
      name: "Cozumbo",
      uso: "Viril raspado mezclado en agua panela",
      para: "Que las vacas entren en celo o recuperarlas de esterilidad",
      color: "from-brown-50 to-orange-50",
      borderColor: "border-brown-300"
    },
    {
      emoji: "🦅",
      name: "Gallinazo",
      uso: "Cocido en agua sin sal",
      para: "Curar la artritis",
      color: "from-gray-50 to-slate-50",
      borderColor: "border-gray-300"
    },
    {
      emoji: "🦡",
      name: "Comadreja",
      uso: "Preparación similar al gallinazo",
      para: "Tratar la fiebre amarilla",
      color: "from-orange-50 to-red-50",
      borderColor: "border-orange-300"
    },
    {
      emoji: "🦔",
      name: "Armadillo",
      uso: "Concha hervida con canela",
      para: "Curar el asma (tomar en ayunas durante nueve días)",
      color: "from-stone-50 to-neutral-50",
      borderColor: "border-stone-300"
    },
    {
      emoji: "🐭",
      name: "Ratón pequeño",
      uso: "Cocinado en agua",
      para: "Tratar el asma (tomar antes de cada comida)",
      color: "from-gray-50 to-zinc-50",
      borderColor: "border-gray-300"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Bird className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">EL USO ANIMAL COMO MEDICINA TRADICIONAL</h2>
        <p className="text-orange-700 mt-2">En el territorio ancestral Guanaco</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-700 shadow-md">
        <p className="text-gray-700 leading-relaxed">
          La medicina tradicional combina conocimientos espirituales transmitidos por los <strong>te'wala</strong>, 
          autoridades espirituales que poseen el don de la sanación.
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-orange-800">Remedios animales tradicionales:</h3>
      </div>

      {/* Animal Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {animals.map((animal, index) => (
          <Card 
            key={index}
            className={`bg-gradient-to-br ${animal.color} border-2 ${animal.borderColor} shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{animal.emoji}</div>
                <h3 className="text-orange-800">{animal.name}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-gray-600 mb-1"><strong>Uso:</strong></p>
                  <p className="text-gray-800">{animal.uso}</p>
                </div>
                
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-gray-600 mb-1"><strong>Para:</strong></p>
                  <p className="text-gray-800">{animal.para}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Important Quote */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg">
        <div className="flex items-start gap-4">
          <CircleDot className="size-8 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xl leading-relaxed italic">
              "Cada animal posee una energía y un espíritu particular, motivo por el cual 
              no todos pueden ser usados por cualquier sanador."
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Context */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-700">
        <h4 className="text-orange-800 mb-3">Contexto Cultural</h4>
        <p className="text-gray-700 leading-relaxed">
          El uso de animales en la medicina tradicional es una práctica ancestral que requiere 
          un profundo conocimiento espiritual y respeto por la naturaleza. Solo los te'wala 
          con la preparación adecuada pueden realizar estas curaciones, ya que cada animal 
          está conectado con fuerzas espirituales específicas que deben ser honradas y manejadas 
          con sabiduría.
        </p>
      </div>
    </div>
  );
}
