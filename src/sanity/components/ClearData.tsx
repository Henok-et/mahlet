import React from 'react';
import { client } from '@/sanity/client';
import { useState } from 'react';

const types = [
  { name: 'experience', label: 'Work Experience' },
  { name: 'education', label: 'Education & Trainings' },
  { name: 'publication', label: 'Publications' },
  { name: 'voluntary', label: 'Voluntary Duties' },
  { name: 'referee', label: 'Referees' },
  { name: 'competency', label: 'Competencies' },
  { name: 'language', label: 'Languages' },
  { name: 'book', label: 'Books' },
];

export default function ClearData() {
  const [status, setStatus] = useState<string>('');

  const clearType = async (type: string) => {
    try {
      setStatus(`Clearing ${type}…`);
      await client.delete(`*[_type == "${type}"]`);
      setStatus(`${type} cleared successfully.`);
    } catch (err) {
      console.error(err);
      setStatus(`Error clearing ${type}: ${(err as Error).message}`);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Clear Sanity Content</h2>
      <p>Use the buttons below to delete all documents of a given type from Sanity.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {types.map((t) => (
          <li key={t.name} style={{ marginBottom: '0.5rem' }}>
            <button
              onClick={() => clearType(t.name)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Clear {t.label}
            </button>
          </li>
        ))}
      </ul>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}
