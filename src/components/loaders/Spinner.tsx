import { SyncLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex items-center text-center justify-center">
      <SyncLoader color="#36d7b7" />
    </div>
  );
}
