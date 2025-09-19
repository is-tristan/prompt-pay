// Styles
import styles from "@/styles/components/reusables/faqs.module.scss";

// Icons
import { Help } from '@carbon/react/icons';


export default function Faqs({ faqs = [] }) {

    return (

        <>

            {faqs && faqs.length > 0 && (

                <div className={styles.faqItems}>

                    {faqs.map((faq, index) => (

                        <details key={index} className={styles.faqItem}>

                            <summary className={styles.faqQuestion}>

                                <div className={styles.faqIcon}>
                                    
                                    <Help size={12} />

                                </div>

                                <span>{faq.question}</span>

                            </summary>

                            <div

                                className={styles.faqAnswer}

                                dangerouslySetInnerHTML={{ __html: faq.answer }}

                            />

                        </details>

                    ))}

                </div>
            )}

        </>

    );

}