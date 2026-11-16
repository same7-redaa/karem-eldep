import React from 'react';
import CityServicePage from './CityServicePage';
import { sharmServices, sharmServiceBySlug } from '../data/sharmServices';

/** One practice area of the Sharm El Sheikh office, e.g. /sharm-el-sheikh/real-estate-lawyer */
const SharmServicePage: React.FC<{ slug: string }> = ({ slug }) => (
  <CityServicePage data={sharmServiceBySlug[slug]} all={sharmServices} city="sharm" />
);

export default SharmServicePage;
