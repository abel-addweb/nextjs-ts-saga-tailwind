import { FC } from "react"

const SearchBar: FC<{handleChange: Function}> = ({handleChange}) => {
    return <div className="relative mr-6 my-2">
    <input
      type="search"
      className="bg-purple-white shadow rounded border-0 p-3"
      placeholder="Search ..."
      onChange={(e) => handleChange(e.target.value)}
    />
    <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
  </div>
}

export default SearchBar