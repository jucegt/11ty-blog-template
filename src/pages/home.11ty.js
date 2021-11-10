export const data = () => {
  return {
    layout: 'home',
    permalink: '/',
  };
};

export const render = ({ config }) => {
  return /* html */ `
    ${config.ads ? '<div class="ads"></div>' : ''}
    <p>Home</p>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit necessitatibus enim odio laudantium? Eius voluptatibus dolore laboriosam fugiat totam expedita sapiente dicta, autem, unde accusamus alias corporis vero saepe! Natus est dolorum quidem iure vel, veritatis nostrum blanditiis saepe suscipit, quos quia voluptates provident ipsum ullam, soluta sunt. Totam perspiciatis sunt animi! Explicabo veniam placeat, perspiciatis nemo aliquam perferendis, officiis porro laborum atque ullam autem qui vitae, eum aut eveniet vel ea. Porro nesciunt omnis tempore placeat saepe rem, delectus vero ut quam modi labore dolor aut ullam excepturi voluptatum. Consequatur similique nihil officia! Sunt error minima aliquam sint architecto voluptatem pariatur rem impedit fugit, sit quam nisi consequatur placeat modi, autem ipsam non excepturi recusandae incidunt? Magnam iste reiciendis maxime ratione! Modi illo suscipit illum recusandae eaque totam animi quidem obcaecati sapiente expedita, ex eum quod, et tempora, voluptatibus esse est in? Nisi, tenetur molestiae quasi rerum, officia voluptate voluptatem incidunt, odio a dolorem explicabo est tempora veniam? Rem pariatur odio itaque dignissimos. Tempora officiis impedit vero quidem laudantium corrupti modi, unde maxime repellendus temporibus repudiandae hic natus? Explicabo nostrum soluta non fuga dignissimos. Nihil necessitatibus vitae, consectetur magni vero hic consequatur unde nam mollitia harum nemo sunt ullam!</p>
    </div>
    ${config.ads ? '<div class="ads"></div>' : ''}
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos reprehenderit natus ut iste molestiae neque, explicabo odit? Omnis reiciendis vero dolores impedit corrupti maiores alias, saepe, facilis soluta qui quia.</p>
  `;
};
