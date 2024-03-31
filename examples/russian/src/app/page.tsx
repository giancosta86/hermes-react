import { DecoratedText, Russian } from "@giancosta86/hermes-react";

export default function Home() {
  return (
    <DecoratedText
      text="АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя"
      metadataByChar={Russian.metadataByChar}
    />
  );
}
