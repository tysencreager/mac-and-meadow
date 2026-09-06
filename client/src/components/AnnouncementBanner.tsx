import { Link } from "wouter";

// Lip Balm launch announcement. Hides itself automatically at the start of
// Saturday, Oct 10, 2026 (~a month of visibility) — safe to delete from the
// navbar any time after that, or extend the date if the owner wants it longer.
const BANNER_EXPIRES = new Date(2026, 9, 10); // months are 0-indexed: 9 = October

export function AnnouncementBanner() {
  if (new Date() >= BANNER_EXPIRES) {
    return null;
  }

  return (
    <div className="bg-[#4C5246] text-[#F7F4EF] text-center text-xs md:text-[0.95rem] px-4 py-2 md:py-2.5 font-medium">
      <Link href="/products#balms" className="hover:underline underline-offset-2">
        <span className="hidden md:inline">
          ✨ New! Meet our Lip Balms in Lemon Grove &amp; Meadow Mint —
          available as singles or double packs. Shop the launch &rarr;
        </span>
        <span className="md:hidden">
          ✨ New! Lip Balms in Lemon Grove &amp; Meadow Mint &rarr;
        </span>
      </Link>
    </div>
  );
}
