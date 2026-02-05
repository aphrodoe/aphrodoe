import { GridScan } from './GridScan';
import { GlassNavbar } from './GlassNavbar';
import { blogs } from '../lib/blogs';

export const BlogPage = () => {
  const blogPosts = blogs;

  const navigateToArticle = (id: number) => {
    window.history.pushState(null, '', `/blog/${id}`);
    window.dispatchEvent(new Event('pushstate'));
  };

  return (
    <div className="relative w-full min-h-screen bg-black font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="sticky top-6 z-50 flex justify-center w-full mb-10 pointer-events-none">
          <GlassNavbar />
        </div>

        <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
          <div className="w-full py-20 text-center pointer-events-auto">
            <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-purple-200 shadow-lg">
              Blog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              All Articles
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              My own thoughts as well as some technical blogs.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 pointer-events-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigateToArticle(post.id)}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 inline-block w-fit">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 line-clamp-3 group-hover:text-purple-300 transition-colors flex-grow">
                    {post.title}
                  </h2>

                  <p className="text-white/60 text-sm mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-white/40 pt-6 border-t border-white/10">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="mt-4">
                    <span className="text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors inline-flex items-center gap-2">
                      Read Full Article
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};