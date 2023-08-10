import React from "react";
import classnames from "classnames";
import { CharMetadata } from "./Metadata";

export interface AnnotatedCharProps {
  char: string;
  metadata: CharMetadata;
}

export const AnnotatedChar = ({ char, metadata }: AnnotatedCharProps) => (
  <ruby className={classnames(...metadata.classes)}>
    {char}
    <rp>(</rp>
    <rt>{metadata.annotation}</rt>
    <rp>)</rp>
  </ruby>
);
