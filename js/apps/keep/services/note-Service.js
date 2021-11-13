import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';

export const noteService = {
  query,
  save,
  add,
  remove,
  getById,
};
var executed = true;
const NOTE_KEY = 'notes';
const notes = [
  {
    id: 'n101qkjkj',
    type: 'note-txt',
    isPinned: true,
    info: {
      txt: '“Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.” ',
    },
    style: {
      backgroundColor: '#bb00e0',
    },
  },
  {
    id: 'n101qkjkj8u',
    type: 'note-txt',
    isPinned: true,
    info: {
      txt: 'Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfo',
    },
    style: {
      backgroundColor: '#00e604',
    },
  },
  {
    id: 'n102h87878',
    type: 'note-img',
    info: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      title: 'Bobi and Me',
    },
    style: {
      backgroundColor: '#00d',
    },
    isPinned: false,
  },
  {
    id: 'n102ggfgfh',
    type: 'note-img',
    info: {
      url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
      title: 'nice!!!',
    },
    style: {
      backgroundColor: '#00d',
    },
    isPinned: true,
  },
  {
    id: 'n103j887gfgf876',
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
        { txt: 'ninja at vue', doneAt: 187111111 },
        { txt: 'make sprint 3 to work', doneAt: 187111111 },
        { txt: 'die will trying', doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: '#ffd500',
    },
    isPinned: false,
  },
  {
    id: 'n103jkjgfgfkj',
    type: 'note-video',
    info: {
      label: 'Get my stuff together',
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
    style: {
      backgroundColor: '#b12b2b',
    },
    isPinned: false,
  },
  {
    id: 'n103gfgfgfgfggf8j',
    type: 'note-email',
    subject: 'your api hard to learn',
    to: 'Google@gmail.com',
    body: 'plz google pix your api keys to work hard better and faster.',
    style: {
      backgroundColor: '#ffffff',
    },
    isPinned: false,
  },
  {
    id: 'n103ggfgftttfgfj',
    type: 'note-video',
    info: {
      label: 'Get my stuff together',
      url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
    },
    style: {
      backgroundColor: '#00b3ff',
    },
    isPinned: true,
  },
];
function query() {
  if (executed) {
    utilService.saveToStorage(NOTE_KEY, notes);
    executed = false;
  }
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
