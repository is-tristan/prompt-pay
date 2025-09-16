// Next
import Link from "next/link";

// Icons
import { ArrowUpRight } from '@carbon/react/icons';

export default function Buttons({ btnOneText = "Get Started", btnOneLink = "#", btnOneClass = "primary", btnTwoText = "", btnTwoLink = "#", btnTwoClass = "secondary" }) {

    return (

        <div className="buttons">

            <Link className={`btn ${btnOneClass}`} href={btnOneLink}>

                <span>{btnOneText}</span>

                <div className="btnIcon">

                    <ArrowUpRight size={16} />

                </div>

            </Link>

            {btnTwoText && <Link className={`btn ${btnTwoClass}`} href={btnTwoLink}>

                <span>{btnTwoText}</span>

                <div className="btnIcon">

                    <ArrowUpRight />

                </div>

            </Link>}

        </div>

    )
}