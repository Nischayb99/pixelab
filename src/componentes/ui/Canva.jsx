
import { Stage, Layer, Image as KImage, Text, Transformer } from "react-konva";

export default function CanvasEditor() {
  return (
    <div
      className="border border-dashed border-red-400"
    >
      {/* Canva */}
      <div
        className="h-[calc(100vh-180px)] sm:h-[calc(100vh-81px)] w-[calc(100vw-1px)] sm:w-[calc(100vw-20%)] bg-[#222]"
      >
      </div>
    </div>
  );
}
