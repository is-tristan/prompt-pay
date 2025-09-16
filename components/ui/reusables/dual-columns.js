import Heading from "./heading";
import Buttons from "./buttons";
import List from "./list";
import Image from "next/image";

export default function DualCols({
    className="",
    eyebrow = "",
    title = "",
    text = "",
    image = "",
    imageAlt = "",
    btnOneText = "",
    btnOneLink = "",
    btnOneClass = "primary",
    btnTwoText = "",
    btnTwoLink = "",
    btnTwoClass = "secondary",
    hasList = false,
    listItems = []
}) {

    return (

        <section className={`row`}>

            <div className={`container dualCols  ${className ? className : undefined}`}>

                <div className="col contentCol">

                    <Heading className="hasFullStop" eyebrow={eyebrow} title={title} text={text} />

                    {hasList && <List items={listItems} />}

                    <Buttons btnOneText={btnOneText} btnOneLink={btnOneLink} btnOneClass={btnOneClass} btnTwoText={btnTwoText} btnTwoLink={btnTwoLink} btnTwoClass={btnTwoClass} />

                </div>

                {image &&

                    <div className="col imageCol fill">


                        <Image src={image} alt={imageAlt} loading="lazy" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

                    </div>

                }

            </div>

        </section>

    )
}