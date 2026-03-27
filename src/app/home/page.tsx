import { images } from "@/config/images";

export const metadata = {
  title: 'Precision Plumbing Co - Trusted Local Plumbing Services',
  description: 'Offering quality plumbing services in your area. Contact us for a free estimate.',
};

const HomePage = () => {
  return (
    <main>
      <section className="min-h-[80vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={images["hero"].src}
            alt={images["hero"].alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="eager"
            width={images["hero"].width}
            height={images["hero"].height}
          />
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-12 space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Trusted Local Experts</h1>
          <p className="text-lg leading-relaxed">Delivering quality workmanship and reliable home improvement solutions.</p>
          <form>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <button type="submit" aria-label="Request Free Estimate" className="bg-[#F97316] text-white rounded-full px-8 py-3">Request Free Estimate</button>
          </form>
        </div>
      </section>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Precision Plumbing Co",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4521 Westheimer Rd, Suite 200",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77027"
          },
          "telephone": "(123) 456-7890",
          "url": "https://precisionplumbingco.com",
          "description": "Trusted local service provider delivering quality workmanship and reliable home improvement solutions."
        })}
      </script>
    </main>
  );
};

export default HomePage;