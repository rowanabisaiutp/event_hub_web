import React, { useState, useEffect } from 'react';
import RightSidebar from './sidebar/rigth-sidebar';
import { fetchEvents } from '../services/api-eventos';

function About() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getEvents();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1, padding: '16px' }}>
        <h2>Aqui se mostraran los escenarios</h2>
      </div>
      <RightSidebar events={events} />
    </div>
  );
}

export default About;
