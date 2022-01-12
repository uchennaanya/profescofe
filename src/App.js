
import './App.css';
import All_Access from './components/All_Access';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';
import LearnPace from './components/LearnPace';
import Personal_Tutor from './components/PersonalTutor';
import Rate from './components/Rate';
import TakeClass from './components/TakeClasses';
import Testimonials from './components/Testimonial';
import Tutors from './components/Tutors';

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Tutors />
      <All_Access />
      <Personal_Tutor />
      <LearnPace />
      <Rate />
      <Testimonials />
      <TakeClass />
      <Footer />

    </div>
  );
}

export default App;
