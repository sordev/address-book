import { Instance, types } from "mobx-state-tree";
import { ContactModel } from "./ContactModel";

export const RootStoreModel = types.model("RootStoreModel", {
  contacts: types.map(ContactModel)
})

export interface RootStore extends Instance<typeof RootStoreModel> {

}
