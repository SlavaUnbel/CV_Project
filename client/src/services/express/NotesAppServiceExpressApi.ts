import axios from "axios";
import { SECOND } from "../../utils/date";
import { delay } from "../../utils/hooks";
import NotesAppService from "../abstract/NotesAppService";

export class NotesAppServiceExpressApi extends NotesAppService {
  public async getNotes() {
    await delay(SECOND / 3);

    return await axios.get("/notesApp/get").then((response) => response.data);
  }

  public async addNote() {
    return await axios.post("/notesApp/add").then((response) => response.data);
  }

  public async editNote(note: INotesApp) {
    return await axios
      .post("/notesApp/edit", { note })
      .then((response) => response.data);
  }

  public async removeNote(note: INotesApp) {
    return await axios
      .post("/notesApp/remove", { note })
      .then((response) => response.data);
  }
}
