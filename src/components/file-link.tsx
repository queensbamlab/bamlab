"use client";
import { ReactNode } from "react";
import Link from "next/link";

interface FileLinkProps {
  href: string; // e.g. "/files/cv.pdf"
  children: ReactNode;
  forceDownload?: boolean; // true = download, false = open in new tab
  trackName?: string; // e.g. "Download: CV"
  className?: string; // Optional className prop
}

export default function FileLink({
  href,
  children,
  forceDownload = false,
  trackName,
  className,
}: FileLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      // 'download': if present, tells browser to download instead of navigate
      // 'target="_blank"': opens in new tab (good for PDFs if not downloading)
      download={forceDownload}
      target={forceDownload ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-umami-event={`${trackName} Clicked`}
    >
      {children}
    </Link>
  );
}
