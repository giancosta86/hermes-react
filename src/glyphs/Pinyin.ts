import classnames from "classnames";
import { Glyph } from "./Glyph";

export namespace PinyinTone {
  export const flat = "flat";

  export const rising = "rising";

  export const fallingRising = "falling-rising";

  export const falling = "falling";

  export const neuter = "neuter";
}

export namespace Pinyin {
  const baseClasses = [
    Glyph.nonLatin,
    Glyph.logogram,
    Glyph.chinese,
    Glyph.pinyin
  ] as const;

  export const flat = classnames(...baseClasses, PinyinTone.flat);

  export const rising = classnames(...baseClasses, PinyinTone.rising);

  export const fallingRising = classnames(
    ...baseClasses,
    PinyinTone.fallingRising
  );

  export const falling = classnames(...baseClasses, PinyinTone.falling);

  export const neuter = classnames(...baseClasses, PinyinTone.neuter);
}
