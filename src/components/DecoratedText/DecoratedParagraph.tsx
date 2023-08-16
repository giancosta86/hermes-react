import React, { useMemo } from "react";
import { MetadataByChar } from "./Metadata";
import { DecoratedChar } from "./DecoratedChar";

export interface DecoratedParagraphProps {
  text: string;
  metadataByChar: MetadataByChar;
}

export const DecoratedParagraph = ({
  text,
  metadataByChar
}: DecoratedParagraphProps) => {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <>
      {chars.map((char, index) => {
        if (char == "\n") {
          return <br key={index} />;
        }

        const metadata = metadataByChar.get(char);

        return metadata && (metadata.annotation || metadata.className) ? (
          <DecoratedChar key={index} char={char} metadata={metadata} />
        ) : (
          <React.Fragment key={index}>{char}</React.Fragment>
        );
      })}
    </>
  );
};
