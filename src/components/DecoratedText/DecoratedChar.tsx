import React from "react";

export type Char = string;

export type CharMetadata = Readonly<{
  annotation?: string;
  className?: string;
}>;

export interface DecoratedCharProps {
  char: string;
  metadata: CharMetadata;
}

export const DecoratedChar = ({ char, metadata }: DecoratedCharProps) =>
  metadata.annotation ? (
    <ruby className={metadata.className}>
      {char}
      <rp>(</rp>
      <rt>{metadata.annotation}</rt>
      <rp>)</rp>
    </ruby>
  ) : (
    <span className={metadata.className}>{char}</span>
  );
