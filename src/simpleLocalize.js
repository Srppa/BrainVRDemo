import React from "react";
import {IntlProvider} from "react-intl";

function SimpleLocalize(props) {
  
  const language = props.language;
  const messages = props.messages;

  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      {props.children}
    </IntlProvider>
  );
}

export default SimpleLocalize;