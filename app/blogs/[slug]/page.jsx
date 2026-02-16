import { blogs } from "@/app/data/blogs";
import Navbar from "../../components/Navbar";
import WhatsAppCTA from "../../components/WhatsAppCTA";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import GoldSparkleBackground from "@/app/components/GoldSparkleBackground";

/* ===== SEO METADATA ===== */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Travel Blogs | RR Tours & Stays",
      description:
        "Explore travel guides, tour packages and travel agency services across Tamil Nadu.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

/* ===== PAGE (SERVER COMPONENT) ===== */

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <section className="bg-black min-h-screen py-24 px-6">
      <Navbar />
      <GoldSparkleBackground/>

      <div className="max-w-4xl mx-auto m-10">
        {/* TITLE */}
        <h1 className="text-4xl text-[#FFD700] mb-6">
          {blog.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white mb-10">
          {blog.description}
        </p>

        {/* CONTENT */}
        <div className="text-white/80 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

        {/* CTA BUTTON (CLIENT COMPONENT) */}
        <WhatsAppCTA
          title={blog.title}
          location={blog.location}
        />
      </div>
      <Footer/>
    </section>
  );
}
