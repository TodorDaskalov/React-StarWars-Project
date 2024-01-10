import { useEffect, useState } from "react";
import styles from "./TablePage.module.css";

const TablePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/people");
                const responseData = await response.json();
                setData(responseData.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <table className={styles.tableContainer}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mass</th>
                        <th>Height</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((character, index) => (
                        <tr key={index}>
                            <td>{character.name}</td>
                            <td>{character.mass}</td>
                            <td>{character.height}</td>
                            <td>{character.hair_color}</td>
                            <td>{character.skin_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
