import { HiAcademicCap, HiExternalLink } from 'react-icons/hi'

const Certifications = () => {
  // Note: Update this URL with the actual Google Drive link from the CV
  const certificatesDriveUrl = 'https://drive.google.com/drive/folders/1Iy-N4wPlp0sTo8yWWyZGXaUT2zTuLZkJ'

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/20 to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
        </div>

        <div className="card-premium-hover p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-900/40 to-primary-800/20 border border-primary-700/30 mb-8 group-hover:scale-110 transition-transform duration-300">
            <HiAcademicCap className="w-10 h-10 text-primary-400" />
          </div>
          
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            My professional certifications and achievements are available for review. 
            These credentials demonstrate my commitment to <span className="text-primary-400 font-medium">continuous learning</span> and professional development 
            in software development and related technologies.
          </p>

          <a
            href={certificatesDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50"
          >
            <HiExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            <span>View Certificates</span>
          </a>

          <p className="text-sm text-gray-400 mt-6 font-medium">
            Opens in Google Drive
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications

