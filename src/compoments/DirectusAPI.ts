import type { Person } from "./Person";

export default class DirectusAPI {
  async fetchData(): Promise<Person[]> {
    const apiRes = await fetch("http://localhost:8055/items/People");
    const json = await apiRes.json();
    const result = json.data.map((person: Person) => {
      person.Image = `http://localhost:8055/assets/${person.Image}`;
      return person;
    });
    return result;
  }
}
