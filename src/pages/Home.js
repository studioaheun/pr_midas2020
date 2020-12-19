import React, {useEffect} from 'react';
import '../index.scss';

import Contents from '../components/Contents';
import Menu from '../components/Menu';

export default function Home() {
  useEffect(() => {
  
    const nav = document.getElementById("myNav");
    const stickyNav = nav.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > stickyNav) {
      nav.classList.add("sticky-header");

    } else {
      nav.classList.remove("sticky-header");
 
    }
  });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return(
    <div>
        <Menu></Menu>
        <Contents/>
    </div>
  );
}
