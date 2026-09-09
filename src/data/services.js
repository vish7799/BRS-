import electricalPanel from '../assets/images/electrical/electrical-panel.jpg';
import factoryBay from '../assets/images/construction/factory-bay.jpg';
import restaurantMural from '../assets/images/interiors/restaurant-mural.jpg';

const services = [
  {
    id: 'electrical-solutions',
    title: 'Electrical Solutions',
    shortDescription:
      'Complete industrial and commercial electrification — from HT/LT installations to panels, transformers and power distribution.',
    description:
      'BRS Solution Enterprises executes safe, standards-compliant electrical works for industrial, commercial and residential projects. Our team handles everything from HT/LT installations and power distribution to panels, transformers and complete industrial electrification with a strong focus on safety and quality.',
    image: electricalPanel,
    imageAlt: 'Electrical control panel installed by BRS Solution Enterprises at an industrial facility',
    items: [
      'HT/LT Installation',
      'Power Distribution',
      'Cable Laying',
      'Earthing',
      'DG Installation',
      'Panel Installation',
      'Transformer Installation',
      'Industrial Electrification',
    ],
  },
  {
    id: 'construction-solutions',
    title: 'Construction Solutions',
    shortDescription:
      'Commercial, industrial and warehouse construction with dependable civil and structural execution.',
    description:
      'From warehouses and manufacturing facilities to commercial buildings, we deliver construction projects with disciplined planning, structural integrity and timely execution. Our civil and structural teams manage projects end-to-end, including renovation and retrofit works.',
    image: factoryBay,
    imageAlt: 'Industrial factory bay constructed by BRS Solution Enterprises',
    items: [
      'Commercial Construction',
      'Industrial Construction',
      'Warehouse Construction',
      'Civil Works',
      'Structural Works',
      'Renovation',
    ],
  },
  {
    id: 'interior-solutions',
    title: 'Interior Solutions',
    shortDescription:
      'Turnkey office and commercial interiors, electrical fit-outs, false ceilings and lighting solutions.',
    description:
      'We create functional, premium interior spaces for offices, restaurants, showrooms and commercial establishments. Our turnkey interior services cover design coordination, electrical fit-outs, false ceilings and lighting — delivered ready for occupation.',
    image: restaurantMural,
    imageAlt: 'Premium restaurant interior completed by BRS Solution Enterprises',
    items: [
      'Office Interiors',
      'Commercial Interiors',
      'Electrical Fit-Out Works',
      'False Ceiling Works',
      'Lighting Solutions',
      'Turnkey Interior Projects',
    ],
  },
];

export default services;
