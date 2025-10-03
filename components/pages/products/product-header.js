// Components
import Heading from "@/components/ui/reusables/heading";

// Styles
import styles from "@/styles/pages/products/products-header.module.scss";

export default function ProductHeader({ eyebrow = "", title = "", text = "" }) {

    return (

        <section className={`row ${styles.productHeader}`}>

            <div className={`container centered ${styles.productHeaderContainer}`}>

                <Heading hasAnimation={false} className={"hasFullStop"} eyebrow={eyebrow} title={title} text={text} />

            </div>

        </section >

    );

}