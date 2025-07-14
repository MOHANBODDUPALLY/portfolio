import React from 'react';
import { Award, Calendar, MapPin, Users, Code, Trophy } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Developer',
    company: 'Tata Consultancy Services',
    period: 'Feb 2022 - Present (3+ years)',
    location: 'India',
    description: 'Developer responsible for designing front-end UI, and managing complete software development lifecycle from requirements gathering to production deployment.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    
    responsibilities: [
      'Designing the front-end UI & selecting the back-end API framework',
      'Implementing & unit-testing code written in JavaScript',
      'Involved in collecting requirements from the production site',
      'Visiting the production post-deployment and fixing bugs',
      'Provided weekly detailed project reports to keep the manager informed on milestones and updates',
      'Managed system testing and validation procedures to gauge reliability',
      'Troubleshoot and debugged software to check and rectify discrepancies',
      'Amended existing software to upgrade interfaces and elevate performance',
      'Worked closely with other team members to identify and remove software bugs',
      'Managed assembly activities from initial steps to final completion',
      'Worked with Agile and Scrum methodologies to accomplish project milestones and meet demanding timelines',
      'Designed and implemented automated test scripts to improve testing efficiency and coverage',
      'Conducted code reviews and provided constructive feedback to team members to maintain high-quality code standards',
      'Collaborated with cross-functional teams to define project requirements and deliver innovative solutions',
      'Developed technical documentation to support software maintenance and future development',
      'Ensured software compliance with security and data protection standards',
      'Assisted in the integration of third-party APIs to enhance software functionality'
    ],

    awards: [
      'Two Times Appreciation from the client',
      'Best Team Award',
      'Best Performer Award'
    ],



    achievements: [
      'Successfully completed 6 phases and deployed in production',
      'Promoted from team member to Scrum Leader',
      'Received Appreciation from Client'
    ]
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey at Tata Consultancy Services, showcasing growth from team member to Scrum Leader.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300">
            
            {/* Header Section */}
            <div className="relative overflow-hidden">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{experience.title}</h3>
                <h4 className="text-xl font-medium text-purple-300 mb-2">{experience.company}</h4>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-purple-400" />
                    {experience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-purple-400" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {experience.description}
              </p>

              {/* Three Column Layout */}
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Key Responsibilities */}
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Code className="text-purple-400 mr-3" size={24} />
                    <h5 className="text-xl font-bold text-white">Key Responsibilities</h5>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-300">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards & Achievements */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="text-purple-400 mr-3" size={24} />
                      <h5 className="text-xl font-bold text-white">Awards</h5>
                    </div>
                    <div className="space-y-3">
                      {experience.awards.map((award, idx) => (
                        <div key={idx} className="bg-purple-600/20 p-3 rounded-lg border border-purple-500/30">
                          <div className="flex items-center">
                            <Award size={16} className="text-purple-400 mr-2" />
                            <span className="text-purple-300 text-sm font-medium">{award}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Users className="text-purple-400 mr-3" size={24} />
                      <h5 className="text-xl font-bold text-white">Achievements</h5>
                    </div>
                    <div className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-300">
                          <span className="text-purple-400 mr-2 mt-1">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Progression Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center mb-3">
                  <Users className="text-purple-400 mr-3" size={24} />
                  <h5 className="text-xl font-bold text-white">Career Progression</h5>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-300 font-semibold">Team Member → Scrum Leader:</span> Successfully promoted to leadership role, demonstrating strong technical skills, team collaboration, and project management capabilities. Led multiple successful deployments and received client appreciation for exceptional performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;