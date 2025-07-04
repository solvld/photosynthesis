import React from 'react';
import { Container } from './Container';

const Header = () => {
  return (
    <header className="bg-[#12FF51]">
      <Container className="py-3.5">
        <h3 className="font-diatype tracking-2 w-full text-center text-[10px] uppercase lg:text-base">
          This is a pseudo-documentary exploration of photosynthesis, aimed at encouraging
          people to look at the world around them a little more broadly.
        </h3>
      </Container>
    </header>
  );
};

export default Header;
