import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./components/jobslist";
import {IntlProvider} from 'react-intl';
import  esMessages from "./locales/es.json";
import  enMessages from "./locales/en.json";

const locale = navigator.language;
const messages = locale.startsWith("es") ? esMessages : enMessages;

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);