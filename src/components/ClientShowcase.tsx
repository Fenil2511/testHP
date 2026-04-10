import { motion } from 'motion/react';

const row1 = [
  { name: 'Dainik Bhaskar', src: '/logos/Dainik_Bhaskar_Logo.svg.png' },
  { name: 'My FM', src: '/logos/My%20FM.png' },
  { name: 'Red FM', src: '/logos/Red-FM-93.5-Live-Online.png' },
  { name: 'HT Media', src: '/logos/HT%20Media.webp' },
  { name: 'Rediff', src: '/logos/Rediff.svg' },
  { name: 'Rajhans Group', src: '/logos/Rajhans%20Group.png' },
  { name: 'Sage Group', src: '/logos/Sage%20Group.png' },
  { name: 'Shalby Hospitals', src: '/logos/Shalby%20Hospitals%20logo.svg' },
  { name: 'HK Jewels', src: '/logos/HK%20Jewels.webp' },
  { name: 'Bharat Lubricant', src: '/logos/Bharat%20Lubricant.avif' },
  { name: 'Alpha Neuro Clinic', src: '/logos/Alpha%20Neuro%20Clinic.jpg' },
  { name: 'Bake & Shake', src: '/logos/Bake%20&%20Shake.png' },
  { name: 'Billipatra Jewels', src: '/logos/Billipatra%20Jewels.jpg' },
  { name: 'Harmonic Clinic', src: '/logos/Harmonic%20Clinic.png' },
  { name: 'Kohinoor Group', src: '/logos/Kohinoor-Group.webp' },
];

const row2 = [
  { name: 'Harsh Hospital', src: '/logos/Harsh%20Hospital.webp' },
  { name: 'Kilkaari Children Hosp.', src: '/logos/Kilkaari%20Children%20Hosp..png' },
  { name: 'Saachi Hosp.', src: '/logos/Saachi%20Hosp.jpg' },
  { name: 'Unique Hospital', src: '/logos/Unique%20Hospital.png' },
  { name: 'Aastha Clinic', src: '/logos/Dr.%20Kunal%20Shah%20–%20Aastha%20Clinic.webp' },
  { name: 'The Clinic', src: '/logos/Dr.%20Manu%20Sharma%20–%20The%20Clinic.png' },
  { name: 'RTU Bhopal', src: '/logos/Rabindranath%20Tagore%20University%20–%20Bhopal.png' },
  { name: 'Ramani Icecreams', src: '/logos/Ramani%20Icecreams-%20Top%20&%20Town.png' },
  { name: 'Kesariya', src: '/logos/kesariyalogo.webp' },
  { name: 'Unity', src: '/logos/unity%20logo%20eng%20(1)%20(1).webp' },
  { name: 'Dr. Jenny M Gandhi', src: '/logos/dr-jenny-m-gandhi-surat-surat-general-physician-doctors-mmbuf8y8hu-250.jpg' },
  { name: 'Mansarovar School', src: '/logos/Mansarovar%20School.png' },
  { name: 'Logo 01', src: '/logos/logo01.png' },
];

export function ClientShowcase() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-dark text-center"> Trusted by 100+ Leading Brands </h2>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex flex-none gap-10 pr-10 items-center"
          >
            {[...row1, ...row1, ...row1].map((logo, i) => (
              <div key={i} className="flex-none h-12 w-32 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex flex-none gap-10 pr-10 items-center"
          >
            {[...row2, ...row2, ...row2].map((logo, i) => (
              <div key={i} className="flex-none h-12 w-32 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
