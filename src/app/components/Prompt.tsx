import { Image, Video, Wand2, Pen, Ruler, Folder, ChevronDown } from "lucide-react";

const items = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: Image,
    badge: "New",
    color: "bg-gradient-to-b from-blue-950 to-gray-200 dark:bg-bl-800",
  },
  {
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: Video,
    color: "bg-yellow-500",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: Wand2,
    color: "bg-gradient-to-b from-sky-600 to-sky-200",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: Ruler,
    badge: "New",
    color: "bg-gradient-to-b from-neutral-800 to-neutral-300",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: Pen,
    badge: "New",
    color: "bg-gradient-to-b from-neutral-900 to-purple-300",
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: Folder,
    badge: "New",
    color: "bg-gradient-to-b from-emerald-900 to-amber-300",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: Wand2,
    badge: "New",
    color: "bg-neutral-900 dark:bg-neutral-400",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: Image,
    color: "bg-gradient-to-b from-pink-800 to-pink-300",
  },
];

export default function Prompt() {
  return (
    <section className="p-6 w-full mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold dark:text-white">Generate</h2>
          <button className="text-sm text-blue-500 cursor-pointer flex items-end"><ChevronDown size={18}/> Show all </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(({ title, description, icon: Icon, badge, color }, i) => (
            <div key={i} className="flex items-start justify-between gap-4 py-4 md:px-4 bg-transparent hover:shadow transition cursor-pointer">
              <div className="flex gap-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg text-white bg-gray-100 shrink-0 ${color}`}><Icon size={20} /> </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold dark:text-white">{title}</h3>
                    {badge && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">{badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">{description}</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700 transition font-medium cursor-pointer">
                Open
              </button>
            </div>
          ))}
        </div>
      </section>
  );
}
