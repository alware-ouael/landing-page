'use client'
import React, {useState} from 'react'
import Card from './Card';
const solutions = [
  {
    title: "Alris – Radiology Information System for managing imaging centers",
    image: "/images/solutions/alris.png",
    features: [
      "Dossier patient complet",
      "Suivi en temps réel",
      "Édition de rapports",
      "Gestion des caisses",
      "Enregistrement vocal",
      "Devis et facturation",
      "Worklist et statistiques",
      "Gestion des stocks, conventions, honoraires, pathologies, services"
    ]
  },
  {
    title: "Alprint – DICOM image and report printing solution",
    image: "/images/solutions/alprint.png",
    features: [
      "Impression A3/A4/Livret",
      "Synchronisation images DICOM & rapports",
      "Gestion des listes d’attente/urgence",
      "Contrôle des travaux imprimés via Web",
      "Système écologique et économique"
    ]
  },
  {
    title: "Alpacs – Archiving and viewing system for medical images",
    image: "/images/solutions/alpacs.png",
    features: [
      "Archivage de toutes les modalités",
      "Accès Web et Mobile View",
      "Compatible tous navigateurs",
      "Compression d’images",
      "Partage via stations de post-traitement"
    ]
  },
  {
    title: "Aldisk – Automated DICOM disc burning and printing",
    image: "/images/solutions/aldisk.png",
    features: [
      "Gravure automatique DICOM via robots Epson",
      "Visionneuse DICOM intégrée",
      "Disques imprimables personnalisés",
      "Contrôle via interface Web",
      "Solution économique de sauvegarde"
    ]
  },
  {
    title: "Alconnect – Remote access and sharing of imaging studies",
    image: "/images/solutions/alconnect.png",
    features: [
      "Transfert et réception d’images",
      "Accès à distance au diagnostic",
      "Édition et transfert de rapports",
      "Cloud compatible",
      "Partage entre radiologues"
    ]
  }
];

function Solutions() {
 
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  

  return (
<div id='solutions' className="relative w-full py-6">
  {/* Title */}
  <h2 className="title md:text-start text-center  mx-8 my-4">
    Solutions
  </h2>

  {/* Right shadow */}
  <div className="pointer-events-none absolute top-[3.5rem] right-0 h-[calc(100%-3.5rem)] w-12 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

  {/* Scrollable area */}
  <div className="overflow-x-auto hide-scrollbar">
    <div className="flex flex-row space-x-4 px-4 w-max">
      {solutions.map((item, i) => (
        <Card
          key={i}
          index={i}
          isFirst={i === 0}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  </div>
</div>


  );
}


export default Solutions
