import styled from "styled-components";

interface TagProps {
  type: string;
}

const Tag = styled.span<TagProps>`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.4rem 1.2rem;
  margin: 1.5rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: ${(props) => `var(--color-${props.type}-700)`};
  background-color: ${(props) => `var(--color-${props.type}-100)`};
`;

export default Tag;
