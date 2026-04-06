import React from 'react';
import { Zap, Satellite, ShieldCheck } from 'lucide-react';
import './Reliability.css';

const Reliability = () => {
  const features = [
    {
      icon: <Zap size={48} strokeWidth={1} />,
      title: "Invisible Power",
      description: "30kWh Lithium-Ion Energy Storage with 12KVA Hybrid Inverter. While the city sleeps, your lights stay on."
    },
    {
      icon: <Satellite size={48} strokeWidth={1} />,
      title: "Global Speed",
      description: "Starlink Connectivity. Seamless 4K streaming and zero-lag video calls from the heart of the Coal City."
    },
    {
      icon: <ShieldCheck size={48} strokeWidth={1} />,
      title: "Elite Security",
      description: "Gated Citiville Protection. 24/7 restricted access and estate-wide security. Peace of mind is the greatest luxury."
    }
  ];

  return (
    <section className="section reliability-section" id="reliability">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="fade-in">The Triple-Crown of Reliability</h2>
        <div className="reliability-grid">
          {features.map((feature, index) => (
            <div className={`reliability-card fade-in fade-in-delay-${index + 1}`} key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reliability;
