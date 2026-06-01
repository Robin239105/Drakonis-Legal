import type { Office } from '../types';
import officeLondon from '../assets/images/office_london.png';
import officeNewYork from '../assets/images/office_new_york.png';
import officeDubai from '../assets/images/office_dubai.png';
import officeSingapore from '../assets/images/office_singapore.png';
import officeHongKong from '../assets/images/office_hong_kong.png';

export const offices: Office[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    address: '1 King\'s Bench Walk, Temple, London EC4Y 7DB',
    phone: '+44 20 7000 0000',
    email: 'london@drakonislegal.com',
    image: officeLondon,
    timezone: 'GMT / BST',
    established: '1987',
    attorneys: 52,
    focus: ['Corporate Litigation', 'Financial Crimes & Regulatory', 'Employment & Executive Disputes', 'Insolvency & Restructuring'],
    mapUrl: '#',
  },
  {
    city: 'New York',
    country: 'United States',
    address: '375 Park Avenue, Suite 2800, New York, NY 10152',
    phone: '+1 212 000 0000',
    email: 'newyork@drakonislegal.com',
    image: officeNewYork,
    timezone: 'EST / EDT',
    established: '1998',
    attorneys: 28,
    focus: ['Corporate Litigation', 'Financial Crimes & Regulatory', 'Competition & Antitrust', 'Technology, IP & Data'],
    mapUrl: '#',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'DIFC Gate Building, Level 14, Dubai',
    phone: '+971 4 000 0000',
    email: 'dubai@drakonislegal.com',
    image: officeDubai,
    timezone: 'GST (UTC+4)',
    established: '2008',
    attorneys: 18,
    focus: ['International Arbitration', 'Corporate Litigation', 'Real Estate & Property Litigation', 'Private Client & Family Office'],
    mapUrl: '#',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: 'One Raffles Quay, Level 35, Singapore 048583',
    phone: '+65 6000 0000',
    email: 'singapore@drakonislegal.com',
    image: officeSingapore,
    timezone: 'SGT (UTC+8)',
    established: '2014',
    attorneys: 14,
    focus: ['International Arbitration', 'Corporate Litigation', 'Technology, IP & Data', 'Competition & Antitrust'],
    mapUrl: '#',
  },
  {
    city: 'Hong Kong',
    country: 'China (SAR)',
    address: 'Two IFC, Level 28, 8 Finance Street, Central',
    phone: '+852 0000 0000',
    email: 'hongkong@drakonislegal.com',
    image: officeHongKong,
    timezone: 'HKT (UTC+8)',
    established: '2016',
    attorneys: 10,
    focus: ['International Arbitration', 'Corporate Litigation', 'Private Client & Family Office', 'Insolvency & Restructuring'],
    mapUrl: '#',
  },
];
