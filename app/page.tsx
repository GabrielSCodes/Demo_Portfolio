import Image from "next/image";
import AbMePg from "./pages/AboutMe";
export default function Home() {
  return (
    <div className="flex-col min-h-screen bg-white font-sans dark:bg-white">
      <AbMePg/>
      <div className="bg-[#]">
        <p className="default_font">This is My Style Sheet</p>
        <p className="heading1">Heading 1</p>
        <p className="heading2">Heading 2</p>
        <p className="heading3">Heading 3</p>
        <p className="heading4">Heading 4</p>
        <p className="paragraph1">Paragraph 1</p>
        <p className="paragraph2">Paragraph 2</p>
      </div>
    </div>
  );
}