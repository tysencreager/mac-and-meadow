import type { ReactNode } from "react";
import { Link } from "wouter";

// Site-wide announcement strip. Every banner is date-gated, so they put
// themselves up and take themselves down — no deploy needed to swap them.
//
// A banner runs from the start of `from` until the start of `until`, so
// `until` is the first day it is gone. The first entry whose window covers
// today wins: the time-sensitive fulfillment notices are listed first and take
// over the strip while they run, then the evergreen launch banner comes back.
//
// Dates are in the visitor's local time, and months are 0-indexed (8 = Sept).
type Banner = {
  from: Date;
  until: Date;
  /** Wraps the banner text in a link when set. */
  href?: string;
  desktop: ReactNode;
  mobile: ReactNode;
};

const BANNERS: Banner[] = [
  // Fulfillment pause #1: Mon Sept 14 – Wed Sept 16. Runs as advance notice
  // from Sun Sept 13 and clears when fulfillment resumes Thu Sept 17.
  {
    from: new Date(2026, 8, 13),
    until: new Date(2026, 8, 17),
    desktop: (
      <>
        Heads up! Orders placed Monday, Sept 14 &ndash; Wednesday, Sept 16 will
        be fulfilled when we return on Thursday, Sept 17. Thank you for your
        patience!
      </>
    ),
    mobile: (
      <>
        Orders placed Sept 14&ndash;16 will be fulfilled when we return
        Thursday, Sept 17. Thanks for your patience!
      </>
    ),
  },
  // Fulfillment pause #2: Mon Sept 21 – Thu Sept 24. Takes over the strip the
  // moment the first notice clears and hides when fulfillment resumes Fri
  // Sept 25.
  {
    from: new Date(2026, 8, 17),
    until: new Date(2026, 8, 25),
    desktop: (
      <>
        Heads up! Orders placed Monday, Sept 21 &ndash; Thursday, Sept 24 will
        be fulfilled when we return on Friday, Sept 25. Thank you for your
        patience!
      </>
    ),
    mobile: (
      <>
        Orders placed Sept 21&ndash;24 will be fulfilled when we return Friday,
        Sept 25. Thanks for your patience!
      </>
    ),
  },
  // Lip Balm launch announcement (live since Sept 5, ~a month of visibility).
  // Safe to delete this entry any time after Oct 10, or push the date out if
  // the owner wants it running longer.
  {
    from: new Date(2026, 8, 5),
    until: new Date(2026, 9, 10),
    href: "/products#balms",
    desktop: (
      <>
        ✨ New! Meet our Lip Balms in Lemon Grove &amp; Meadow Mint &mdash;
        available as singles or double packs. Shop the launch &rarr;
      </>
    ),
    mobile: <>✨ New! Lip Balms in Lemon Grove &amp; Meadow Mint &rarr;</>,
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
