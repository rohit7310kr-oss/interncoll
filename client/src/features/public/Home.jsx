import {
  Banknote,
  BellRing,
  Bookmark,
  Briefcase,
  ChevronDown,
  Mail,
  MapPinSearch,
  Search,
  ThumbsDown,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Button from "../../shared/components/Button";
import Tag from "../../shared/components/Tag";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const closeDropdown = () => setShowDropdown(false);

  return (
    <div>
      <nav className="bg-gray-100 flex justify-between items-center px-4 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 shadow-lg text-white text-2xl font-extrabold tracking-tight">
            <span className="inline-block bg-white/15 px-3 py-1 rounded-full">
              Intern
            </span>
            <span className="ml-2">Coll</span>
          </div>
          <div>
            <ul className="flex">
              <li className="px-4 py-3 cursor-pointer">Home</li>
              <li className="px-4 py-3 cursor-pointer">Company</li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div>
            <ul className="flex">
              <li className="px-4 py-3 cursor-pointer">
                <Bookmark />
              </li>
              <li className="px-4 py-3 cursor-pointer">
                <Mail />
              </li>
              <li className="px-4 py-3 cursor-pointer">
                <BellRing />
              </li>
              <li className="px-4 py-3 cursor-pointer">
                <User />
              </li>
            </ul>
          </div>
          <div className="relative" tabIndex={0} onBlur={closeDropdown}>
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex items-center gap-1 px-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
              aria-expanded={showDropdown}
            >
              <span>Employee</span>
              <ChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <section className="py-6 flex justify-center align-middle ">
        <div className="border rounded-2xl flex">
          <div className="flex px-2">
            <span className="h-auto my-auto">
              <Search />
            </span>
            <input
              type="text"
              className="p-3 focus:outline-0 rounded-2xl rounded-r-sm border-r"
              placeholder="Work"
            />
          </div>
          <div className="flex px-2">
            <span className="h-auto my-auto">
              <MapPinSearch />
            </span>
            <input
              type="text"
              className="p-3 focus:outline-0 rounded-2xl"
              placeholder="Work"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-10 p-4 relative">
        <divd>
          <div className="border rounded-2xl p-3 mb-3">
            <Tag variant="primary">Special </Tag>
            <div className="text-2xl">Full stack web development</div>
            <div className="text-md">Nexgensis</div>
            <div className="text-md">Remote</div>
            <div>
              <Tag variant="secondary">Paid sick</Tag>
            </div>
          </div>
        </divd>

        <div className="bg-green-50 border rounded-2xl px-3 py-4 sticky top-0 right-0 h-screen overflow-auto">
          <div className="border-b py-3">
            <div className="text-2xl font-medium">
              Full stack web development
            </div>
            <div>
              <span>nexgensis</span> | <span>Remote</span> |{" "}
              <span>from 500/month</span>
            </div>
            <div className="flex align-middle py-3  ">
              <Button variant="primary">Apply</Button>
              <Button variant="secondary">
                <Bookmark />
              </Button>
              <Button variant="secondary">
                <ThumbsDown />
              </Button>
            </div>
          </div>
          <div className="border-b py-4">
            <div className="text-xl py-2">Job details</div>
            <div className="flex gap-1 mb-2">
              <span className="flex gap-1">
                <Banknote />
                <p>Paid:</p>
              </span>
              <span className="border rounded-2xl px-2 bg-gray-300">$40</span>
            </div>

            <div className="flex gap-1">
              <span className="flex gap-1">
                <Briefcase />
                <p>work type:</p>
              </span>
              <span className="border rounded-2xl px-2 bg-gray-300">
                Remote
              </span>
            </div>
          </div>
          <div>
            <div className="border-b py-4">
              <div className="text-xl py-2">Job Description</div>
              <div className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                error nam a autem, minus architecto facilis modi amet quos
                voluptatum, quo facere nemo sapiente quasi eos! Commodi, fugit!
                Molestias odit veniam adipisci fuga iste aliquam minus ab
                expedita animi magni maiores voluptatem cupiditate provident,
                laboriosam at. Totam enim placeat numquam!
              </div>
              <div>
                <p className="py-1 font-bold">Role:</p>
                <ul className="px-3 list-disc">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, voluptatem?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, voluptatem?
                  </li>

                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, voluptatem?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, voluptatem?
                  </li>
                </ul>
                <div className="py-3">
                  <p className="font-bold">Required skill</p>
                  <ul className="list-disc px-3">
                    <li className="list-disc">React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Mongodb</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4">
              <Button variant="secondary">Report job</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
