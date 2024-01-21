import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import photo from "@/public/static/images/rohit.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-20">
      <div className="flex mb-4 gap-6">
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-[20rem] flex flex-wrap gap-2">
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  HTML
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  CSS
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  Javascript
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  React.js
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  Next.js
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  Tailwind CSS
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  Node.js
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  SQL
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  Python
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  C
                </div>
                <div className="bg-slate-600 text-slate-50 px-4 py-2 rounded-xl">
                  C++
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <div
            className="h-[34rem] w-[34rem] bg-slate-800 bg-opacity-70 text-slate-50 rounded-md shadow-lg
      backdrop-filter backdrop-blur-lg shadow-slate-800 flex flex-col items-center justify-center"
          >
            <div className="h-44 w-44 rounded-[100%] mx-auto p-6 bg-gray-700 flex shadow-xl shadow-slate-900">
              <Image
                src={photo}
                alt="Your Name"
                height={256}
                width={256}
                className="mx-auto translate-x-1"
              />
            </div>
            <h3 className="mt-6 text-2xl">Rohit Shukla</h3>
          </div>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="px-8 py-4 grid grid-cols-2">
                <div className="row-span-1 col-span-1 mx-auto">
                  <p className="text-slate-400">2022-2025</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <p>B.Sc. Computer Science</p>
                  <p className="text-sm text-slate-500 mb-6">
                    Department of Computer Science, Gujarat University
                  </p>
                </div>
                <div className="row-span-1 col-span-1 mx-auto">
                  <p className="text-slate-400">2021-2022</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <p>HSC</p>
                  <p className="text-sm text-slate-500 mb-6">
                    Airport School, Ahmedabad
                  </p>
                </div>
                <div className="row-span-1 col-span-1 mx-auto">
                  <p className="text-slate-400">2019-2020</p>
                </div>
                <div className="col-span-1 row-span-1">
                  <p>SSC</p>
                  <p className="text-sm text-slate-500 mb-6">
                    Airport School, Ahmedabad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
