"use client";

import { Icon } from "@iconify/react";

interface IconClientProps {
  icon: string;
  className?: string;
}

export function IconClient({ icon, className }: IconClientProps) {
  return <Icon icon={icon} className={className} />;
}
