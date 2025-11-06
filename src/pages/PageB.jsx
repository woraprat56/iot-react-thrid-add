import React from 'react';
import Headeriot from '../components/Headeriot';
import Footeriot from '../components/Footeriot';
import Navberiot from '../components/Navberiot';

export default function PageB() {
  return (
    <div>
      <Navberiot/>
      <Headeriot wow="หน้า B" woo="^o^"/>
      pageB
      <Footeriot/>
    </div>
  );
}