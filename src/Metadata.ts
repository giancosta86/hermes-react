import { RMap } from "@rimbu/collection-types";

export type Char = string;

export type CharMetadata = Readonly<{
  annotation?: string;
  className?: string;
}>;

export type CharMetadataMap = RMap<Char, CharMetadata>;

export type MetadataByChar = Readonly<{ [char: Char]: CharMetadata }>;
