import Image from 'next/image'

export default function Footer() {
  return (
   <footer className="md:sticky bottom-0 px-4 sm:px-6 py-4 text-sm text-gray-300 bg-neutral-800 z-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="rounded-lg bg-black flex items-center justify-center w-10 h-10">
          <Image src="/images/logo-dark.png" alt="logo" width={32} height={32} className="w-8 h-8" />
        </div>
        <p className="text-xl sm:text-2xl font-semibold">Krea AI</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg sm:text-2xl font-semibold">curated by</p>
        <div className="flex items-center gap-2">
          <svg className="w-14 h-auto sm:w-16" viewBox="0 0 139 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" fill="white" />
          </svg>
          <p className="text-2xl sm:text-3xl font-bold">Mobbin</p>
        </div>
      </div>
    </div>
  </footer>
  );
}
