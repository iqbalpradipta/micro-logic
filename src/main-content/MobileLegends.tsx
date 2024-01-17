import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, Table } from "react-bootstrap";

function MobileLegends() {
  const [hero, setHero] = useState<any[]>([]);
  const [filteredHero, setFilteredHero] = useState<any[]>([]);
  const [searchHero, setSearchHero] = useState<any>("");
  const getHero = async () => {
    try {
      let response = await axios.get(`https://api.dazelpro.com/mobile-legends/hero`);
      setHero(response.data.hero);
      setFilteredHero(response.data.hero);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getHero();
  }, []);

  const handleSearch = () => {
    const filterSearch = hero.filter((heroes) => heroes.hero_name.toLowerCase().includes(searchHero.toLowerCase()));
    setFilteredHero(filterSearch);
  };
  const handleReset = () => {
    getHero();
  };

  return (
    <>
      <p>Search Hero:</p>
      <Stack direction="horizontal" gap={3}>
        <input type="text" name="heroId" value={searchHero} onChange={(e) => setSearchHero(e.target.value)} className="form-control" />
        <button className="btn btn-warning" type="button" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-danger" type="button" onClick={handleReset}>
          Reset
        </button>
      </Stack>
      <Table striped responsive="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Hero</th>
            <th>Role</th>
            <th>Specially</th>
          </tr>
        </thead>
        <tbody>
          {filteredHero.map((heroes, index) => {
            return (
              <tr key={index}>
                <td>{heroes.hero_id - 5}</td>
                <td>{heroes.hero_name}</td>
                <td>{heroes.hero_role}</td>
                <td>{heroes.hero_specially}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default MobileLegends;
