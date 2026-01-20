const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-950 border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-base font-medium">
            © {currentYear} <span className="text-gradient font-bold">Cedrick Nkurunziza</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-base font-light">
            Built with <span className="text-primary-400">React</span>, <span className="text-primary-400">Tailwind CSS</span>, and passion for code.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

