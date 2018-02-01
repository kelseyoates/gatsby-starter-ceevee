import React from 'react';
import ReactDOM from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import './node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';

const Example = () => (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Simple title</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>
                    Body content
                </p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Complex title</h3>
                <div>With a bit of description</div>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>
                    Body content
                </p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);

ReactDOM.render(<Example />, document.querySelector('[data-mount]'));