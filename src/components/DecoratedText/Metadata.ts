import { RMap } from "@rimbu/collection-types";

export type Char = string;

export type CharMetadata = Readonly<{
  annotation?: string;
  className?: string;
}>;

export type MetadataByChar = RMap<Char, CharMetadata>;
