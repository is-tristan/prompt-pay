// Next
import Image from "next/image";

// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import "@/styles/pages/contact.scss";

// Images
const mapImage = "/images/misc/world-map.png";

export default function WorldMap() {
  return (
    <section className="row worldMap">
      <div className="container centered noPaddingBottom">
        <Heading
          eyebrow="GLOBAL PAYMENTS"
          title="Processing worldwide"
          className="hasFullStop"
        />
      </div>

      <div className="container noPaddingTop noPaddingBottom worldmapContainer">
        <Image
          src={mapImage}
          alt="World Map"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
