import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Contact.css';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };
const position = [12.0131, 8.5674]; // Giginyu, Kano, Nigeria

  return (
    <div>
      <Navbar />
       <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Lorem ipsum, dolor sit amet {/*<br />*/}consectetur <br /> <span className="third-line">adipisicing elit.</span>

        </p>
       </div>
      <motion.div className="contact-flex"
        
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
<form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <motion.input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          />
          <label htmlFor="email">Email</label>
          <motion.input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          />
          <label htmlFor="message">Message</label>
          <motion.textarea
          id="message"
            name="message"
            
            value={form.message}
            onChange={handleChange}
            
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1, backgroundColor: "#5cbf8a" }}
          >
            Submit
          </motion.button>
        </form>
        <div className="map-section">
          <MapContainer center={position} zoom={13} style={{ height: "220px", width: "100%", marginTop: "20px", borderRadius: "12px" }}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Our Office Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
