import TextBlock from './TextBlock';

import { AdditionContentDiv, AdditionDiv, TitleH2 } from './styles';

const Addition = () => {
  return (
    <AdditionDiv>
      <TitleH2>
        In addition, Optum Behavioral Health provides special access In addition, Optum Behavioral Health provides
        special access In addition, Optum Behavioral Health provides special access{' '}
      </TitleH2>
      <AdditionContentDiv>
        <TextBlock
          title="Live and Work well"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. = facere maxime provident quae quas repudiandae saepe voluptatem."
        />
        <TextBlock
          title="title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem."
        />
        <TextBlock
          title="title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. pudiandae saepe voluptatem."
        />
        <TextBlock
          title="title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem."
        />
        <TextBlock
          title="title"
          text="Lorem ipsum dolor sit amet,  provident quae quas repudiandae saepe voluptatem."
        />
        <TextBlock
          title="title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem. explicabo facere maxime provident quae quas repudiandae saepe voluptatem."
        />
      </AdditionContentDiv>
    </AdditionDiv>
  );
};

export default Addition;
