import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "Learn how to make your digital products accessible to everyone with our comprehensive guide to inclusive design practices.",
    date: "March 28, 2024",
    author: "Alex Johnson",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586776802572-01f8a821e3cc?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Web Animation with GSAP",
    excerpt: "Explore the possibilities of creating smooth, engaging web animations using the GSAP library. From basic transitions to complex sequences.",
    date: "March 15, 2024",
    author: "Sarah Chen",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551651653-c5dcb914d809?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Optimizing React Applications for Performance",
    excerpt: "Practical strategies to improve the performance of your React applications. Learn about code splitting, memoization, and more.",
    date: "February 28, 2024",
    author: "Michael Rodriguez",
    category: "Development",
    image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Creating Effective User Onboarding Experiences",
    excerpt: "Discover how to design user onboarding flows that reduce friction and increase user activation for your digital products.",
    date: "February 12, 2024",
    author: "Emily Peterson",
    category: "UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "The Impact of AI on Web Development",
    excerpt: "How artificial intelligence is changing the landscape of web development and what it means for developers in 2024.",
    date: "January 30, 2024",
    author: "David Kim",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Mastering CSS Grid for Responsive Layouts",
    excerpt: "A deep dive into CSS Grid and how to leverage it for creating complex, responsive layouts with less code.",
    date: "January 15, 2024",
    author: "Lisa Wang",
    category: "Development",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
  }
];

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Insights, updates, and resources from our team of experts.
                Stay informed about the latest trends and technologies.
              </p>
            </motion.div>

            <div className="flex flex-wrap mb-12">
              <div className="w-full md:w-3/4 p-2">
                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                />
              </div>
              <div className="w-full md:w-1/4 p-2">
                <motion.select
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                >
                  <option value="">All Categories</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="technology">Technology</option>
                  <option value="ux">UX</option>
                </motion.select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <span className="text-gray-400 text-xs">By {post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">{post.excerpt}</p>
                    
                    <a 
                      href={`/blog/${post.id}`} 
                      className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 mt-auto"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex space-x-1"
              >
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  2
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  3
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Next →
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;