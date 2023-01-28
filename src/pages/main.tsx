import { useEffect, useState } from "react";
import { TopBar } from "../components/topBar";
import { Loading } from "../components/loading";
import { api } from "../services/api";
import { CardHero } from "../components/cardHero";

import { ListCards } from "./style";
import { Container, Divider } from "@mui/material";

import { randomGenerator } from "../utils/random";
import { CardHeroUnique } from "../components/cardHeroUnique";

interface CharacterProps {
  id?: number;
  description?: string;
  name?: string;
  comics?: any;
  events?: any;
  series?: any;
  stories?: any;
  thumbnail?: any;
  urls?: any;
  resourceURI?: string;
  modified?: Date;
}

export function Main() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [character, setCharacter] = useState<CharacterProps>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = async (
    idCharacter?: number,
    quantity?: number,
    randomic?: boolean
  ) => {
    try {
      setIsLoading(true);

      const response = await api
        .get(
          `/characters${idCharacter ? `/${idCharacter}` : ``}?offset=${
            randomic ? randomGenerator(1, 1562) : 0
          }&limit=${quantity ? quantity : 30}`
        )
        .finally(() => {
          setIsLoading(false);
        });
      setCharacters(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getOneCharacter = async (
    idCharacter?: number,
    quantity?: number,
    randomic?: boolean
  ) => {
    try {
      setIsLoading(true);

      const response = await api
        .get(
          `/characters${idCharacter ? `/${idCharacter}` : ``}?offset=${
            randomic ? randomGenerator(1, 1562) : 0
          }&limit=${quantity ? quantity : 30}`
        )
        .finally(() => {
          setIsLoading(false);
        });
      setCharacter(response.data.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getHeroeByName = async (name: string) => {
    try {
      setIsLoading(true);

      const response = await api
        .get(`/characters?nameStartsWith=${name}`)
        .finally(() => {
          setIsLoading(false);
        });

      setCharacters(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters(undefined, undefined, true);
    getOneCharacter(undefined, 1, true);
  }, []);

  return (
    <div>
      <TopBar handleHeroeByName={getHeroeByName} />
      <div>
        <Container maxWidth="xl">
          <CardHeroUnique character={character} />
        </Container>
        <Divider />
        <Container maxWidth="xl">
          <ListCards>
            {characters.map((char) => {
              return <CardHero key={char.id} character={char} />;
            })}
          </ListCards>
        </Container>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
}
