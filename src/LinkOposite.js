import React from "react";
import {Location} from '@reach/router';
import {getCurrentPageLanguage, getCurrentOpositePath} from "./linkUtils";

const LinkOposite = ({children = [], className = ""}) => {
  return (
    <Location>
      {locationProps => {

        const {pathname = ""} = locationProps.location;
        return <a className={className}
                  href={getCurrentOpositePath(pathname)}
                  hrefLang={getCurrentPageLanguage(pathname)}
        >
          {children}
        </a>;
      }}
    </Location>
  );
};

export default LinkOposite;