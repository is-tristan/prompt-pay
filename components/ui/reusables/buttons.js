// Next
import Link from "next/link";

// Icons
import { ArrowUpRight } from '@carbon/react/icons';

export default function Buttons({
    className = "",
    btnOneText = "Get Started",
    btnOneLink = "#",
    btnOneClass = "primary",
    btnTwoText = "",
    btnTwoLink = "#",
    btnTwoClass = "secondary",
    target = "_self",
    hiddenMobile = false,
    hiddenDesktop = false }) {

    return (

        <div className={`buttons ${className ? className : undefined} ${hiddenMobile ? "hidden-s hidden-m" : undefined} ${hiddenDesktop ? "hidden-l hidden-xl" : undefined}`}>

            <Link className={`btn ${btnOneClass}`} href={btnOneLink} target={target}>

                <span>{btnOneText}</span>

                <div className="btnIcon">

                    <ArrowUpRight size={16} />

                </div>

            </Link>

            {btnTwoText &&

                <Link className={`btn ${btnTwoClass}`} href={btnTwoLink} target={target}>

                    <span>{btnTwoText}</span>

                    <div className="btnIcon">

                        <ArrowUpRight />

                    </div>

                </Link>}

        </div>

    )
}