const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mb-8 rounded-full" />
        </div>

        <div className="space-y-8">
          <div className="card-premium p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              I am an <span className="text-gradient font-semibold">innovative Software Developer</span> with expertise in Java, Spring Boot, React.js, and modern AI/ML technologies. 
              I specialize in transforming complex problems into intelligent, scalable, and user-focused solutions that drive real-world impact.
            </p>
          </div>

          <div className="card-premium p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              My passion lies in leveraging <span className="text-primary-400 font-medium">artificial intelligence and machine learning</span> to create adaptive, data-driven applications 
              that not only meet technical requirements but exceed user expectations. I approach every project with a focus on clean 
              architecture, optimal performance, and seamless user experiences.
            </p>
          </div>

          <div className="card-premium p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              Currently pursuing my <span className="text-primary-400 font-medium">Bachelor of Science in Information Technology</span> while gaining hands-on experience in full-stack 
              development, I bring a unique combination of academic rigor and practical problem-solving skills to every challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

