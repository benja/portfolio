type Link = {
  text: string;
  onClick: () => void;
};

export const links = {
  socials: [
    {
      text: 'Say hello',
      onClick: () => {
        window.location.assign('mailto:benjaminakar2001@gmail.com');
      },
    },
    {
      text: 'twitter',
      onClick: () => {
        window.open('https://twitter.com/benjaminakar', '_blank');
      },
    },
    {
      text: 'github',
      onClick: () => {
        window.open('https://github.com/benja', '_blank');
      },
    },
  ] as Link[],
  writings: [
    {
      text: 'asdasdas',
      onClick: () => {},
    },
    {
      text: 'asdasdas',
      onClick: () => {},
    },
    {
      text: 'asdasdas',
      onClick: () => {},
    },
    {
      text: 'asdasdas',
      onClick: () => {},
    },
  ] as Link[],
};
