import {Instance, types} from "mobx-state-tree";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export const EmailModel = types.model("Email", {
  id: types.optional(types.identifier, generateUniqueID()),
  email: types.string
})

export interface Email extends Instance<typeof EmailModel> {

}
