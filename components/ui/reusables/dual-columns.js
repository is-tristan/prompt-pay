import Image from "next/image";
import Buttons from "./buttons";
import Heading from "./heading";
import List from "./list";

export default function DualCols({
  rowClassName = "",
  containerClassName = "",
  backgroundImage = "",
  eyebrow = "",
  headingLevel = "h2",
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
  listItems = [],
  hasBtns = true,
}) {

  return (
    
    <section
      id={`dualCols-${Math.random().toString(36).substring(2, 11)}`}
      className={`row ${rowClassName ? rowClassName : undefined}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div
        className={`container dualCols  ${containerClassName ? containerClassName : undefined}`}
      >
        <div className="col contentCol">
          <Heading
            className="hasFullStop"
            level={headingLevel}
            eyebrow={eyebrow}
            title={title}
            text={text}
          />

          {hasList && <List items={listItems} />}

          {hasBtns && (

            <Buttons
              btnOneText={btnOneText}
              btnOneLink={btnOneLink}
              btnOneClass={btnOneClass}
              btnTwoText={btnTwoText}
              btnTwoLink={btnTwoLink}
              btnTwoClass={btnTwoClass}
            />
          )}

        </div>

        {image && (
          <div className="col imageCol fill">
            <Image
              src={image}
              alt={imageAlt}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {backgroundImage && (
          <div className="col imageCol hidden-s hidden-m"></div>
        )}
      </div>
    </section>
  );
}
