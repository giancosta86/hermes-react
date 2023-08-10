import React, { useMemo } from "react";
import { MetadataByChar } from "./Metadata";
import { AnnotatedParagraph } from "./AnnotatedParagraph";

export interface AnnotatedTextProps {
  text: string;
  metadataByChar: MetadataByChar;
}

export const AnnotatedText = ({ text, metadataByChar }: AnnotatedTextProps) => {
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
          <AnnotatedParagraph
            text={paragraph}
            metadataByChar={metadataByChar}
          />
        </p>
      ))}
    </>
  );
};
