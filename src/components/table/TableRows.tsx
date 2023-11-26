/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { HashFile } from "../../settings/constants";
import Tag from "../Tag";

const StyledTd = styled.td`
  padding: 1.2rem;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  color: ${(props) => (props.color ? "blue" : "none")};
  white-space: nowrap;
  position: relative;

  &:hover {
    overflow: visible;
    white-space: normal;
    max-height: none;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Optional: add a shadow effect on hover
  }
`;
type FileRowProps = {
  file: HashFile;
};

const TableRow: React.FC<FileRowProps> = ({ file }) => {
  return (
    <tr className="shadow-lg text-center w-fit">
      <StyledTd title={file.file_name}>{file.file_name}</StyledTd>
      <StyledTd>
        <Tag type="green">{file.file_hash}</Tag>
      </StyledTd>
      <StyledTd>
        <Tag type="blue">{file.vendor}</Tag>
      </StyledTd>
      <StyledTd>{file.product}</StyledTd>
      <StyledTd>{file.version}</StyledTd>
      <StyledTd>{file.edition}</StyledTd>
      <StyledTd>{file.update}</StyledTd>
      <StyledTd>{file.language}</StyledTd>
      {file.checked ? (
        <StyledTd>
          <Tag type="green">True</Tag>
        </StyledTd>
      ) : (
        <StyledTd>
          <Tag type="red">False</Tag>
        </StyledTd>
      )}
    </tr>
  );
};

export default TableRow;
