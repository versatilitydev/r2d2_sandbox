type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};
const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users"
        value={value}
        onChange={handleInputChange}
        className="py-2 rounded-lg px-4 text-gray-150 w-full mt-4 mb-4 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  );
};

export default SearchInput;
