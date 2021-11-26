import axios from 'axios';

import { SECOND } from '../../utils/date';
import { delay } from '../../utils/hooks';
import NotesAppService from '../abstract/NotesAppService';

export class NotesAppServiceExpressApi extends NotesAppService {
  public async getNotes() {
    await delay(SECOND / 3);

    return await axios.get("/notesApp/get").then((response) => response.data);
  }

  public async addNote() {
    return await axios.post("/notesApp/add").then((response) => response.data);
  }

  public async renameNote(note: INotesApp) {
    return await axios
      .put(`/notesApp/rename/${note._id}`, { note })
      .then((response) => response.data);
  }

  public async editNote(note: INotesApp) {
    return await axios
      .put(`/notesApp/edit/${note._id}`, { note })
      .then((response) => response.data);
  }

  public async saveNote(note: INotesApp) {
    return await axios
      .put(`/notesApp/save/${note._id}`, { note })
      .then((response) => response.data);
  }

  public async removeNote(id: string) {
    return await axios
      .delete(`/notesApp/remove/${id}`)
      .then((response) => response.data);
  }
}
