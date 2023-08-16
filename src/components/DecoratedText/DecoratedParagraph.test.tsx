import React from "react";
import { create } from "react-test-renderer";
import { HashMap } from "@rimbu/hashed";
import { DecoratedParagraph } from "./DecoratedParagraph";
import { Char, CharMetadata } from "./Metadata";
import { Pinyin } from "@/glyphs";

describe("<DecoratedParagraph>", () => {
  describe("when receiving a paragraph with no metadata", () => {
    it("should render just plain characters", () => {
      const renderer = create(
        <DecoratedParagraph text="Dodo" metadataByChar={HashMap.empty()} />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with one intermediate newline", () => {
    it("should render the newline as a <br/>", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"Alpha\nBeta"}
          metadataByChar={HashMap.empty()}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with multiple intermediate newlines", () => {
    it("should render every newline as a <br/>", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"Alpha\nBeta\nGamma"}
          metadataByChar={HashMap.empty()}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with one character having annotation and classes", () => {
    it("should render that character with a <ruby> tag having classes", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我爱看书，你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>([
            "书",
            { annotation: "shū", className: Pinyin.flat }
          ])}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with one character having annotation but no classes", () => {
    it("should render that character with a classless <ruby> tag", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我爱看书，你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>([
            "书",
            { annotation: "shū" }
          ])}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with one character having neither annotation nor classes", () => {
    it("should render that character with no tags", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我爱看书，你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>(["书", {}])}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with one character having classes but no annotation", () => {
    it("should render that character with a <span> tag", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我爱看书，你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>([
            "书",
            { className: Pinyin.flat }
          ])}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with multiple characters having annotation and classes", () => {
    it("should render such characters with <ruby> tags having classes", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我爱看书，你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>(
            ["看", { annotation: "kàn", className: Pinyin.falling }],
            ["书", { annotation: "shū", className: Pinyin.flat }],
            ["呢", { annotation: "ne", className: Pinyin.neuter }]
          )}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a paragraph with multiple characters having annotation and/or classes, as well as newlines", () => {
    it("should render everything in a suitable way", () => {
      const renderer = create(
        <DecoratedParagraph
          text={"我\n爱看书，\n你呢？"}
          metadataByChar={HashMap.of<Char, CharMetadata>(
            ["看", { annotation: "kàn" }],
            ["书", { annotation: "shū", className: Pinyin.flat }],
            ["呢", { className: Pinyin.neuter }]
          )}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
