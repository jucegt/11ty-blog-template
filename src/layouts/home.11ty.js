export const data = () => {
  return {
    layout: 'base',
  };
};

export const render = ({ content }) => {
  return /* html */ `
    <div class="home">${content}</div>
  `;
};
