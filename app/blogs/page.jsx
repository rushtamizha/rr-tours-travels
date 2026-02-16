"use client";

import Link from "next/link";
import { blogs } from "../data/blogs.js";
import Navbar from "../components/Navbar";
import GoldSparkleBackground from "../components/GoldSparkleBackground.jsx";

export default function BlogsPage() {
  return (
    <section className="bg-black min-h-screen py-34 px-6">
      <Navbar />
      <GoldSparkleBackground/>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-400 mb-14">
          Travel Blogs & Guides
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              href={`/blogs/${blog.slug}`}
              className="
              block rounded-[26px]
              border border-[#FFD700]/30
              bg-gradient-to-b from-[#111] via-[#120f00] to-[#1a1400]
              p-8
              
              transition
              "
            >
              <h2 className="text-xl text-[#FFD700] mb-3">
                {blog.title}
              </h2>

              <p className="text-white">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
