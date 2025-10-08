// Next
import Image from "next/image";
import CheckList from "@/components/pages/products/product-check-list";

import Buttons from "@/components/ui/reusables/buttons";
// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import styles from "@/styles/pages/products/product-section.module.scss";
import featureStyles from "@/styles/pages/features/feature.module.scss";

// Logos
const cloverLogo = "/logos/external/clover-logo.svg";
const worldPayLogo = "/logos/external/worldpay-logo.svg";

export default function ProductSection({
  id = "",
  hasAnimation = true,
  rowClassName = "",
  containerClassName = false,
  image = "",
  imageAlt = "",
  imageRadius = "",
  eyebrow = "",
  heading = "",
  headingLevel = "h2",
  text = "",
  listItems = [],
  productCategory = "",
  featureCategory = "",
  hasBtns = true,
  btnTextOne = "Get in Touch",
  btnLinkOne = "/contact",
  btnTextTwo = "",
  btnLinkTwo = ""
}) {

  return (

    <section id={id ? id : null} className={`row ${styles.productSection} ${rowClassName ? styles[rowClassName] : undefined}`} >

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
                style={{ objectFit: "cover", borderRadius: imageRadius ? imageRadius : "0" }} />

              {rowClassName === "productHeader" && (

                <Image
                  src={(productCategory || featureCategory) === "clover" ? cloverLogo : (productCategory || featureCategory) === "worldpay" ? worldPayLogo : null}
                  alt={(productCategory || featureCategory) === "clover" ? "Clover logo" : (productCategory || featureCategory) === "worldpay" ? "Worldpay logo" : ""}
                  width={64 || 96}
                  height={32}
                  sizes="(@max-width: 1200px) 64px, 96px"
                  className={productCategory.length ? styles.productLogo : featureStyles.featureLogo}
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
              btnOneText={btnTextOne}
              btnOneLink={btnLinkOne}
              btnOneClass="primary hasAnimation"
              btnTwoText={btnTextTwo}
              btnTwoLink={btnLinkTwo}
              btnTwoClass="light"
              className={styles.productSectionButtons}
            />

          )}

        </div>

      </div>

    </section>

  );

}
