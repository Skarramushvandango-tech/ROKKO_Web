import React, { useState } from 'react';
import { MessageCircle, User, Clock, Mail } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  timestamp: string;
  approved: boolean;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Music Fan',
      email: 'fan@example.com',
      content: 'Love the new releases! Keep up the great work ROKKO!',
      timestamp: '2024-01-15 14:30',
      approved: true
    },
    {
      id: '2',
      author: 'Producer X',
      email: 'producer@example.com',
      content: 'Interested in collaborating. The sound quality is amazing.',
      timestamp: '2024-01-14 09:15',
      approved: true
    }
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.includes('@')) {
      setIsLoggedIn(true);
      setShowLoginForm(false);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate comment submission to moderation queue
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: loginEmail.split('@')[0],
        email: loginEmail,
        content: newComment,
        timestamp: new Date().toLocaleString(),
        approved: false // Comments start in moderation queue
      };

      // In real implementation, this would go to moderation queue
      // For demo, we'll add it as pending
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setIsSubmitting(false);
      
      alert('Comment submitted for moderation. It will appear after approval.');
    }, 1000);
  };

  const approvedComments = comments.filter(comment => comment.approved);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F3BB] mb-4">
            Community Comments
          </h1>
          <p className="text-[#96897B] text-lg">
            Share your thoughts about ROKKO! Records
          </p>
        </div>

        {/* Login/Comment Form */}
        <div className="bg-[#483D03]/20 rounded-lg p-6 md:p-8 border border-[#483D03] mb-12">
          {!isLoggedIn ? (
            <>
              {!showLoginForm ? (
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-[#96897B] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#F5F3BB] mb-2">
                    Want to leave a comment?
                  </h3>
                  <p className="text-[#96897B] mb-6">
                    Please log in with your email to post a comment
                  </p>
                  <button
                    onClick={() => setShowLoginForm(true)}
                    className="bg-[#483D03] hover:bg-[#483D03]/80 text-[#F5F3BB] px-6 py-3 rounded-lg transition-all duration-200 font-medium flex items-center gap-2 mx-auto"
                  >
                    <Mail size={20} />
                    Login with Email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-[#F5F3BB] mb-4 text-center">
                    Email Login
                  </h3>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowLoginForm(false)}
                      className="flex-1 bg-[#96897B] hover:bg-[#96897B]/80 text-[#262626] px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#483D03] hover:bg-[#483D03]/80 text-[#F5F3BB] px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#96897B]" />
                  <span className="text-[#F5F3BB]">Logged in as: {loginEmail}</span>
                </div>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setLoginEmail('');
                    setNewComment('');
                  }}
                  className="text-[#96897B] hover:text-[#F5F3BB] transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
              
              <form onSubmit={handleCommentSubmit}>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors resize-vertical"
                    placeholder="Share your thoughts..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#483D03] hover:bg-[#483D03]/80 disabled:bg-[#483D03]/50 text-[#F5F3BB] px-6 py-3 rounded-lg transition-all duration-200 font-medium flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#F5F3BB]" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      Post Comment
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-4 p-3 bg-[#96897B]/20 rounded-lg border border-[#96897B]">
                <p className="text-sm text-[#96897B]">
                  <strong>Note:</strong> Your comment will be reviewed before appearing publicly. 
                  You'll receive an email notification once it\'s approved.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#F5F3BB] mb-6">
            Comments ({approvedComments.length})
          </h2>
          
          {approvedComments.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-[#96897B] mx-auto mb-4" />
              <p className="text-[#96897B] text-lg">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            approvedComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-[#483D03]/20 rounded-lg p-6 border border-[#483D03]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#483D03] rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-[#F5F3BB]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F5F3BB]">{comment.author}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#96897B] text-sm">
                    <Clock size={14} />
                    {comment.timestamp}
                  </div>
                </div>
                <p className="text-[#F5F3BB] leading-relaxed">{comment.content}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#96897B] text-sm">
            Note: Comment system requires backend integration for email authentication, 
            moderation queue, and email notifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;