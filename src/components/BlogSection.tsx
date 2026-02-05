import { blogs } from '../lib/blogs';

export const BlogSection = () => {
  const blogPosts = blogs;

  const navigateToArticle = (id: number) => {
    window.history.pushState(null, '', `/blog/${id}`);
    window.dispatchEvent(new Event('pushstate'));
  };

  return (
    <section className="w-full py-20 pointer-events-auto">
      <div className="text-center mb-16">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-purple-200 shadow-lg">
           Latest Articles
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Blog
        </h2>
        
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          My own thoughts as well as some technical blogs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => navigateToArticle(post.id)}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <div className="mb-3 inline-block">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-white/40">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors inline-flex items-center gap-2">
                  Read Article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button 
          onClick={() => {
            window.history.pushState(null, '', '/blog');
            window.dispatchEvent(new Event('pushstate'));
          }}
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-200 font-medium hover:scale-105 inline-block"
        >
          View All Articles
        </button>
      </div>
    </section>
  );
};