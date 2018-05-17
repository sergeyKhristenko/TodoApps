import axios from 'axios';
import config from '../config/constants';

function formatNote(note) {
  return {
    id: note._id,
    title: note.title,
    text: note.text,
    color: note.color || '#ffffff',
    createdAt: note.createdAt || new Date()
  }
}

export async function getNotes() {
  const allNotes = await axios.get(`${config.apiPrefix}/notes`);
  
  return allNotes.data.map(formatNote);
}

export async function createNote(note) {
  const res = await axios.post(`${config.apiPrefix}/notes`, note);
  
  return formatNote(res.data);  
}

export async function deleteNote(id) {
  await axios.delete(`${config.apiPrefix}/notes/${id}`);
}