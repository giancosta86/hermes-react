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

  export const flat = [...baseClasses, PinyinTone.flat] as const;

  export const rising = [...baseClasses, PinyinTone.rising] as const;

  export const fallingRising = [
    ...baseClasses,
    PinyinTone.fallingRising
  ] as const;

  export const falling = [...baseClasses, PinyinTone.falling] as const;

  export const neuter = [...baseClasses, PinyinTone.neuter] as const;
}
