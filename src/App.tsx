import { ArrowRight, BookOpen, Calendar, Dock, Eye, Goal, Stars, Swords } from "lucide-react";
import { Header } from "./components/Header";

export function App() {

  return (
    <div className="space-y-32">
      <Header />

      <div className="container mx-auto h-screen space-y-20 flex flex-col items-center">
        <div className="space-y-5">
          <h2 className="text-6xl text-center font-bold">
            Write. Plan, share. <br />
            With AI at your side.
          </h2>
          <p className="text-2xl text-center font-medium">Notion is the connected workspace where better, faster work happens.</p>
          <div className="flex items-center justify-center gap-5">
            <button className="flex items-center gap-2 p-2   bg-zinc-950 text-zinc-50 rounded font-medium">
              Get Notion free
              <ArrowRight/>
            </button>
            <button className="flex items-center gap-2 p-3 text-blue-600 font-medium rounded-lg">
              Request a demo
              <ArrowRight/>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="space-y-2 border-2 border-zinc-100 p-8 rounded-xl">
            <div className="w-8 h-8 p-1 bg-purple-200 rounded">
              <Stars className="size-6 text-purple-600"/>
            </div>
            <h3 className="text-lg font-bold">AI</h3>
            <p className="font-medium">
              Ask literally anything. <br />
              Notion will answer.
            </p>

            <a href="#" className="text-purple-500 font-medium flex items-center">
              Learn more
              <ArrowRight className="size-5 text-purple-500"/>
            </a>
          </div>

          <div className="space-y-2 border-2 border-zinc-100 p-8 rounded-xl">
            <div className="w-8 h-8 p-1 bg-amber-200 rounded">
              <Dock className="size-6 text-amber-600"/>
            </div>
            <h3 className="text-lg font-bold">Docs</h3>
            <p className="font-medium">
              Simple, powerful, gen <br />
              notes & docs.
            </p>

            <a href="#" className="text-amber-600 font-medium flex items-center">
              Learn more
              <ArrowRight className="size-5 text-amber-600"/>
            </a>
          </div>

          <div className="space-y-2 border-2 border-zinc-100 p-8 rounded-xl">
            <div className="w-8 h-8 p-1 bg-red-200 rounded">
              <BookOpen className="size-6 text-red-500"/>
            </div>
            <h3 className="text-lg font-bold">Wikis</h3>
            <p className="font-medium">
              Ask literally anything. <br />
              Notion will answer.
            </p>

            <a href="#" className="text-red-500 font-medium flex items-center">
              Learn more
              <ArrowRight className="size-5 text-red-500"/>
            </a>
          </div>

          <div className="space-y-2 border-2 border-zinc-100 p-8 rounded-xl">
            <div className="w-8 h-8 p-1 bg-blue-200 rounded">
              <Goal className="size-6 text-blue-500"/>
            </div>
            <h3 className="text-lg font-bold">Projects</h3>
            <p className="font-medium">
              Ask literally anything. <br />
              Notion will answer.
            </p>

            <a href="#" className="text-blue-500 font-medium flex items-center">
              Learn more
              <ArrowRight className="size-5 text-blue-500"/>
            </a>
          </div>

          <div className="space-y-2 border-2 border-zinc-100 p-8 rounded-xl">
            <div className="w-8 h-8 p-1 bg-orange-200 rounded">
              <Calendar className="size-6 text-orange-500"/>
            </div>
            <h3 className="text-lg font-bold">Calendar</h3>
            <p className="font-medium">
              Ask literally anything. <br />
              Notion will answer.
            </p>

            <a href="#" className="text-orange-500 font-medium flex items-center">
              Learn more
              <ArrowRight className="size-5 text-orange-500"/>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-5xl text-center font-bold">Millions run on Notion every day</h1>
          <p className="text-lg text-center">
            Powering the world's best teams, from next-generation startups <br />
            to estabilished enterprises.
          </p>
          <a href="" className="flex items-center gap-1 text-blue-400">
            Read customer stories
            <ArrowRight className="size-5 text-blue-400"/>
          </a>
        </div>

        <div className="flex items-center justify-center gap-10">
          <img src="/public/Image [jsx-49c0e2caa5445a33] (1).svg" alt="" />
          <img src="/public/Image [jsx-49c0e2caa5445a33] (2).svg" alt="" />
          <img src="/public/Image [jsx-49c0e2caa5445a33] (3).svg" alt="" />
          <img src="/public/Image [jsx-49c0e2caa5445a33].svg" alt="" />
          <img src="/public/Image [jsx-49c0e2caa5445a33]1.svg" alt="" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <h1 className="text-5xl font-bold text-center">
            Consolidate tools. <br />
            Cut costs.
          </h1>
          <img src="/public/Image [giantPencilIllustrationPng].png" alt="" />
        </div>

        <div className="space-y-10">
          <h1 className="text-5xl text-center font-bold">Powerfull building blocks</h1>

          <div className="flex flex-col w-[1024px] h-[852.57px] bg-zinc-100 rounded-xl p-8">
            <Swords className="text-blue-600 mb-3"/>
            <h3 className="font-semibold mb-3">Visualize, filter & sort any way you want</h3>
            <p className="">
              Show only tasks assigned to you, or items marked as urgent. Break <br />
              down any project in the way that’s most helpful to you.
            </p>
            <div className="w-[956px] mt-10">
              <img src="/public/product.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
  
          <div className="w-[500px] bg-zinc-100 rounded-xl p-8">
            <Eye className="text-blue-600 mb-3"/>
            <h3 className="font-semibold mb-3">Customize the info you track</h3>
            <p className="">
              Create your own labels, tags, owners, and more, so <br />
              everyone has context and everything stays organized.
            </p>
            <div className="mt-10">
              <img src="/public/data.png" alt="project data" />
            </div>
          </div>

          <div className="w-[500px] bg-zinc-100 rounded-xl p-8">
            <img src="/public/art.svg" alt="" className="mb-3"/>
            <h3 className="font-semibold mb-3">Build any page, communicate any idea</h3>
            <p className="">
              Everything is drag and drop in Notion — images, <br />
              toggles, to-do’s, even embedded databases.
            </p>
            <div className="mt-10">
              <img src="/public/data.png" alt="" />
            </div>
          </div>
        
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-center">Every team, side-by-side</h1>
          <img src="/public/Image [next-image] (2).png" alt="" />
          <img src="/public/Image [next-image] (1).png" alt="" className="border rounded-xl" />
        </div>
      </div>
    </div>
  )
}
