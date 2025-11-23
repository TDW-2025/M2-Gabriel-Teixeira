import React, { useState } from "react";
import { useGetAnimalsQuery, useVoteAnimalMutation } from "./apiSlice";
import styles from "./Cat.module.css";

export default function CatApi() {
  const [page, setPage] = useState(0);
  const [animalType, setAnimalType] = useState("cat");

  const { data, isLoading, isError } = useGetAnimalsQuery({
    type: animalType,
    page,
    limit: 5,
  });

  const [voteAnimal] = useVoteAnimalMutation();

  const handleVote = (id, value) => {
    voteAnimal({ image_id: id, value });
    alert(`Votaste ${value === 1 ? "UP" : "DOWN"}!`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro ao carregar imagens.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{animalType === "cat" ? "Gatos" : "Cães"}</h1>

      <div className={styles.buttonGroup}>
        <button onClick={() => { setAnimalType("cat"); setPage(0); }}>Gatos</button>
        <button onClick={() => { setAnimalType("dog"); setPage(0); }}>Cães</button>
      </div>

      <div className={styles.imageGrid}>
        {data.map((item) => (
          <div key={item.id} className={styles.imageCard}>
            <img src={item.url} alt={animalType} />
            <div className={styles.voteButtons}>
              <button onClick={() => handleVote(item.id, 1)}>UP</button>
              <button onClick={() => handleVote(item.id, 0)}>DOWN</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Página Anterior</button>
        <button onClick={() => setPage(page + 1)}>Próxima Página</button>
      </div>
    </div>
  );
}
