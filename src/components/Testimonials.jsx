import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Rahimi",
    title: "Business Owner",
    review:
      "Easy Cargo has been a game changer for our company. Fast, reliable, and always professional!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Nazari",
    title: "Online Seller",
    review:
      "Their tracking system is super helpful. I always know where my shipments are. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ahmad Faizi",
    title: "Manager, Export Co.",
    review:
      "Affordable rates and excellent customer service. We've partnered with them for over a year now.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Layla Hussaini",
    title: "Freelancer",
    review:
      "The support team is responsive 24/7. That really gave me peace of mind during international deliveries.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          We’ve helped hundreds of customers move their cargo efficiently and
          safely.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.title}
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
