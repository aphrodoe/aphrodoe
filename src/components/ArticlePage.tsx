import { GlassNavbar } from './GlassNavbar';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { getBlogById, blogs } from '../lib/blogs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticlePageProps {
  articleId: number;
}

export const ArticlePage = ({ articleId }: ArticlePageProps) => {
  const article = getBlogById(articleId);

  if (!article) {
    return (
      <div className="relative w-full min-h-screen bg-black font-sans selection:bg-purple-500/30">
        <div className="relative z-10 w-full min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="sticky top-6 z-50 flex justify-center w-full mb-10 pointer-events-none">
            <GlassNavbar />
          </div>

          <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold text-white">Article Not Found</h1>
            <p className="text-white/60 mt-4">Sorry, we couldn't find the article you're looking for.</p>
          </div>
        </div>
      </div>
    );
  }

  const goBack = () => {
    window.history.pushState(null, '', '/blog');
    window.dispatchEvent(new Event('pushstate'));
  };

  return (
    <div className="relative w-full min-h-screen bg-black font-sans selection:bg-purple-500/30">
      <div className="relative z-10 w-full min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="sticky top-6 z-50 flex justify-center w-full mb-10 pointer-events-none">
          <GlassNavbar />
        </div>

        <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 pointer-events-auto">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          <div className="w-full mb-12">
            <div className="mb-4 inline-block">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                {article.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <div className="text-white/40">
                By <span className="text-white/60">{article.author}</span>
              </div>
            </div>
          </div>

          <div className="w-full mb-12 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover opacity-70"
            />
          </div>

          <article className="w-full prose prose-invert max-w-none mb-20">
            <div className="text-white/80 leading-relaxed">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({node, ...props}) => (
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />
                  ),
                  code: ({node, inline, className, children, ...props}: any) => {
                    return !inline ? (
                      <div className="relative group">
                        <pre className="bg-black/50 border border-white/10 rounded-lg p-5 overflow-x-auto my-8 shadow-2xl">
                          <code className="text-sm text-purple-200 font-mono leading-relaxed" {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    ) : (
                      <code className="bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
                        {children}
                      </code>
                    )
                  },
                  p: ({node, ...props}) => (
                    <p className="text-white/80 leading-relaxed text-lg mb-6" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="list-disc list-inside space-y-3 ml-4 mb-8 text-white/80" {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li className="marker:text-purple-400" {...props} />
                  )
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </article>

          <div className="w-full border-t border-white/10 pt-12 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                <img 
                  src="/me.jpeg"
                  alt={article.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{article.author}</h3>
                <p className="text-white/60 text-sm">
                  Just a learner and builder.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pb-20">
            <h3 className="text-2xl font-bold text-white mb-8">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.filter((b) => b.id !== articleId).map((relatedArticle) => (
                <button
                  key={relatedArticle.id}
                  onClick={() => {
                    window.history.pushState(null, '', `/blog/${relatedArticle.id}`);
                    window.dispatchEvent(new Event('pushstate'));
                  }}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-left p-6"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                    {relatedArticle.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-purple-300 transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-white/60 text-sm">{relatedArticle.date}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};