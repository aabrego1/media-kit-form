import React, { useState } from 'react';
import { Send, CheckCircle, Copy, User, Briefcase, Music, Mic, Star, Zap, Crown } from 'lucide-react';

function App() {
  const [step, setStep] = useState('type');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientType: '',
    packageType: '',
    name: '',
    bio: '',
    followers: '',
    engagement: '',
    reach: '',
    photosLink: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    twitter: '',
    email: '',
    phone: '',
    website: '',
    servicesLink: ''
  });

  const clientTypes = [
    { id: 'influencer', label: 'Influencer / Content Creator', icon: User },
    { id: 'speaker', label: 'Speaker / Keynote', icon: Mic },
    { id: 'artist', label: 'Musician / Actor / Artist', icon: Music },
    { id: 'company', label: 'Company / Business', icon: Briefcase },
    { id: 'other', label: 'Other', icon: User }
  ];

  const packages = [
    { 
      id: 'basic', 
      name: 'Basic Package', 
      icon: Star,
      color: 'from-blue-400 to-blue-600',
      description: 'Perfect for getting started',
      includes: ['Bio', 'Stats', '1 Photo', 'Social Media', 'Contact Info', 'Services (no pricing)']
    },
    { 
      id: 'standard', 
      name: 'Standard Package', 
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      description: 'Most popular option',
      includes: ['Everything in Basic', 'Multiple photos', 'Brand collaborations', 'Audience demographics']
    },
    { 
      id: 'premium', 
      name: 'Premium Package', 
      icon: Crown,
      color: 'from-pink-400 to-pink-600',
      description: 'Complete professional kit',
      includes: ['Everything in Standard', 'Case studies', 'Style guide', 'Custom design']
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.bio) {
      alert('Please complete name, email, and bio (bio is mandatory)');
      return;
    }
    setSubmitted(true);
  };

  const copyToClipboard = () => {
    let text = `📋 MEDIA KIT INFORMATION\n\n`;
    text += `🎯 CLIENT TYPE: ${formData.clientType}\n`;
    text += `📦 PACKAGE: ${formData.packageType}\n\n`;
    text += `👤 Name: ${formData.name}\n`;
    text += `📧 Email: ${formData.email}\n`;
    if (formData.bio) text += `📝 Bio: ${formData.bio}\n\n`;
    if (formData.followers) text += `📊 Followers: ${formData.followers}\n`;
    if (formData.instagram) text += `📷 Instagram: ${formData.instagram}\n`;
    
    navigator.clipboard.writeText(text);
    alert('Information copied to clipboard!');
  };

  const isBasic = formData.packageType === 'Basic Package';

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Form Completed! ✨</h2>
            <p className="text-gray-600">All information has been received</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-xl mb-3">Summary</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> {formData.clientType}</p>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Package:</strong> {formData.packageType}</p>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-4"
          >
            <Copy className="w-5 h-5" /> Copy all information
          </button>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep('type');
            }}
            className="w-full text-purple-600 hover:text-purple-800 font-medium"
          >
            Submit another form
          </button>
        </div>
      </div>
    );
  }

  if (step === 'type') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Professional Media Kit
            </h1>
            <p className="text-gray-600 text-lg">First, tell us what type of kit you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    setFormData({ ...formData, clientType: type.label });
                    setStep('package');
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                >
                  <Icon className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:text-pink-500 transition-colors" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{type.label}</h3>
                  <p className="text-sm text-gray-600">Click to select</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'package') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Choose Your Package
            </h1>
            <p className="text-gray-600 text-lg">Selected: <strong>{formData.clientType}</strong></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div key={pkg.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
                  <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white text-center`}>
                    <Icon className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm opacity-90">{pkg.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        setFormData({ ...formData, packageType: pkg.name });
                        setStep('form');
                      }}
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all`}
                    >
                      Select {pkg.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Information Form
          </h1>
          <p className="text-gray-600">
            Type: <strong>{formData.clientType}</strong> | Package: <strong>{formData.packageType}</strong>
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👤 Basic Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name *"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                placeholder="Bio / Description * (MANDATORY - Must be complete)"
                className="w-full p-3 border-2 border-red-200 rounded-lg focus:border-pink-400 outline-none resize-none"
              />
            </div>
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Statistics</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="followers"
                value={formData.followers}
                onChange={handleChange}
                placeholder="Total followers (e.g., 50K)"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="engagement"
                  value={formData.engagement}
                  onChange={handleChange}
                  placeholder="Engagement %"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                />
                <input
                  type="text"
                  name="reach"
                  value={formData.reach}
                  onChange={handleChange}
                  placeholder="Average reach"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                />
              </div>
            </div>
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📸 Photos</h2>
            <input
              type="url"
              name="photosLink"
              value={formData.photosLink}
              onChange={handleChange}
              placeholder={isBasic ? "Link to 1 professional photo" : "Link to photos"}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
            />
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌐 Social Media</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Instagram"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <input
                type="text"
                name="tiktok"
                value={formData.tiktok}
                onChange={handleChange}
                placeholder="TikTok"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <input
                type="text"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
                placeholder="YouTube"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="Twitter"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
            </div>
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💼 Services</h2>
            <input
              type="url"
              name="servicesLink"
              value={formData.servicesLink}
              onChange={handleChange}
              placeholder={isBasic ? "Services link (no pricing)" : "Link to your services"}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
            />
          </section>

          <section className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📧 Contact</h2>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-400 outline-none"
              />
            </div>
          </section>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            <Send className="w-6 h-6" /> Submit Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
