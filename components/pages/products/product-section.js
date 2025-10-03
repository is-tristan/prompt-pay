// Next
import Image from "next/image";
import CheckList from "@/components/pages/products/product-check-list";

import Buttons from "@/components/ui/reusables/buttons";
// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import styles from "@/styles/pages/products/product-section.module.scss";

// Logos
const cloverLogo = "/logos/external/clover-logo.svg";
const worldPayLogo = "/logos/external/worldpay-logo.svg";

export default function ProductSection({
  hasAnimation = true,
  rowClassName = "",
  containerClassName = false,
  image = "",
  imageAlt = "",
  eyebrow = "",
  heading = "",
  headingLevel = "h2",
  text = "",
  listItems = [],
  productCategory = "",
  hasBtns = true,
}) {

  return (

    <section className={`row ${styles.productSection} ${rowClassName ? styles[rowClassName] : undefined}`} >

      <div className={`container dualCols ${styles.productSectionContainer} ${containerClassName ? containerClassName : undefined} `}>

        <div className={`col imageCol fill ${styles.imageCol}`}>

          {image && (

            <>

              <Image
                src={image}
                alt={imageAlt || heading}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }} />

              {rowClassName === "productHeader" && (

                <Image
                  src={productCategory === "clover" ? cloverLogo : productCategory === "worldpay" ? worldPayLogo : null}
                  alt={productCategory === "clover" ? "Clover logo" : productCategory === "worldpay" ? "Worldpay logo" : ""}
                  width={64 || 96}
                  height={32}
                  sizes="(@max-width: 1200px) 64px, 96px"
                  className={styles.productLogo}
                  loading="lazy" />)}

            </>

          )}

        </div>

        <div className={`col contentCol ${styles.contentCol}`}>

          <Heading hasAnimation={false} level={headingLevel} className="hasFullStop" eyebrow={eyebrow} title={heading} />

          {text && <p className={styles.productSectionText}>{text}</p>}

          {listItems.length > 0 && <CheckList items={listItems} hasAnimation={hasAnimation} />}

          {hasBtns && (

            <Buttons
              btnOneText="Get in Touch"
              btnOneLink="/contact"
              btnOneClass="primary hasAnimation"
              btnTwoText="View All Products"
              btnTwoLink="/products"
              btnTwoClass="light"
              className={styles.productSectionButtons}
            />
          )}
          
        </div>

      </div>

    </section>

  );

}
