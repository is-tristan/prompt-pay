// Styles
import styles from "@/styles/components/reusables/list.module.scss";

// Icons
import { CheckmarkFilled } from '@carbon/react/icons';

export default function List({ stylised = "false", items = [] }) {

    return (

        <div className={`${styles.list} ${stylised ? `${styles.stylised}` : undefined}`} role="list">

            {items.map((item, index) => (

                <div className={styles.listItem} key={index} role="listitem">

                    <div className={styles.listIcon} aria-hidden="true">

                        <CheckmarkFilled color="var(--primary)" size="20F" />

                    </div>

                    <p className={styles.listText}>{item}</p>

                </div>

            ))}

        </div>

    )
}