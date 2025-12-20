import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-48 pb-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-8">
            Mac & Meadow – Policies & Customer Guidelines
          </h1>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">1. Product Information</h2>
            <p className="text-[#644716] mb-3">All Mac & Meadow tallow blends are:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>Made from grass-fed Wagyu tallow</li>
              <li>Handcrafted in small, fresh batches</li>
              <li>Made with simple, natural ingredients (Wagyu tallow, extra-virgin olive oil, frankincense, orange essential oil, vanilla extract)</li>
              <li>Free of chemicals, parabens, synthetic fragrances, artificial fillers, and dyes</li>
            </ul>
            <p className="text-[#644716] mt-3">Each jar is made by hand, so slight variations in texture or color are normal.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">2. Allergy & Safety Disclaimer</h2>
            <p className="text-[#644716] mb-3">Please review all ingredients before use.</p>
            <p className="text-[#644716] mb-3">If you have allergies to beef, olive oil, essential oils, or natural skincare ingredients, consult a dermatologist or perform a patch test first.</p>
            <p className="text-[#644716] mb-3">Mac & Meadow is not responsible for allergic reactions or sensitivities.</p>
            <p className="text-[#644716] mb-3">Always discontinue use if irritation occurs.</p>
            <p className="text-[#644716]">This product is for external use only.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">3. Storage & Shelf Life</h2>
            <p className="text-[#644716] mb-3">To keep your tallow fresh:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>Store at room temperature</li>
              <li>Keep out of direct heat and sunlight</li>
              <li>Use clean hands to avoid contamination</li>
            </ul>
            <p className="text-[#644716] mt-3">Shelf life is typically 6–12 months.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">4. Returns & Refunds</h2>
            <p className="text-[#644716] mb-3">Because of the personal-care nature of the product, Mac & Meadow does not accept returns on opened skincare items.</p>
            <p className="text-[#644716] mb-3">However, your satisfaction matters.</p>
            <p className="text-[#644716]">If there is an issue with your order (damaged jar, wrong item, etc.), please contact me within 7 days of delivery or pickup and I'll make it right.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">5. Order Pickup & Delivery (Local)</h2>
            <p className="text-[#644716] mb-3">Local pickup is available in Syracuse, Utah.</p>
            <p className="text-[#644716] mb-3">Pickup instructions will be provided when your order is ready.</p>
            <p className="text-[#644716]">Local porch drop-off may be available depending on location.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">6. Pricing & Sales Tax</h2>
            <p className="text-[#644716] mb-3">Utah requires sales tax on skincare products.</p>
            <p className="text-[#644716] mb-3">Current pricing:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>$17 + tax per 4 oz jar</li>
              <li>2 for $25 + tax</li>
            </ul>
            <p className="text-[#644716] mt-3">Sales tax (Syracuse, UT): 7.25%</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">7. Payments</h2>
            <p className="text-[#644716] mb-3">Accepted payment methods:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>Square</li>
              <li>Venmo (business profile recommended)</li>
              <li>Cash (local only)</li>
              <li>Debit/credit via invoice</li>
            </ul>
            <p className="text-[#644716] mt-3">All payments must be completed before pickup or shipping.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">8. Disclaimer (Required for Handcrafted Skincare)</h2>
            <p className="text-[#644716] mb-3">Mac & Meadow products are not intended to diagnose, treat, cure, or prevent any medical condition.</p>
            <p className="text-[#644716]">I am not a medical professional; results may vary based on individual skin type.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
