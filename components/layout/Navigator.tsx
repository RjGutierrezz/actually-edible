"use client";

import type { ReactNode } from "react";

import StaggeredMenu from "@/components/react-bits/StaggeredMenu";
import { navigationItems, siteIntro, socialLinks } from "@/components/site/content";

type NavigatorProps = {
  children: ReactNode;
};

export default function Navigator({ children }: NavigatorProps) {
  const menuItems = navigationItems.map((item) => ({
    label: item.label,
    ariaLabel: `Go to ${item.label.toLowerCase()} page`,
    link: item.href,
  }));

  const menuSocialItems = socialLinks.map((link) => ({
    label: link.label,
    link: link.href,
  }));

  return (
    <div className="relative z-10 min-h-screen bg-surface text-on-surface">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={menuSocialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#17341d"
        openMenuButtonColor="#17341d"
        changeMenuColorOnOpen
        colors={["#974723", "#2d4b32"]}
        accentColor="#2d4b32"
        isFixed
      />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-24 px-5 pt-24 pb-12 sm:px-8 lg:px-10 lg:pt-28 lg:pb-16">
        {children}
      </main>
      <footer className="bg-surface-container/88">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-12">
          <div className="space-y-4">
            <p className="font-label text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {siteIntro.name}
            </p>
            <p className="max-w-xl font-body text-lg italic text-on-surface/76">{siteIntro.description}</p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-label text-xs font-bold uppercase tracking-[0.24em] text-primary/62 transition hover:text-secondary"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="font-body text-base italic text-on-surface/68">
              Crafted as a lasting kitchen archive.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
