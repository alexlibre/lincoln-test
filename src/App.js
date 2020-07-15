import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Worker from './components/Worker';
import './App.scss';

const staff = [
  {
    image: "https://ll-code-test.s3.amazonaws.com/images/staff1.jpg",
    person: "Dean Robinson",
    role: "Founder, Owner",
    phone: "+1 323-913-4688"
  }, {
    image: "https://ll-code-test.s3.amazonaws.com/images/staff2.jpg",
    person: "Peter McMillan",
    role: "Travel Agent",
    phone: "+1 323-913-4688"
  }, {
    image: "https://ll-code-test.s3.amazonaws.com/images/staff3.jpg",
    person: "Jill Peterson",
    role: "Tour Consultant",
    phone: "+1 323-913-4688"
  }, {
    image: "https://ll-code-test.s3.amazonaws.com/images/staff4.jpg",
    person: "Jena Smith",
    role: "PR Manager",
    phone: "+1 323-913-4688"
  }
]

function App() {
  return (
    <div className="App page">
      <Header/>
      <Hero/>
      <Section title="Meet Our Team">
      <ul className="worker-list">
          {staff.map((item, idx) => (
            <li className="worker-list__item">
              <Worker 
              image={item.image}
              person={item.person}
              role={item.role}
              phone={item.phone}
              key={idx}/>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Latest Blog Posts">
        
      </Section>
      <Footer/>
    </div>
  );
}

export default App;
