// Temporary fulfillment-pause notice. Hides itself automatically at the start
// of Friday, Aug 21, 2026 (owner returns Friday afternoon) — safe to delete
// from the navbar any time after that.
const BANNER_EXPIRES = new Date(2026, 7, 21); // months are 0-indexed: 7 = August

export function AnnouncementBanner() {
  if (new Date() >= BANNER_EXPIRES) {
    return null;
  }

  return (
    <div className="bg-[#4C5246] text-[#F7F4EF] text-center text-xs md:text-[0.95rem] px-4 py-2 md:py-2.5 font-medium">
      <span className="hidden md:inline">
        Heads up! Orders placed Sunday, Aug 16 &ndash; Thursday, Aug 20 will
        ship when we return on Friday, Aug 21. Thank you for your patience!
      </span>
      <span className="md:hidden">
        Orders placed Aug 16&ndash;20 will ship when we return Friday, Aug 21.
        Thanks for your patience!
      </span>
    </div>
  );
}
