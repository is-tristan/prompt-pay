"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Buttons from "@/components/ui/reusables/buttons";
import Heading from "@/components/ui/reusables/heading";
import List from "@/components/ui/reusables/list";

// Images
const imagePeople = "/images/misc/grow-your-business-desktop.webp";
const imagesColLeft = "/images/misc/grow-your-business-col-left.svg";
const imagesColRight = "/images/misc/grow-your-business-col-right.svg";

export default function DualCols({
  rowClassName = "",
  eyebrow = "",
  headingLevel = "h2",
  title = "",
  text = "",
  btnOneText = "",
  btnOneLink = "",
  btnOneClass = "primary",
  btnTwoText = "",
  btnTwoLink = "",
  btnTwoClass = "secondary",
  hasList = false,
  listItems = [],
}) {
  // Ref for parallax container
  const containerRef = useRef(null);

  // Parallax scroll effect for imagePeopleContainer
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Fade in up animation variants
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (


    <section id={`dualCols-${Math.random().toString(36).substring(2, 11)}`} className={`row ${rowClassName ? rowClassName : undefined}`} ref={containerRef}>

      <div className={`container dualCols rowReverse`}>

        <div className="col contentCol">

          <Heading
            className="hasFullStop"
            level={headingLevel}
            eyebrow={eyebrow}
            title={title}
            text={text}
          />

          {hasList && <List items={listItems} />}

          <Buttons
            btnOneText={btnOneText}
            btnOneLink={btnOneLink}
            btnOneClass={btnOneClass}
            btnTwoText={btnTwoText}
            btnTwoLink={btnTwoLink}
            btnTwoClass={btnTwoClass}
          />

        </div>

        <div className="col imageCol imagePeopleCol fill">

          <div className="imagePeopleContainer">

            <Image
              className="imagePeople"
              alt="Grow your business with Worldpay from Prompt Pay Capital"
              src={imagePeople}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

          </div>

          <motion.div
            className="imageColContainer imageColLeftContainer"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <Image
              className="imageColLeft"
              alt=""
              src={imagesColLeft}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

          </motion.div>

          <motion.div
            className="imageColContainer imageColRightContainer"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <Image
              className="imageColRight"
              alt=""
              src={imagesColRight}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

          </motion.div>

        </div>

      </div>

    </section>

  );

}
