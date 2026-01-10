import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Books = () => {
  const { isDarkMode } = useTheme();
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: 'the alchemist',
      author: 'paulo coeilho',
      image: './book/photo_2026-01-09_23-19-58.jpg',
      rating: 5,
      description: 'A must-read for every software developer. This book teaches professionalism, ethics, and best practices in software development.',
      recommendation: 'Perfect for developers who want to elevate their craft and become true professionals.',
      amazonLink: '#',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      image: './book/photo_2026-01-09_23-21-15.jpg',
      rating: 5,
      description: 'An incredible guide to building good habits and breaking bad ones. Life-changing insights on personal development.',
      recommendation: 'Essential for anyone looking to improve their daily routines and achieve long-term success.',
      amazonLink: '#',
      category: 'Self-Help'
    },
    {
      id: 3,
      title: 'ለአሸናፊነት መገዛት',
      author: 'paulo coeilho',
      image: './book/photo_2026-01-09_23-23-32.jpg',
      rating: 5,
      description: 'The definitive guide to writing readable, maintainable, and elegant code. A cornerstone book for developers.',
      recommendation: 'Every programmer should read this. It will transform how you write and think about code.',
      amazonLink: '#',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'አለመኖር',
      author: 'dr. dawit ',
      image: './book/photo_2026-01-09_23-23-49.jpg',
      rating: 5,
      description: 'Timeless advice for software developers. Covers everything from personal responsibility to architectural techniques.',
      recommendation: 'A classic that every developer should have on their shelf. Practical wisdom that never gets old.',
      amazonLink: '#',
      category: 'Programming'
    },
    {
      id: 5,
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      image: './book/photo_2026-01-09_23-48-13.jpg',
      rating: 4,
      description: 'Classic personal development book about achieving success through positive thinking and goal setting.',
      recommendation: 'Great for understanding the mindset of successful people and developing a success-oriented mentality.',
      amazonLink: '#',
      category: 'Business'
    },
    {
      id: 6,
      title: 'You Don\'t Know JS',
      author: 'Kyle Simpson',
      image: './book/photo_2026-01-09_23-48-16.jpg',
      rating: 5,
      description: 'Deep dive into JavaScript fundamentals. Goes beyond syntax to explain how JavaScript really works.',
      recommendation: 'Essential for any JavaScript developer who wants to truly master the language.',
      amazonLink: '#',
      category: 'Programming'
    }
  ];

  const categories = ['All', 'Programming', 'Self-Help', 'Business'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBooks = activeCategory === 'All' 
    ? books 
    : books.filter(book => book.category === activeCategory);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="books" className={`section-padding relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
            : 'bg-gradient-to-br from-amber-200/30 to-orange-200/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-tr from-purple-500/20 to-blue-500/20' 
            : 'bg-gradient-to-tr from-red-200/30 to-amber-200/30'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10' 
            : 'bg-gradient-to-r from-orange-100/20 to-red-100/20'
        }`}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg ${
            isDarkMode 
              ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
              : 'bg-gradient-to-br from-amber-400 to-red-500'
          }`}>
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className={`text-5xl font-bold mb-6 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent'
          }`}>
            📚 Book Recommendations
          </h2>
          <div className={`w-32 h-1.5 mx-auto mb-8 rounded-full ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
              : 'bg-gradient-to-r from-amber-500 to-red-500'
          }`}></div>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Books that have shaped my thinking and I highly recommend to fellow developers and lifelong learners. 
            Each one has contributed to my growth as a creative professional.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === category
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg transform scale-105'
                  : isDarkMode
                    ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={`group backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden relative ${
                isDarkMode 
                  ? 'bg-gray-800/95 border border-gray-700/30' 
                  : 'bg-white/95 border border-white/30'
              }`}
              onClick={() => openModal(book)}
            >
              {/* Book Cover */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-gradient-to-r from-amber-500 to-red-500 text-white'
                }`}>
                  {book.category}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Book Info */}
              <div className="p-4">
                <h3 className={`text-sm font-bold mb-1 transition-colors duration-300 leading-tight ${
                  isDarkMode 
                    ? 'text-gray-100 group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-amber-600'
                }`} style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {book.title}
                </h3>
                <p className={`text-xs mb-2 font-medium truncate ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>by {book.author}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-3 h-3 ${index < book.rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`text-xs font-bold ${
                    isDarkMode ? 'text-blue-400' : 'text-amber-600'
                  }`}>Read</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className={`rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`} onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                {/* Header with Book Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-300 bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Book Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className={`text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-r from-amber-500 to-red-500'
                    }`}>
                      {selectedBook.category}
                    </div>
                    <h3 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">{selectedBook.title}</h3>
                    <p className="text-white/90 text-xl drop-shadow-lg">by {selectedBook.author}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-8 justify-center">
                    <div className="flex mr-4">
                      {renderStars(selectedBook.rating)}
                    </div>
                    <span className={`text-lg font-semibold ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>({selectedBook.rating}/5 stars)</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className={`font-bold mb-4 text-xl flex items-center ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        <svg className={`w-6 h-6 mr-2 ${
                          isDarkMode ? 'text-blue-400' : 'text-amber-500'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        About This Book
                      </h4>
                      <p className={`leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{selectedBook.description}</p>
                    </div>
                    
                    <div>
                      <h4 className={`font-bold mb-4 text-xl flex items-center ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        <svg className={`w-6 h-6 mr-2 ${
                          isDarkMode ? 'text-purple-400' : 'text-red-500'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Why I Recommend It
                      </h4>
                      <p className={`leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{selectedBook.recommendation}</p>
                    </div>
                  </div>
                  
                  <div className={`flex gap-4 justify-center pt-6 border-t ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <a
                      href={selectedBook.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 text-white ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                          : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span>Get This Book</span>
                    </a>
                    <button
                      onClick={closeModal}
                      className={`px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-md ${
                        isDarkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a book recommendation for me?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-white ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' 
                  : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Share Your Recommendation</span>
            </a>
            <a
              href="https://goodreads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Find More Books</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;