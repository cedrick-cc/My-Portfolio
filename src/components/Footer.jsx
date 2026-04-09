const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-dark-forest/45 to-dark-base border-t border-primary-800/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-gray-300 text-base font-medium text-center">
            © {currentYear} <span className="text-gradient font-bold">Cedrick Nkurunziza</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

