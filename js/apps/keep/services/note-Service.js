import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';

export const noteService = {
  query,
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
  },
  {
    id: 'n103j',
    type: 'note-video',
    info: {
      label: 'Get my stuff together',
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    },
  },
];

function query() {
  utilService.saveToStorage(NOTE_KEY, notes);
  return storageService.query(NOTE_KEY);
}
