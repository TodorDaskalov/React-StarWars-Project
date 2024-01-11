import { useEffect, useState } from "react";
import { getCharacters } from "../services/charactersService";

import styles from "./TablePage.module.css";

const TablePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCharacters()
            .then((charactersData) => {
                setData(charactersData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div className={styles.spinner}></div>
            ) : error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <div className={styles.mainContainer}>
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
            )}
        </div>
    );
};

export default TablePage;
