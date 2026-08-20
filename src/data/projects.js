import restaurantInterior from '../assets/images/interiors/restaurant-interior.jpg';
import restaurantMural from '../assets/images/interiors/restaurant-mural.jpg';
import restaurantArtwork from '../assets/images/interiors/restaurant-artwork.jpg';
import labMetrology from '../assets/images/interiors/lab-metrology.jpg';
import labFacility from '../assets/images/interiors/lab-facility.jpg';
import electricalPanel from '../assets/images/electrical/electrical-panel.jpg';
import factoryBay from '../assets/images/construction/factory-bay.jpg';
import warehouseExterior from '../assets/images/construction/warehouse-exterior.jpg';
import warehouseInterior1 from '../assets/images/construction/warehouse-interior-1.jpg';
import warehouseInterior2 from '../assets/images/construction/warehouse-interior-2.jpg';

const projects = [
  {
    id: 'sagar-ratna-m3m',
    title: 'Sagar Ratna Restaurant',
    location: 'M3M Atrium Mall, Gurugram',
    category: 'Interior & Electrical',
    coverImage: restaurantInterior,
    coverAlt: 'Sagar Ratna restaurant interior with wooden partition and traditional décor',
    gallery: [
      {
        src: restaurantInterior,
        alt: 'Dining area of Sagar Ratna restaurant at M3M Atrium Mall, Gurugram',
      },
      // {
      //   src: restaurantMural,
      //   alt: 'Feature wall mural and wooden ceiling panels at Sagar Ratna restaurant',
      // },
      {
        src: restaurantArtwork,
        alt: 'Traditional artwork panel inside Sagar Ratna restaurant',
      },
    ],
    description:
      'Complete interior and electrical fit-out for the Sagar Ratna restaurant at M3M Atrium Mall, Gurugram — including custom wooden partitions, decorative ceilings, ambient lighting and full electrical works.',
  },
  {
    id: 'encalm-guest-house',
    title: 'Encalm Facility Guest House',
    location: 'Terminal 3 Airport',
    category: 'Interior & Electrical',
    coverImage: labFacility,
    coverAlt: 'Modern facility interior executed by BRS Solution Enterprises',
    gallery: [
      {
        src: labFacility,
        alt: 'Modern facility interior with workstations and lighting',
      },
    ],
    description:
      'Interior and electrical works for the Encalm facility guest house at Terminal 3 Airport, delivered to hospitality-grade standards. TODO: Client to provide project-specific photographs.',
  },
  {
    id: 'sagar-ratna-rcube',
    title: 'Sagar Ratna Restaurant',
    location: 'R Cube Mall, Noida',
    category: 'Interior & Electrical',
    coverImage: restaurantMural,
    coverAlt: 'Restaurant interior with feature wall executed by BRS Solution Enterprises',
    gallery: [
      {
        src: restaurantMural,
        alt: 'Restaurant dining space with decorative feature wall',
      },
      {
        src: restaurantArtwork,
        alt: 'Traditional artwork and wooden lattice detailing inside the restaurant',
      },
    ],
    description:
      'Turnkey interior and electrical fit-out for Sagar Ratna at R Cube Mall, Noida. TODO: Client to provide project-specific photographs.',
  },
  {
    id: 'radon-future-vision',
    title: 'Radon Future Vision Showroom',
    location: 'Sultanpur, Delhi',
    category: 'Interior & Electrical',
    coverImage: labMetrology,
    coverAlt: 'Showroom-grade interior fit-out executed by BRS Solution Enterprises',
    gallery: [
      {
        src: labMetrology,
        alt: 'Bright, modern commercial interior with precision fit-out',
      },
    ],
    description:
      'Interior and electrical works for the Radon Future Vision showroom at Sultanpur, Delhi. TODO: Client to provide project-specific photographs.',
  },
  {
    id: 'urbanic-savana-warehouse',
    title: 'Urbanic Savana Warehouse',
    location: 'Haryana',
    category: 'Construction & Electrical',
    coverImage: warehouseExterior,
    coverAlt: 'Urbanic Savana warehouse building exterior in Haryana',
    gallery: [
      {
        src: warehouseExterior,
        alt: 'Exterior view of the Urbanic Savana warehouse facility in Haryana',
      },
      {
        src: warehouseInterior1,
        alt: 'Warehouse interior with high-bay lighting and fire-fighting piping',
      },
      {
        src: warehouseInterior2,
        alt: 'Spacious warehouse floor with structural steel roofing',
      },
    ],
    description:
      'Large-scale warehouse construction and electrical works for Urbanic Savana in Haryana, including high-bay lighting, fire-fighting lines and power infrastructure.',
  },
  {
    id: 'jayashree-polymers',
    title: 'Jayashree Polymers India Limited',
    location: 'Manesar',
    category: 'Industrial & Electrical',
    coverImage: labMetrology,
    coverAlt: 'Metrology and quality lab at Jayashree Polymers India Limited, Manesar',
    gallery: [
      {
        src: labMetrology,
        alt: 'Metrology lab with coordinate measuring machine at Jayashree Polymers, Manesar',
      },
      {
        src: factoryBay,
        alt: 'Factory bay with EOT crane at Jayashree Polymers facility',
      },
      {
        src: electricalPanel,
        alt: 'Electrical control panels and fire pump room at Jayashree Polymers',
      },
      {
        src: labFacility,
        alt: 'Laboratory and testing area at Jayashree Polymers, Manesar',
      },
    ],
    description:
      'Industrial construction and complete electrification for Jayashree Polymers India Limited, Manesar — covering factory bays, laboratories, control panels and utility infrastructure.',
  },
];

export default projects;
