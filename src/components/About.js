import React from 'react';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '4', label: 'Creative Skills' }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Computer Science student passionate about learning and growing in multiple creative fields
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello! I'm Nesru Abu, a Computer Science Student & Aspiring Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently a 3rd year Computer Science student at Maddawalabu University with 2 years of 
              hands-on experience in web development and design. As an intermediate developer, I'm passionate 
              about expanding my skills across multiple creative disciplines including web development, 
              graphics design, video editing, and interior design.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey started with curiosity about how websites work, and it has grown into a love for 
              creating digital solutions and visual content. While I'm still learning and growing, I've 
              had the opportunity to work on various projects that have helped me develop practical skills 
              and gain real-world experience. I believe in continuous learning and always strive to 
              improve my craft.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">🎓 3rd year Computer Science student at Maddawalabu University</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">💻 2+ years of web development experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">🎨 Exploring creative fields: design, video editing, and interiors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">📚 Continuous learner with a growth mindset</span>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/resume.pdf" 
                download 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center bg-white dark:bg-gray-800 border dark:border-gray-700">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;