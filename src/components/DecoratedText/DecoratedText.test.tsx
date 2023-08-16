import React from "react";
import { create } from "react-test-renderer";
import { DecoratedText } from "./DecoratedText";
import { HashMap } from "@rimbu/hashed";
import { Char, CharMetadata } from "./Metadata";
import { Pinyin } from "@/glyphs";

describe("<DecoratedText>", () => {
  describe("when receiving text with no newlines", () => {
    it("should just render it in a single paragraph", () => {
      const renderer = create(
        <DecoratedText
          text={"我看书"}
          metadataByChar={HashMap.of<Char, CharMetadata>([
            "书",
            { annotation: "shū", className: Pinyin.flat }
          ])}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving text with leading and trailing space and no metadata", () => {
    it("should trim the text and render just plain characters in a single paragraph", () => {
      const renderer = create(
        <DecoratedText
          text={"  \t \nDodo  \r\n  \t"}
          metadataByChar={HashMap.empty()}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving text with multiple intermediate carriageReturn + lineFeed", () => {
    it("should ignore carriage returns", () => {
      const renderer = create(
        <DecoratedText
          text={"Alpha\r\nBeta\r\nGamma"}
          metadataByChar={HashMap.empty()}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving text with long sequences of intermediate newlines", () => {
    it("should ignore additional newlines", () => {
      const renderer = create(
        <DecoratedText
          text={"Alpha\n\n\n\nBeta\n\n\n\n\n\n\nGamma"}
          metadataByChar={HashMap.empty()}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving sophisticated text with different types of metadata and different blocks of newlines", () => {
    it("should render it correctly", () => {
      const renderer = create(
        <DecoratedText
          text={"Alpha1\nAlpha2\n\nBeta1\n我看书\nBeta3\nBeta4\n\n\n\nGamma"}
          metadataByChar={HashMap.of<Char, CharMetadata>(
            [
              "我",
              {
                annotation: "wǒ",
                className: Pinyin.fallingRising
              }
            ],
            [
              "看",
              {
                annotation: "kàn"
              }
            ],
            [
              "书",
              {
                className: Pinyin.flat
              }
            ]
          )}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
