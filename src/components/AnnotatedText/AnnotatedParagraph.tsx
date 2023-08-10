import React, { useMemo } from "react";
import { MetadataByChar } from "./Metadata";
import { AnnotatedChar } from "./AnnotatedChar";

export interface AnnotatedParagraphProps {
  text: string;
  metadataByChar: MetadataByChar;
}

export const AnnotatedParagraph = ({
  text,
  metadataByChar
}: AnnotatedParagraphProps) => {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <>
      {chars.map((char, index) => {
        if (char == "\n") {
          return <br key={index} />;
        }

        const metadata = metadataByChar.get(char);

        return metadata ? (
          <AnnotatedChar key={index} char={char} metadata={metadata} />
        ) : (
          <React.Fragment key={index}>{char}</React.Fragment>
        );
      })}
    </>
  );
};
