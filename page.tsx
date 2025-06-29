import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LegamiLandingPage() {
  const [selectedPen, setSelectedPen] = useState(null);

  const pens = [
    {
      name: "Legami Corgi Pen",
      image: "/images/corgi-pen.jpg",
      description: "Schrijf foutloos en cute! Deze uitwisbare gelpen met corgi-design maakt studeren leuk.",
      price: "€4,99"
    },
    {
      name: "Legami Bunny Pen",
      image: "/images/bunny-pen.jpg",
      description: "Perfect voor je bullet journal. Vervaagt geen papier en is makkelijk navulbaar.",
      price: "€4,99"
    },
    {
      name: "3-Kleuren Refill Pen",
      image: "/images/multicolor-pen.jpg",
      description: "Drie kleuren in één pen – en allemaal uitwisbaar! Praktisch én schattig.",
      price: "€5,99"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Schrijf. Wis. Herhaal.</h1>
        <p className="text-lg text-gray-600">De leukste uitwisbare pennen van Legami</p>
        <Button className="mt-4">Shop Nu</Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pens.map((pen, index) => (
          <Card key={index} onClick={() => setSelectedPen(pen)} className="cursor-pointer">
            <img src={pen.image} alt={pen.name} className="rounded-t-2xl h-48 w-full object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{pen.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{pen.description}</p>
              <span className="font-bold text-primary">{pen.price}</span>
            </CardContent>
          </Card>
        ))}
      </section>

      {selectedPen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setSelectedPen(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPen.image} alt={selectedPen.name} className="rounded-xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedPen.name}</h3>
            <p className="mb-4 text-gray-600">{selectedPen.description}</p>
            <Button>Voeg toe aan winkelmandje ({selectedPen.price})</Button>
          </div>
        </div>
      )}

      <footer className="text-center mt-16 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LegamiShop. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
