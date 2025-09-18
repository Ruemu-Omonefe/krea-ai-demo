export default function Footer() {
  return (
    <footer className="p-6 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-800">
      <div className="flex justify-between items-center">
        <p>© {new Date().getFullYear()} Krea AI</p>
        <p className="text-xs">curated by Mobbin</p>
      </div>
    </footer>
  );
}
