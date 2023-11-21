import React from 'react';

export interface IntroProps {
  children?: React.ReactNode;
}

export function Intro({ children }: IntroProps) {
  return <div className="font-display text-[16px] text-primary dark:text-primary-dark leading-relaxed">{children}</div>;
}
