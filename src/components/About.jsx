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
              I am a <span className="text-gradient font-semibold">Software Engineer & Junior DevOps Engineer</span> with expertise in Java, Spring Boot, React.js, and Linux-based infrastructure. 
              I focus on transforming complex requirements into reliable, secure, and scalable systems that support real organizations.
            </p>
          </div>

          <div className="card-premium p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              My passion lies in <span className="text-primary-400 font-medium">Linux administration, DevOps practices, and automation</span>—from configuring secure web servers and firewalls 
              to containerizing applications and setting up reliable infrastructure. I approach every project with a focus on clean 
              architecture, operational reliability, and strong observability.
            </p>
          </div>

          <div className="card-premium p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              Currently pursuing my <span className="text-primary-400 font-medium">Bachelor of Science in Information Technology</span> while building real-world full-stack and DevOps projects, 
              I bring a combination of academic rigor and hands-on experience with Linux, containers, and cloud fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

