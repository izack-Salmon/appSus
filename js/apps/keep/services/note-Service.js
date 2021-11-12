import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';

export const noteService = {
  query,
  save,
  add,
  remove,
  getById,
};

const NOTE_KEY = 'notes';
const notes = [
  {
    id: 'n101q',
    type: 'note-txt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n102h',
    type: 'note-img',
    info: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      title: 'Bobi and Me',
    },
    style: {
      backgroundColor: '#00d',
    },
    isPinned: true,
  },
  {
    id: 'n103j',
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: '#00d',
    },
    isPinned: true,
  },
  {
    id: 'n103j',
    type: 'note-video',
    info: {
      label: 'Get my stuff together',
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    style: {
      backgroundColor: '#00d',
    },
    isPinned: false,
  },
];
function query() {
  // utilService.saveToStorage(NOTE_KEY, notes);
  return storageService.query(NOTE_KEY);
}

function save(note) {
  if (note.id) return storageService.put(NOTE_KEY, note);
  else return storageService.post(NOTE_KEY, note);
}

function add(note) {
  return storageService.post(NOTE_KEY, note);
}
function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId);
}
function getById(noteId) {
  return storageService.get(NOTE_KEY, noteId);
}
