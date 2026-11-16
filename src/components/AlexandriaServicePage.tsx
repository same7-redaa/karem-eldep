import React from 'react';
import CityServicePage from './CityServicePage';
import { alexandriaServices, alexandriaServiceBySlug } from '../data/alexandriaServices';

/** One practice area of the Alexandria office, e.g. /alexandria/family-lawyer */
const AlexandriaServicePage: React.FC<{ slug: string }> = ({ slug }) => (
  <CityServicePage data={alexandriaServiceBySlug[slug]} all={alexandriaServices} city="alexandria" />
);

export default AlexandriaServicePage;
