import { Wrapper } from '../../styles';
import { AdditionDiv } from './styles';
import TextBlock from './TextBlock';

const Addition = () => {
  return (
    <Wrapper>
      <h4>In addition, Optum Behavioral Health provides special access to...</h4>
      <AdditionDiv>
        <TextBlock
          title="title"
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
      </AdditionDiv>
    </Wrapper>
  );
};

export default Addition;
