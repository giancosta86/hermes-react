import classnames from "classnames";
import * as Glyph from "./Glyph";
import * as PinyinTone from "./PinyinTone";

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
