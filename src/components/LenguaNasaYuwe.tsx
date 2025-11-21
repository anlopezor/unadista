import { Volume2, QrCode } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

export function LenguaNasaYuwe() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const vocabulary = [
    { spanish: "Buenos días", nasaYuwe: "Pura we'", pronunciation: "pura ué" },
    { spanish: "Gracias", nasaYuwe: "Pura we' fxi'zenxi", pronunciation: "pura ué fshi'zenshi" },
    { spanish: "Madre", nasaYuwe: "U' us", pronunciation: "u us" },
    { spanish: "Tierra", nasaYuwe: "Yu'", pronunciation: "iu" },
    { spanish: "Agua", nasaYuwe: "We'", pronunciation: "ué" },
    { spanish: "Sol", nasaYuwe: "Wejxa", pronunciation: "uéjsha" },
    { spanish: "Luna", nasaYuwe: "A'", pronunciation: "a" },
    { spanish: "Casa", nasaYuwe: "Ja", pronunciation: "ja" }
  ];

  const playAudio = (word: string) => {
    setPlayingAudio(word);
    
    // Simular reproducción de audio
    // En una implementación real, aquí se cargaría y reproduciría el archivo de audio
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'es-CO';
    utterance.rate = 0.7;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      setPlayingAudio(null);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Volume2 className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">NASA YUWE - NUESTRA VOZ</h2>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-700 shadow-md">
        <h3 className="text-orange-800 mb-4">Palabras básicas para comenzar:</h3>
      </div>

      {/* Vocabulary Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-gradient-to-r from-orange-700 to-amber-600 text-white">
            <tr>
              <th className="p-4 text-left">Español</th>
              <th className="p-4 text-left">Nasa Yuwe</th>
              <th className="p-4 text-left">Pronunciación</th>
              <th className="p-4 text-center">Audio</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((item, index) => (
              <tr key={index} className="border-b hover:bg-orange-50 transition-colors">
                <td className="p-4">{item.spanish}</td>
                <td className="p-4 text-orange-700">{item.nasaYuwe}</td>
                <td className="p-4 text-gray-600 italic">{item.pronunciation}</td>
                <td className="p-4 text-center">
                  <Button
                    size="sm"
                    className="bg-orange-700 hover:bg-orange-800"
                    onClick={() => playAudio(item.pronunciation)}
                    disabled={playingAudio === item.nasaYuwe}
                  >
                    <Volume2 className="size-4 mr-2" />
                    {playingAudio === item.nasaYuwe ? 'Reproduciendo...' : 'Escuchar'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QR Code Section */}
      <Card className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <QrCode className="size-24 text-orange-700" />
          </div>
          <div>
            <p className="text-orange-900">
              <strong>Escanea el código QR</strong> para acceder a las pronunciaciones en audio
            </p>
            <p className="text-orange-700 mt-2 italic">
              (Audio de pronunciación - próximamente disponible)
            </p>
          </div>
        </div>
      </Card>

      {/* Symbols Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <h3 className="text-orange-800 mb-4 text-center">Símbolos y Representaciones NASA</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center shadow-sm">
            <div className="text-4xl mb-2">☀️</div>
            <p className="text-orange-700">Wejxa (Sol)</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center shadow-sm">
            <div className="text-4xl mb-2">🌙</div>
            <p className="text-orange-700">A' (Luna)</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center shadow-sm">
            <div className="text-4xl mb-2">💧</div>
            <p className="text-orange-700">We' (Agua)</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center shadow-sm">
            <div className="text-4xl mb-2">🌍</div>
            <p className="text-orange-700">Yu' (Tierra)</p>
          </div>
        </div>
      </div>

      {/* Featured Phrase */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg">
        <h4 className="text-center mb-4">Frase del día:</h4>
        <p className="text-center text-2xl mb-2">
          "Pura we' fxi'zenxi yu' we'sx"
        </p>
        <p className="text-center text-amber-100 italic">
          (Gracias por los saberes de la tierra)
        </p>
      </div>
    </div>
  );
}