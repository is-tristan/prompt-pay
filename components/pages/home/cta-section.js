// Next
import Link from "next/link";
import Image from "next/image";
import Globe from "@/components/misc/globe";

// Components
import Heading from "../../ui/reusables/heading";
import Stats from "../../ui/reusables/stats";

// Logos
const WorldPayLogo = "/logos/external/worldpay-logo.svg";
const CloverLeafLogo = "/logos/external/clover-logo.svg";

export default function ctaRow() {

  return (

    <section className="row ctaRow">

      <div className="container dualCols">

        <div className="col contentCol">

          <Heading
            className="hasFullStop"
            eyebrow="BUILDING PARTNERSHIPS"
            title="Upgrade your online payment gateways"
            text="<p>Grow your business online with Prompt Pay Capital's Payment gateways and e-commerce, powered by Worldpay and Clover. Effortlessly sync with Shopify, WooCommerce, Magento, BigCommerce, and more—accept payments securely anywhere, delight customers, and boost revenue.</p>"
          />

          <div className="statsContainer">

            <Stats
              countFrom={0}
              countTo={3.2}
              duration={1500}
              prefix="£"
              suffix="T"
              title="In payments globally <span className='primary'>*</span>"
            />

            <Stats
              countFrom={0}
              countTo={100}
              duration={1500}
              suffix="%"
              title="Save when they switch <span className='primary'>*</span>"
            />

            <Stats
              countFrom={0}
              countTo={99}
              duration={1500}
              suffix="%"
              title="Report smoother payments <span className='primary'>*</span>"
            />
          </div>

        </div>

        <div className="col globeCol">

          <div className="globeContainer">

            <Globe />

          </div>

          <div className="floatingText floatingTextOne">

            <Link href="/features/worldpay-gateway" />

            <div className="floatingTextHeader">

              <Image
                src={WorldPayLogo}
                alt="Worldpay Logo"
                width={64}
                height={32}
                loading="lazy"
              />

              <span>Gateway</span>

            </div>

            <p>Learn More</p>

          </div>

          <div className="floatingText floatingTextTwo">

            <Link href="/features/clover-gateway" />
            
            <div className="floatingTextHeader">

              <Image
                src={CloverLeafLogo}
                alt="Cloverleaf Logo"
                width={64}
                height={32}
                loading="lazy"
              />

              <span>Gateway</span>

            </div>

            <p>Learn More</p>

          </div>

        </div>

      </div>

    </section>

  );

}
