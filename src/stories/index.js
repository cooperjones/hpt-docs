import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';

import { ComboBox } from '@highpoint/ui-elements';

import {Welcome} from './Welcome';
import {GoogleDoc} from './GoogleDoc';
import {TOC} from './TOC';
import {Links} from './Links';
import {Icons} from './Icons';
const googleDocs = [
  {
    chapterTitle: 'Standardization|Accessibility', 
    storyTitle: 'Aria-Live', 
    src: "https://docs.google.com/document/d/e/2PACX-1vSYegsTwIhcbhYmw7IWrrmSuYmo-24w-mEb-dL-ZcNfMvSv9LWGG7vvuCGK35FpcA_pOPpErLbvBi9g/pub?embedded=true",
    editSrc: "https://docs.google.com/document/d/1MlImX-xwJMh5hMXQCsdvzibqM327tRn1NMIg3zmoxm0/edit#"
  },
  {
    chapterTitle: 'Components|Notifications', 
    storyTitle: 'Docs', 
    src: "https://docs.google.com/document/d/e/2PACX-1vQ_keojMh2JXfBrIa9B6F8C-rU6bSXthaKa7wAYsBiMmtjg8cezTaHxRHDffu0pbQ5pVp21p8qemhbV/pub?embedded=true",
    editSrc: 'https://docs.google.com/document/d/1VQpSpyN915A7yMumlLVyPTtofNam3bH7paLfNW-JN0I/edit#'
  },
  {
    chapterTitle: 'Components|ModalNotifications', 
    storyTitle: 'Docs', 
    src: "https://docs.google.com/document/d/e/2PACX-1vQxu4srnRX8mnpOxpM4z1juKT_krCkP7YQMWxOLarkfdK65PUWR6fHckeoOMGNT5j9et8yAFobgsydm/pub?embedded=true",
    editSrc: 'https://docs.google.com/document/d/1VZ9fbRK7Uz76Dp_hlXJEwY53CpnOawwB8H4wB8scMUI/edit#'
  },
  {
    chapterTitle: 'Standardization|Workflow', 
    storyTitle: 'Git', 
    src: "https://docs.google.com/document/d/e/2PACX-1vTMqvSC7MZfB8MlzfRtIwNtcYxJef0afGsXDU_EdJxUGjJASsadnYd7MX5oGFi3bW78A7sA2fgwii3Y/pub?embedded=true",
    editSrc: "https://docs.google.com/document/d/1i-x-QHL4sHfo-Xy61wXY-CNL1gfx0p4WQfOvPbjVsRA/edit#"
  },
  {
    chapterTitle: 'Standardization|Workflow', 
    storyTitle: 'Frontend Testing', 
    src: "https://docs.google.com/document/d/e/2PACX-1vTT89u-9cWFwzcQtb8WP7vCipYe-kuX7di_AKYrfVxCeYNCj8W8_6726nqZ8Lms70lHchBtan0A-WXL/pub?embedded=true",
    editSrc: "https://docs.google.com/document/d/1HojwsMKq5W7hDkhhlPyUMlJb6wONHstFBJGnPpMb6A0/edit#"
  },
];

storiesOf('Welcome|Welcome', module).add('Welcome', () => <Welcome />);
/* storiesOf('Welcome', module).add('Table of Contents', () => <TOC />); */
storiesOf('Welcome|Welcome', module).add('Links', () => <Links />);
storiesOf('Components|ui-elements/Icons', module).add('Icons', () => <Icons />);
storiesOf('Components|ui-elements/ComboBox', module).addParameters({component: ComboBox}).add('Standard', () => 
    <ComboBox label="Combobox" value={''} onChange={newVal => {console.log(newVal);}} options={Array.from({length: 100}, (v, i) => [i.toString(), `Very long description extremely long Option ${i.toString()}`])}/>
    );


googleDocs.forEach((item) =>
storiesOf(item.chapterTitle, module).addParameters({options: {showPanel: false}}).add(item.storyTitle, () => <GoogleDoc src={item.src} editSrc={item.editSrc} />)
);