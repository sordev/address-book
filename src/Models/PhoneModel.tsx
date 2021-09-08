import { Instance, types } from "mobx-state-tree";

export const PhoneModel = types.model("Phone", {
  id: types.identifier,
  number: types.string,
  note: types.optional(types.string, ""),
  type: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  emailType: types.optional(types.string, "")
})

export interface Phone extends Instance<typeof PhoneModel> {}
