import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 92 },
        { name: 'Core Java', level: 85 },
        { name: 'Java Server Pages (JSP)', level: 80 },
        { name: 'Python', level: 88 },
        { name: 'SQL', level: 87 },
      ],
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'Cloud Computing', level: 80 },
        { name: 'AWS Lambda', level: 78 },
        { name: 'AWS Security', level: 75 },
        { name: 'Amazon S3', level: 82 },
        { name: 'AWS Quick sight', level: 70 },
        { name: 'Basic DevOps', level: 65 },
      ],
    },
    {
      title: 'Methodologies & Process',
      skills: [
        { name: 'Agile SCRUM (TCS Mastercraft)', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
