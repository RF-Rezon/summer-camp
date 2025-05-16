import { motion } from "framer-motion";

const HomeExtra = () => {
  return (
    <div>
      <div className="container mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="mt-16 space-y-6">
              <div className="flex mb-12 md:mb-0">
                <div className="w-2/12">
                  <motion.img
                    src="https://i.ibb.co/c2KVDzp/pexels-alvin-caal-2853592.jpg"
                    className="w-full shadow-lg mb-6"
                    alt=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="w-10/12 pl-4 md:pl-6">
                  <p className="font-semibold text-gray-800 mb-3 text-lg uppercase">Nobius Mayar</p>
                  <motion.p
                    className="text-gray-700 font-medium text-lg italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    "Soundscape has been a transformative experience for me. The instructors are incredibly talented and
                    passionate about music. They have helped me discover my true potential as a musician. The supportive
                    and friendly environment makes learning enjoyable. I highly recommend Soundscape to anyone looking
                    to pursue their musical aspirations."
                  </motion.p>
                </div>
              </div>
              <div className="flex mb-12 md:mb-0">
                <div className="w-2/12">
                  <motion.img
                    src="https://i.ibb.co/CvjtQj8/pexels-antoni-shkraba-production-8412414.jpg"
                    className="w-full shadow-lg mb-6"
                    alt=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="w-10/12 pl-4 md:pl-6">
                  <p className="font-semibold text-gray-800 mb-3 text-lg uppercase">Maria Saxon</p>
                  <motion.p
                    className="text-gray-700 font-medium text-lg italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    "I have been attending Soundscape for a few months now, and I am amazed at the progress I have made.
                    The teachers are patient, knowledgeable, and always encourage me to push myself. The variety of
                    classes offered allows me to explore different genres and instruments. Soundscape has truly ignited
                    my love for music!"
                  </motion.p>
                </div>
              </div>
              <div className="flex mb-12 md:mb-0">
                <div className="w-2/12">
                  <motion.img
                    src="https://i.ibb.co/0t0ZR1j/pexels-rdne-stock-project-7502201.jpg"
                    className="w-full shadow-lg mb-6"
                    alt=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="w-10/12 pl-4 md:pl-6">
                  <p className="font-semibold text-gray-800 mb-3 text-lg uppercase">Jemmy Ada</p>
                  <motion.p
                    className="text-gray-700 font-medium text-lg italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    "Enrolling at Soundscape was the best decision I made for my musical journey. The school offers
                    top-notch facilities and a wide range of classes. The instructors are not only skilled but also
                    passionate about teaching. They go above and beyond to ensure that every student receives
                    personalized attention. Soundscape has helped me grow as a musician and boosted my confidence."
                  </motion.p>
                </div>
              </div>
              <div className="flex mb-12 md:mb-0">
                <div className="w-2/12">
                  <motion.img
                    src="https://i.ibb.co/fv61tP8/pexels-karolina-grabowska-5311653.jpg"
                    className="w-full shadow-lg mb-6"
                    alt=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="w-10/12 pl-4 md:pl-6">
                  <p className="font-semibold text-gray-800 mb-3 text-lg uppercase">Nobius Mayar</p>
                  <motion.p
                    className="text-gray-700 font-medium text-lg italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    "Soundscape has been a transformative experience for me. The instructors are incredibly talented and
                    passionate about music. They have helped me discover my true potential as a musician. The supportive
                    and friendly environment makes learning enjoyable. I highly recommend Soundscape to anyone looking
                    to pursue their musical aspirations."
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default HomeExtra;
