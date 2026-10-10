import type { ReactNode } from "react";
import { Link } from "wouter";

// Site-wide announcement strip. Every banner is date-gated, so they put
// themselves up and take themselves down — no deploy needed to swap them.
//
// A banner runs from the start of `from` until the start of `until`, so
// `until` is the first day it is gone. The first entry whose window covers
// today wins, so list time-sensitive notices (like fulfillment pauses) ahead of
// any longer-running promo so they take over the strip while they run. Expired
// entries can be deleted.
//
// Dates are in the visitor's local time, and months are 0-indexed (9 = Oct).
type Banner = {
  from: Date;
  until: Date;
  /** Wraps the banner text in a link when set. */
  href?: string;
  desktop: ReactNode;
  mobile: ReactNode;
};

const BANNERS: Banner[] = [
  // Fulfillment pause: Mon Oct 12 – Thu Oct 15, in the owner's own wording.
  // Goes up right away as advance notice and clears when fulfillment resumes
  // Fri Oct 16.
  {
    from: new Date(2026, 9, 10),
    until: new Date(2026, 9, 16),
    desktop: (
      <>
        We will not be fulfilling orders from Oct 12&ndash;15th. Order
        fulfillment will resume October 16th. Thank you for your patience!
      </>
    ),
    mobile: (
      <>
        We will not be fulfilling orders Oct 12&ndash;15th. Fulfillment resumes
        Oct 16th. Thank you for your patience!
      </>
    ),
  },
];

export function AnnouncementBanner() {
  const now = new Date();
  const banner = BANNERS.find(({ from, until }) => now >= from && now < until);

  if (!banner) {
    return null;
  }

  const content = (
    <>
      <span className="hidden md:inline">{banner.desktop}</span>
      <span className="md:hidden">{banner.mobile}</span>
    </>
  );

  return (
    <div className="bg-[#4C5246] text-[#F7F4EF] text-center text-xs md:text-[0.95rem] px-4 py-2 md:py-2.5 font-medium">
      {banner.href ? (
        <Link href={banner.href} className="hover:underline underline-offset-2">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
