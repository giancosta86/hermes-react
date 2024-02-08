# Major changes

## Version 3

- `MetadataByChar` is no more a Rimbu map, but a plain object whose keys are each single character and whose values are of type `CharMetadata`

## Version 2

- `AnnotatedText` renamed to `DecoratedText`

- `Metadata.classes` renamed to `Metadata.className` and now a `string`; consequently, `Pinyin` now contains `string` constants

- `Metadata.annotation` is now optional - making the character rendered as a `<span>`
