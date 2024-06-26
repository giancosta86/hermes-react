import React, { useMemo } from "react";
import { HashMap } from "@rimbu/hashed";
import { CharMetadataMap, MetadataByChar } from "@/Metadata";
import { DecoratedParagraph } from "./DecoratedParagraph";

export interface DecoratedTextProps {
  text: string;
  metadataByChar: MetadataByChar;
}

export const DecoratedText = ({ text, metadataByChar }: DecoratedTextProps) => {
  const charMetadataMap: CharMetadataMap = useMemo(
    () => HashMap.from(Object.entries(metadataByChar)),
    [metadataByChar]
  );

  const paragraphs = useMemo(
    () =>
      text
        .trim()
        .replaceAll("\r\n", "\n")
        .split(/\n\n+/)
        .filter(line => line.length),
    [text]
  );

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <DecoratedParagraph
            text={paragraph}
            charMetadataMap={charMetadataMap}
          />
        </p>
      ))}
    </>
  );
};
