import { Calendar } from "lucide-react";
import { Card } from "./ui/card";

export function Cronologia() {
  const events = [
    {
      year: "500 d. C.",
      title: "Primer asentamiento humano",
      description: "Se registran los primeros asentamientos del pueblo Guanaco, habitantes ancestrales del territorio donde hoy se ubica el resguardo.",
      color: "from-blue-50 to-cyan-50"
    },
    {
      year: "Siglos XII – XV",
      title: "Desarrollo cultural",
      description: "Se consolida la organización social y territorial de los Guanaco. Surgen autoridades tradicionales, prácticas espirituales y manejo colectivo del territorio.",
      color: "from-purple-50 to-violet-50"
    },
    {
      year: "1530 – 1650",
      title: "Resistencia indígena",
      description: "Los pueblos de Tierradentro (Nasa, Guanacos y otros) realizan una resistencia armada de más de 100 años contra la colonización española. Participan caciques y liderazgos indígenas reconocidos en la región.",
      color: "from-red-50 to-orange-50"
    },
    {
      year: "1615",
      title: "Concesión del Título Colonial",
      description: "La Corona Española entrega el Título del Resguardo de Guanacas, reconociendo el territorio indígena y sus linderos ancestrales.",
      color: "from-yellow-50 to-amber-50"
    },
    {
      year: "Siglo XVII – XIX",
      title: "Epidemias y reducción demográfica",
      description: "Enfermedades como viruela y disentería diezman a la población indígena. Comienza un proceso de mezcla étnica con otros pueblos (Misak, Coconuco, Puracé, entre otros).",
      color: "from-gray-50 to-slate-50"
    },
    {
      year: "1894",
      title: "Reconstrucción del Cabildo Guanaco",
      description: "Se reorganiza el cabildo indígena tras años de desestructuración. Se re-expide el Título Colonial, confirmando límites del Resguardo Guanaco. Se fortalecen las autoridades y la defensa comunitaria del territorio.",
      color: "from-green-50 to-emerald-50"
    },
    {
      year: "1944 – 1945",
      title: "Parcelación y liquidación del resguardo",
      description: "El gobierno nacional ordena la liquidación del Resguardo de Guanacas, argumentando falta de escrituras originales. Las tierras comienzan a ser parceladas y entregadas a colonos. Se debilita la organización indígena tradicional.",
      color: "from-red-50 to-pink-50"
    },
    {
      year: "1965",
      title: "Reorganización indígena y nacimiento del Cabildo La Gaitana",
      description: "Líderes indígenas reorganizan el cabildo con apoyo de la ANUC. Se inicia la recuperación de tierras y la exigencia del reconocimiento legal como resguardo. Surge formalmente el Cabildo Indígena La Gaitana.",
      color: "from-orange-50 to-amber-50"
    },
    {
      year: "1990",
      title: "Reconocimiento oficial",
      description: "El Estado colombiano reconoce nuevamente la existencia jurídica del resguardo. Se consolida la estructura político-organizativa y la defensa territorial.",
      color: "from-blue-50 to-sky-50"
    },
    {
      year: "1990 – 2020",
      title: "Fortalecimiento cultural y político",
      description: "Recuperación de prácticas espirituales, ceremoniales y medicinales. Fortalecimiento de la identidad Nasa y reafirmación de raíces del pueblo Guanaco. Crecimiento de programas educativos, de salud, territorio, justicia indígena y protección ambiental.",
      color: "from-green-50 to-lime-50"
    },
    {
      year: "2021",
      title: "Actualización del Estudio Etnográfico Territorial (ESEJTT)",
      description: "El resguardo consolida y registra su memoria histórica, espiritual, territorial y organizativa en el documento institucional.",
      color: "from-purple-50 to-fuchsia-50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Calendar className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">CRONOLOGÍA DE EVENTOS IMPORTANTES</h2>
        <h3 className="text-orange-700 mt-2">Resguardo Indígena La Gaitana</h3>
        <p className="text-gray-600 italic">(Territorio Ancestral Guanaco – Inzá, Cauca)</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-amber-400 to-orange-300 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-orange-700 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-gradient-to-br ${event.color} shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="p-6 space-y-3">
                  <div className="inline-block bg-orange-700 text-white px-4 py-1 rounded-full">
                    <span>{event.year}</span>
                  </div>
                  <h4 className="text-orange-800">{event.title}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg mt-12">
        <h3 className="mb-4 text-center">Del pasado al presente</h3>
        <p className="leading-relaxed text-center">
          Esta línea de tiempo representa siglos de resistencia, adaptación y fortalecimiento cultural. 
          Desde los primeros asentamientos Guanacos hasta la consolidación del Resguardo La Gaitana, 
          nuestra historia es testimonio de la perseverancia de un pueblo que nunca ha renunciado 
          a su identidad y su territorio.
        </p>
      </div>
    </div>
  );
}
