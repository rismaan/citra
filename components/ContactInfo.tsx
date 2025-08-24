import React from 'react';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-suzuki-blue" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-suzuki-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-suzuki-blue" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
);


const ContactInfo: React.FC = () => {
  const contacts = [
    {
      icon: <PhoneIcon />,
      title: 'WhatsApp',
      value: '+62 822-6006-7490',
      href: 'https://wa.me/6282260067490',
    },
    {
      icon: <InstagramIcon />,
      title: 'Instagram',
      value: '@suzukibandung.citra',
      href: 'https://instagram.com/suzukibandung.citra',
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'Cratnasari17.1@gmail.com',
      href: 'mailto:Cratnasari17.1@gmail.com',
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-suzuki-blue">Hubungi Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Kami siap membantu Anda menemukan mobil Suzuki impian Anda.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-4">{contact.icon}</div>
                <h4 className="font-bold text-lg text-suzuki-blue">{contact.title}</h4>
                <p className="text-gray-600 group-hover:text-suzuki-red transition-colors duration-300">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;