const SearchUsers = ({ data, searchTerm }) => {
  return (
    <div>
      {data
        .filter((val) => {
          if (searchTerm === val) {
            return val;
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((value, key) => {
          return (
            <div className="user" key={key}>
              <p>{value.first_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchUsers;
