"use client";

import { Icon } from "@iconify/react";

interface IconClientProps {
  icon: string;
}

export function IconClient({ icon }: IconClientProps) {
  return <Icon icon={icon} />;
}
