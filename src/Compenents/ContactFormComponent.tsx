import {ChangeEvent, useEffect, useState} from "react";
import {Observer} from "mobx-react";
import {ContactService} from "../Services/ContactService";
import {Contact, ContactModel} from "../Models/ContactModel";
import {InputComponent} from "./InputComponent";
import {ButtonComponent} from "./ButtonComponent";
import {EmailModel} from "../Models/EmailModel";

export const ContactFormComponent = (props: any) => {
  const [contact, setContact] = useState<Contact>();
  const [email, setEmail] = useState<string>("");
  useEffect(() => {

    if (props.contactId) {
      const loadedContact = ContactService.loadContactById(props.contactId);
      setContact(loadedContact);
    } else {
      const newContact = ContactModel.create({
        firstName: "",
        lastName: ""
      })
      setContact(newContact);
    }

  }, [])

  if (!contact) {
    return <div>Loading</div>;
  }

  const addEmail = () => {
    const emailObject = EmailModel.create({
      email: email
    });
    contact.addEmail(emailObject)
  }

  return <div>
    <Observer>
      {() => {
        return <div>
          <InputComponent
            label={"First Name"}
            value={contact.firstName}
            onChange={(v: ChangeEvent<HTMLInputElement>) => {
              contact.setFirstName(v.target.value)
            }}
          />
          <InputComponent
            label={"Last Name"}
            value={contact.lastName}
            onChange={(v: ChangeEvent<HTMLInputElement>) => {
              contact.setLastName(v.target.value)
            }}
          />
          {contact.emails.map(email => (
              <div>
                {email}
                <div>Remove</div>
              </div>
            )
          )}
          <InputComponent
            placeholder={"email"}
            value={email}
            onChange={(v: ChangeEvent<HTMLInputElement>) => {
              setEmail(v.target.value)
            }}
          />
          <ButtonComponent
            label={"Add Email"}
            onClick={() => {
              addEmail()
            }}
          />
        </div>
      }}
    </Observer>
  </div>
}
