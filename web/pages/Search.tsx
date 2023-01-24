import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Table from "../components/Table";
import Search from "../components/Search";
import { StoreContext } from "../store/StoreContext";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];

function SearchResults() {
  const { actions, state } = useContext(StoreContext);
  const [searchInput, setSearch] = useState<string>("");

  const { requestError, loading, resultList } = state;

  const fetchResults = () => {
    actions.searchItems({
      itemToSearch: searchInput,
    });
  };

  return (
    <>
      <Box padding={1}>
        <Search
          setSearchInput={setSearch}
          searchLabel="Search"
          searchInput={searchInput}
          triggerSearch={fetchResults}
          placeholder="University name"
        />
      </Box>
      <Box padding={1}>
        {requestError && (
          <Typography textAlign="center">Loading error</Typography>
        )}
        {loading && (
          <Typography textAlign="center">Loading Well Data...</Typography>
        )}
        {!loading && !!resultList?.length && (
          <Table data={resultList} columns={columns} />
        )}
        {!loading && resultList?.length === 0 && (
          <Typography textAlign="center">No Results</Typography>
        )}
      </Box>
    </>
  );
}

export default SearchResults;
