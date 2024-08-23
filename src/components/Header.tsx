export function Header() {
  return (
    <header className="container mx-auto py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h3 className="text-xl font-bold">Notion</h3>
        <nav className="">
          <ul className="flex items-center gap-5 cursor-pointer">
            <li className="font-medium text-zinc-700">Product</li>
            <li className="font-medium text-zinc-700">Download</li>
            <li className="font-medium text-zinc-700">Solutions</li>
            <li className="font-medium text-zinc-700">Resources</li>
            <li className="font-medium text-zinc-700">Pricing</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <button className="font-medium text-zinc-700">
          Request a demo
        </button>

        <div className='w-px h-5 bg-zinc-200'/>

        <button className="font-medium text-zinc-700">
          Log in
        </button>

        <button className="bg-zinc-950 h-7 px-3 text-zinc-50 rounded-lg font-medium">
          Get Notion free
        </button>
      </div>
    </header>
  )
}