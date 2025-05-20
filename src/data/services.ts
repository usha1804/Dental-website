import { Service } from '../types';
import { Bluetooth as Tooth, Brush as Toothbrush, Stethoscope, Pill, Aperture, Syringe } from 'lucide-react';

export const services: Service[] = [
  {
    id: 1,
    title: 'General Cleaning',
    description: 'Professional dental cleaning to remove plaque and tartar buildup.',
    icon: 'Toothbrush',
    details: 'Our professional dental cleaning service includes thorough removal of plaque and tartar, polishing to remove stains, and a fluoride treatment to strengthen tooth enamel. Regular cleanings every six months can prevent cavities, gum disease, and other oral health issues.'
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    description: 'Advanced whitening techniques for a brighter, more confident smile.',
    icon: 'Tooth',
    details: 'Our advanced teeth whitening procedures use professional-grade bleaching agents that are significantly more effective than over-the-counter products. The treatment takes about an hour and can lighten your teeth by several shades. We also offer take-home whitening kits for maintenance between treatments.'
  },
  {
    id: 3,
    title: 'Root Canal',
    description: 'Pain-free root canal treatments using the latest technology.',
    icon: 'Stethoscope',
    details: 'Our root canal procedures are performed with the latest technology to ensure maximum comfort. The procedure involves removing infected pulp, cleaning the canal, and sealing it to prevent future infection. Despite their reputation, modern root canals are no more painful than getting a filling.'
  },
  {
    id: 4,
    title: 'Dental Implants',
    description: 'Long-lasting tooth replacement options for a natural look and feel.',
    icon: 'Aperture',
    details: 'Dental implants provide a permanent solution for missing teeth. The procedure involves placing a titanium post in the jawbone, which acts as a tooth root. Once healed, a custom-made crown is attached, giving you a replacement tooth that looks, feels, and functions like a natural tooth.'
  },
  {
    id: 5,
    title: 'Orthodontics',
    description: 'Braces and clear aligners to correct teeth alignment and bite issues.',
    icon: 'Syringe',
    details: 'We offer a range of orthodontic treatments including traditional braces, ceramic braces, and clear aligners. Our orthodontists will work with you to determine the best option for your specific needs. Treatment times vary depending on the complexity of your case, but most patients achieve their desired results within 12-24 months.'
  },
  {
    id: 6,
    title: 'Pediatric Dentistry',
    description: 'Child-friendly dental care to establish good oral health habits early.',
    icon: 'Pill',
    details: 'Our pediatric dentistry services are designed to make dental visits enjoyable for children while establishing good oral health habits early. We offer preventive care, education, and treatments specifically tailored for young patients in a friendly, non-threatening environment that helps children feel comfortable and relaxed.'
  }
];