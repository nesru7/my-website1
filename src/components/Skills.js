import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Web Development',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'HTML/CSS', level: 92, color: 'bg-orange-500' },
        { name: 'MongoDB', level: 78, color: 'bg-green-500' }
      ]
    },
    {
      title: 'Graphics Design',
      icon: '🎨',
      skills: [
        { name: 'Adobe Photoshop', level: 88, color: 'bg-blue-600' },
        { name: 'Adobe Illustrator', level: 85, color: 'bg-orange-600' },
        { name: 'Figma', level: 90, color: 'bg-pink-500' },
        { name: 'Canva', level: 92, color: 'bg-purple-500' },
        { name: 'Logo Design', level: 87, color: 'bg-indigo-500' }
      ]
    },
    {
      title: 'Video Editing',
      icon: '🎬',
      skills: [
        { name: 'Adobe Premiere Pro', level: 85, color: 'bg-purple-600' },
        { name: 'After Effects', level: 80, color: 'bg-blue-700' },
        { name: 'DaVinci Resolve', level: 75, color: 'bg-red-600' },
        { name: 'Motion Graphics', level: 78, color: 'bg-pink-600' },
        { name: 'Color Grading', level: 82, color: 'bg-yellow-600' }
      ]
    },
    {
      title: 'Interior Design',
      icon: '🏠',
      skills: [
        { name: 'AutoCAD', level: 80, color: 'bg-red-500' },
        { name: 'SketchUp', level: 85, color: 'bg-blue-500' },
        { name: '3D Visualization', level: 78, color: 'bg-green-600' },
        { name: 'Space Planning', level: 88, color: 'bg-purple-500' },
        { name: 'Color Theory', level: 90, color: 'bg-pink-500' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const SkillBar = ({ skill, index }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      let timer;
      if (isVisible && width === 0) {
        timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 200);
      }
      return () => {
        if (timer) clearTimeout(timer);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skill.level, index, width]);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Creative Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From code to canvas, from pixels to spaces - I bring creativity to every project across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 border dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={categoryIndex * 5 + skillIndex} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Tailwind CSS', 'Bootstrap', 'Git/GitHub', 'WordPress', 'Blender', 
              'Cinema 4D', 'Lightroom', 'InDesign', 'Revit', 'V-Ray', 'Lumion', 'Final Cut Pro'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:shadow-lg transition-shadow duration-300 border dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;