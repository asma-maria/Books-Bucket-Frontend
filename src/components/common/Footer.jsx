import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-400">
                123 Web Developer Lane <br />
                Coding City, Tech State 45678 <br />
                United States
              </p>
            </div>
    
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@website.com <br />
                Phone: +1 (234) 567-890
              </p>
            </div>
    
            {/* Social Links Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Replace href="#" with your actual social media links */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.892-4.785 4.658-4.785 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.309h3.588l-.467 3.622h-3.121v9.293h6.116c.729 0 1.324-.595 1.324-1.324v-21.35c0-.729-.595-1.325-1.324-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.89 9.89 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.861 9.861 0 0 1-3.127 1.196 4.919 4.919 0 0 0-8.384 4.482 13.949 13.949 0 0 1-10.126-5.138 4.918 4.918 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.228-.616c-.054 2.281 1.581 4.417 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.924 4.924 0 0 0 4.6 3.417 9.874 9.874 0 0 1-6.1 2.104c-.397 0-.788-.023-1.175-.068a13.933 13.933 0 0 0 7.548 2.213c9.056 0 14.009-7.503 14.009-14.009 0-.213-.005-.425-.015-.636a10.012 10.012 0 0 0 2.459-2.548z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0h-20.46c-.975 0-1.77.795-1.77 1.77v20.459c0 .975.795 1.771 1.77 1.771h20.459c.976 0 1.771-.796 1.771-1.771v-20.459c0-.975-.795-1.77-1.771-1.77zm-14.92 20.457h-3.691v-10.234h3.691v10.234zm-1.845-11.662c-1.181 0-2.139-.958-2.139-2.139 0-1.182.958-2.139 2.139-2.139 1.181 0 2.139.957 2.139 2.139 0 1.181-.958 2.139-2.139 2.139zm14.083 11.662h-3.691v-5.511c0-1.312-.027-3.001-1.827-3.001-1.828 0-2.108 1.428-2.108 2.902v5.61h-3.692v-10.234h3.542v1.399h.049c.493-.938 1.698-1.927 3.495-1.927 3.738 0 4.428 2.461 4.428 5.66v5.102h-.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
    
          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; 2024 Books Bucket. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer