import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_h02oq5e'
      const templateId = 'template_hdifrlh'
      const publicKey = 'pZ0NHj2yeFLzqA3mQ'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nkurunzizacedrick2@gmail.com',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'nkurunzizacedrick2@gmail.com',
      href: 'mailto:nkurunzizacedrick2@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+(250) 781774078',
      href: 'tel:+250781774078',
      color: 'text-green-400',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: null,
      color: 'text-red-400',
    },
  ]

  const socialLinks = [
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cedrick-nkurunziza/',
      color: 'text-blue-500',
    },
    {
      icon: SiGithub,
      label: 'GitHub',
      href: 'https://github.com/cedrick-cc',
      color: 'text-gray-300',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-50">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Open to opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-3xl font-bold text-gray-50 mb-4">
                Contact Information
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I'm always open to discussing new opportunities, interesting projects, 
                or just connecting with fellow developers. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div className="flex items-start gap-5 p-6 rounded-xl card-premium group cursor-pointer">
                    <div className={`p-3 rounded-xl bg-gray-800/50 ${info.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1.5 font-medium uppercase tracking-wide">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-gray-200 hover:text-primary-400 transition-colors font-semibold"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-200 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-gray-200 mb-5">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 rounded-xl card-premium group hover-lift"
                      aria-label={social.label}
                    >
                      <Icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-300 group-hover:text-primary-400 transition-colors font-semibold">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium p-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-gray-50 mb-8">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message..."
                />
              </div>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-900/30 border border-green-700/50 text-green-300">
                  <p className="font-semibold">✓ Message sent successfully!</p>
                  <p className="text-sm mt-1">I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-900/30 border border-red-700/50 text-red-300">
                  <p className="font-semibold">✗ Failed to send message</p>
                  <p className="text-sm mt-1">Please try again or contact me directly via email.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

