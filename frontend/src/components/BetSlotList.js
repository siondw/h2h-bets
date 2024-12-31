import React from 'react';
import BetSlot from './BetSlot';

function BetSlotList({ slots = [], onSlotClick }) {
  return (
    <div style={styles.container}>
      {slots.map((slot, index) => (
        <div key={index} onClick={() => onSlotClick(index)} style={{ cursor: 'pointer' }}>
          <BetSlot {...slot} />
        </div>
      ))}

      {slots.length < 8 &&
        Array.from({ length: 8 - slots.length }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            onClick={() => onSlotClick(slots.length + i)}
            style={styles.placeholder}
          >
            Slot open—add your pick!
          </div>
        ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '12px',
    paddingBottom: '80px', // space for footer
  },
  placeholder: {
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#E8E8F9',
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    cursor: 'pointer',
  },
};

export default BetSlotList;
