import {ContactModel} from "../Models/ContactModel";
import {types} from "mobx-state-tree";

export class ContactService {
  static loadContactById(contactId: number) {
    const contact = ContactModel.create({
      firstName: 'test',
      lastName: 'test2'
    })
    return contact;
  }
}
