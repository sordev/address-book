import { cast, Instance, types } from "mobx-state-tree";
import { Phone, PhoneModel } from "./PhoneModel";

export const ContactModel = types.model("Phone", {
  id: types.identifier,
  firstName: types.string,
  lastName: types.string,
  nickName: types.optional(types.string, ""),
  phones: types.array(PhoneModel)
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

export interface Contact extends Instance<typeof ContactModel> {}
