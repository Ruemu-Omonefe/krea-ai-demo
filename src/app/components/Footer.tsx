import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="sticky bottom-0 px-6 py-4 text-sm text-gray-300 bg-neutral-800">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className=" rounded-lg bg-black">
            <Image src="/images/logo-dark.png" alt='logo'  width={32} height={32}></Image>
          </div>
          <p className='text-2xl font-semibold self-end'>Krea AI</p>
        </div>
        <div className="flex gap-7 items-end">
          <p className="text-2xl font-semibold">curated by</p>
          <div className="flex gap-2 items-end">
            <svg width="70" height="45" viewBox="0 0 139 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" fill="white" />
            </svg>
            <p className="text-3xl font-bold">Mobbin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
