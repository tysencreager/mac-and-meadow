import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <SEO
        title="Terms & Conditions"
        description="Mac & Meadow terms and conditions. Learn about our policies for purchasing and using our Wagyu tallow skincare products."
        url="/terms-and-conditions"
      />
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-48 pb-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#8B6F47] mb-4">
            Mac & Meadow — Terms & Conditions
          </h1>
          <p className="text-[#644716]/75 mb-8">Last updated: December 2025</p>
          <p className="text-[#644716] mb-8">Welcome to Mac & Meadow! By purchasing or using our Wagyu tallow skincare products, you agree to the following Terms & Conditions. Please read them carefully.</p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">1. Product Information</h2>
            <p className="text-[#644716] mb-3">Mac & Meadow products are handcrafted using grass-fed Wagyu tallow and simple, clean ingredients.</p>
            <p className="text-[#644716] mb-3">All products are for external use only.</p>
            <p className="text-[#644716]">Results vary from person to person. While many customers experience softer, healthier skin, Mac & Meadow does not guarantee specific outcomes.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">2. Allergies & Patch Testing</h2>
            <p className="text-[#644716] mb-3">Customers are responsible for reviewing the ingredient list before use.</p>
            <p className="text-[#644716] mb-3">Because tallow is a natural ingredient, individuals with sensitivities may react differently.</p>
            <p className="text-[#644716] mb-3">We strongly recommend performing a patch test before applying to larger areas of the skin.</p>
            <p className="text-[#644716]">Mac & Meadow is not liable for allergic reactions, sensitivities, or misuse.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">3. No Medical Claims</h2>
            <p className="text-[#644716] mb-3">Mac & Meadow does not provide medical advice, diagnosis, or treatment.</p>
            <p className="text-[#644716] mb-3">Our products are not intended to cure or treat medical conditions such as eczema, psoriasis, or acne.</p>
            <p className="text-[#644716]">If you have a medical concern, consult a healthcare professional.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">4. Orders & Local Pickup</h2>
            <p className="text-[#644716] mb-3">Mac & Meadow currently serves local Utah customers only.</p>
            <p className="text-[#644716] mb-3">Pickup location will be arranged directly with the customer.</p>
            <p className="text-[#644716]">Once an order is confirmed and paid, all sales are considered final (see Refund Policy below).</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">5. Refunds, Returns & Exchanges</h2>
            <p className="text-[#644716] mb-3">Due to the nature of skincare products and health/safety guidelines, all sales are final.</p>
            <p className="text-[#644716] mb-3">Mac & Meadow does not accept returns or exchanges once the product has been opened or delivered.</p>
            <p className="text-[#644716]">If your product arrives damaged or incorrect, please contact us within 48 hours and we will gladly make it right.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">6. Storage & Shelf Life</h2>
            <p className="text-[#644716] mb-3">To preserve quality:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>Store in a cool, dry place</li>
              <li>Keep away from direct sunlight</li>
              <li>Use clean hands when applying</li>
            </ul>
            <p className="text-[#644716] mt-3">Tallow products may naturally soften or firm based on temperature. This does not affect quality or performance.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">7. Limitation of Liability</h2>
            <p className="text-[#644716] mb-3">By purchasing from Mac & Meadow, you agree that the business and its owner are not liable for:</p>
            <ul className="list-disc list-inside text-[#644716] space-y-2 ml-4">
              <li>Allergic reactions</li>
              <li>Misuse of the product</li>
              <li>Storage issues outside our control</li>
              <li>Any indirect, incidental, or consequential damages</li>
            </ul>
            <p className="text-[#644716] mt-3">Use of our products is at the customer's own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">8. Personal Information & Privacy</h2>
            <p className="text-[#644716] mb-3">Any personal information you provide (name, contact info, payment details) is used solely to fulfill your order.</p>
            <p className="text-[#644716]">Mac & Meadow does not sell or share customer information.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#8B6F47] mb-4">9. Updates to Terms & Conditions</h2>
            <p className="text-[#644716]">Mac & Meadow may update these terms at any time. Updates will be posted publicly and apply to all future purchases.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
