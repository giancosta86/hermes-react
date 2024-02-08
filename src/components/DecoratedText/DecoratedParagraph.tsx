import React, { useMemo } from "react";
import { RMap } from "@rimbu/collection-types";
import { Char, CharMetadata } from "./DecoratedChar";
import { DecoratedChar } from "./DecoratedChar";

export type CharMetadataMap = RMap<Char, CharMetadata>;

export interface DecoratedParagraphProps {
  text: string;
  charMetadataMap: CharMetadataMap;
}

export const DecoratedParagraph = ({
  text,
  charMetadataMap
}: DecoratedParagraphProps) => {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <>
      {chars.map((char, index) => {
        if (char == "\n") {
          return <br key={index} />;
        }

        const metadata = charMetadataMap.get(char);

        return metadata && (metadata.annotation || metadata.className) ? (
          <DecoratedChar key={index} char={char} metadata={metadata} />
        ) : (
          <React.Fragment key={index}>{char}</React.Fragment>
        );
      })}
    </>
  );
};
