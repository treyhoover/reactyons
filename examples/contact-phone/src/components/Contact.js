import React from "react";
import { Ul, Li, Img, Div, Span, A } from "reactyons";

const ContactList = props => (
  <Ul list pl0 mt0 measure center {...props} />
);

const Contact = ({ children, img, name, company, phone, ...props }) => (
  <Li
    flex
    items-center
    lh-copy
    pa3
    ph0-l
    bb
    b--black-10
    {...props}
  >
    <Img w2 h2 w3-ns h3-ns br-100 src={img} alt={name} />
    <Div className="pl3 flex-auto">
      <Span className="f6 db black-70">{name}</Span>
      <Span className="f6 db black-70">{company}</Span>
    </Div>
    <A href={`tel:${phone}`} f6 link blue hover-dark-gray>{phone}</A>
  </Li>
);

Contact.List = ContactList;

export default Contact;
