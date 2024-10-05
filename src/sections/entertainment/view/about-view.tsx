'use client';

import EntertainmentHero from '../about-hero';
import EntertainmentWhat from '../about-what';
import EntertainmentTeam from '../about-team';
import EntertainmentVision from '../about-vision';
import EntertainmentTestimonials from '../about-testimonials';

// ----------------------------------------------------------------------

export default function EntertainmentView() {
  return (
    <>
      <EntertainmentHero />

      <EntertainmentWhat />

      <EntertainmentVision />

      <EntertainmentTeam />

      <EntertainmentTestimonials />
    </>
  );
}
