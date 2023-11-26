import ComponentTable from "../../dashboard/ComponentTable";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import { useGetFiles } from "../../dashboard/useGetFileList";

const FileList: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useGetFiles();

  return (
    <>
      <div>
        <Button onClick={() => navigate("/Components/addComponent")}>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Component
          </div>
        </Button>
      </div>
      <ComponentTable data={data} error={error} isLoading={isLoading} />
    </>
  );
};

export default FileList;
