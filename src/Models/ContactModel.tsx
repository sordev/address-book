import {cast, Instance, types} from "mobx-state-tree";
import {Phone, PhoneModel} from "./PhoneModel";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {Email, EmailModel} from "./EmailModel";

export const ContactModel = types.model("Phone", {
  id: types.optional(types.identifier, generateUniqueID()),
  firstName: types.string,
  lastName: types.string,
  nickName: types.optional(types.string, ""),
  phones: types.optional(types.array(PhoneModel), []),
  emails: types.optional(types.array(types.reference(EmailModel)), [])
}).actions(self => ({
  setFirstName(v: string) {
    self.firstName = v;
  },
  setLastName(v: string) {
    self.lastName = v;
  },
  setNickName(v: string) {
    self.nickName = v;
  },
  addEmail(v: Email) {
    self.emails.push(v);
  },
  removeEmail(v: Email) {

  },
  addPhone(v: Phone) {
    self.phones.push(v);
  },
  addPhones(v: Phone[]) {
    const mergedPhones = [...self.phones, ...v];
    self.phones = cast(mergedPhones);
  },
  removePhone(v: Phone) {

  }
}))

export interface Contact extends Instance<typeof ContactModel> {
}
