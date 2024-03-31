import classNames from "classnames";
import { MetadataByChar } from "@/Metadata";
import { Consonant, Letter, Palatalization } from "./categories";
import * as Glyph from "../Glyph";

const baseClasses = [Glyph.nonLatin, Glyph.cyrillic];

const lowercase_letters: MetadataByChar = {
  а: {
    annotation: "a",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.hardening
    )
  },

  б: {
    annotation: "b",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  в: {
    annotation: "v",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  г: {
    annotation: "g",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  д: {
    annotation: "d",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  е: {
    annotation: "e",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.softening
    )
  },

  ё: {
    annotation: "ë",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.softening
    )
  },

  ж: {
    annotation: "ž",
    className: classNames(
      ...baseClasses,
      Letter.consonant,
      Consonant.voiced,
      Palatalization.always_hard
    )
  },

  з: {
    annotation: "z",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  и: {
    annotation: "i",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.softening
    )
  },

  й: {
    annotation: "j",
    className: classNames(
      ...baseClasses,
      Letter.semiconsonant,
      Palatalization.softening
    )
  },

  к: {
    annotation: "k",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  л: {
    annotation: "l",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  м: {
    annotation: "m",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  н: {
    annotation: "n",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  о: {
    annotation: "o",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.hardening
    )
  },

  п: {
    annotation: "p",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  р: {
    annotation: "r",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiced)
  },

  с: {
    annotation: "s",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  т: {
    annotation: "t",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  у: {
    annotation: "u",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.hardening
    )
  },

  ф: {
    annotation: "f",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  х: {
    annotation: "h",
    className: classNames(...baseClasses, Letter.consonant, Consonant.voiceless)
  },

  ц: {
    annotation: "c",
    className: classNames(
      ...baseClasses,
      Letter.consonant,
      Consonant.voiceless,
      Palatalization.always_hard
    )
  },

  ч: {
    annotation: "č",
    className: classNames(
      ...baseClasses,
      Letter.consonant,
      Consonant.voiceless,
      Palatalization.always_soft
    )
  },

  ш: {
    annotation: "š",
    className: classNames(
      ...baseClasses,
      Letter.consonant,
      Consonant.voiceless,
      Palatalization.always_hard
    )
  },

  щ: {
    annotation: "šč",
    className: classNames(
      ...baseClasses,
      Letter.consonant,
      Consonant.voiceless,
      Palatalization.always_soft
    )
  },

  ъ: {
    annotation: "ʺ",
    className: classNames(...baseClasses, Letter.sign, Palatalization.hardening)
  },

  ы: {
    annotation: "y",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.hardening
    )
  },

  ь: {
    annotation: "ʹ",
    className: classNames(...baseClasses, Letter.sign, Palatalization.softening)
  },

  э: {
    annotation: "è",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.hardening
    )
  },

  ю: {
    annotation: "ju",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.softening
    )
  },

  я: {
    annotation: "ja",
    className: classNames(
      ...baseClasses,
      Letter.vowel,
      Palatalization.softening
    )
  }
};

const uppercase_letters = Object.fromEntries(
  Object.entries(lowercase_letters).map(([lowercase, metadata]) => [
    lowercase.toUpperCase(),
    {
      ...metadata,
      annotation: metadata.annotation?.toUpperCase()
    }
  ])
);

export const metadataByChar: MetadataByChar = {
  ...lowercase_letters,
  ...uppercase_letters
};
