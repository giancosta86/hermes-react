import React from "react";
import { create } from "react-test-renderer";
import classnames from "classnames";
import { DecoratedChar } from "./DecoratedChar";

describe("<DecoratedChar>", () => {
  describe("when receiving a character with annotation and classes", () => {
    it("should render a <ruby> tag having classes", () => {
      const renderer = create(
        <DecoratedChar
          char="A"
          metadata={{
            annotation: "shū",
            className: classnames("alpha", "beta")
          }}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receiving a character with annotation only", () => {
    it("should render a classless <ruby> tag", () => {
      const renderer = create(
        <DecoratedChar char="A" metadata={{ annotation: "shū" }} />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("when receving a character with classes and no annotation", () => {
    it("should render a <span> with classes", () => {
      const renderer = create(
        <DecoratedChar
          char="A"
          metadata={{ className: classnames("alpha", "beta") }}
        />
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
