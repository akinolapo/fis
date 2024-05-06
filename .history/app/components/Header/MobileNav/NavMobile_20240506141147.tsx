'use client'

import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden ">
      <Image src=""/>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </div>
  );
};