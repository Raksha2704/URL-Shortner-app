import * as React from 'react';

interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
<div className="bg-slate-900 text-white text-base text-center py-5">
Copyright &#169; URLShortner | Raksha
</div>
  );
};

export default Footer;
