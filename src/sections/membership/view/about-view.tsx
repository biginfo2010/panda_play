'use client';

import MembershipHero from '../about-hero';
import MembershipWhat from '../about-what';
import MembershipTeam from '../about-team';
import MembershipVision from '../about-vision';
import MembershipTestimonials from '../about-testimonials';

// ----------------------------------------------------------------------

export default function MembershipView() {
  return (
    <>
      <MembershipHero />

      <MembershipWhat />

      <MembershipVision />

      <MembershipTeam />

      <MembershipTestimonials />
    </>
  );
}
