import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/NavbarMenus";
import logo from '../../public/logo.png';
import { cn } from "../utils/utils";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
  className?: string;
}

const scrollToHome = (page: string) => {
  const section = document.getElementById(page);
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  }
};

export const NavbarMain: React.FC<{ scrollToSection: (sectionId: string) => void }> = ({ scrollToSection }) => {
  return (
    <div className="p-4 fixed top-0 z-50 w-screen m-0 flex items-center justify-center">
      <Navbar scrollToSection={scrollToSection} className="top-2 w-fit" />
    </div>
  );
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, className }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("inset-x-0 w-full",  className ?? "")}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Info">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink scrollToSection={scrollToSection} href="about">About Me</HoveredLink>
            <HoveredLink scrollToSection={scrollToSection} href="expertise">What I do</HoveredLink>
            <HoveredLink scrollToSection={scrollToSection} href="testimonial">Testimonials</HoveredLink>
            <HoveredLink scrollToSection={scrollToSection} href="contact">Contact Me</HoveredLink>
          </div>
        </MenuItem>
        <div id="logo-text" className='p-0 m-0 top-5 left-0 cursor-pointer'>
          <img src={logo} alt="Logo" className="h-auto w-16" onClick={() => scrollToHome("home")} />
        </div>
        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink scrollToSection={scrollToSection} href="projects">Projects</HoveredLink>
            <HoveredLink scrollToSection={scrollToSection} href="skills">Skills</HoveredLink>
            <HoveredLink scrollToSection={scrollToSection} href="experience">Experiences</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
