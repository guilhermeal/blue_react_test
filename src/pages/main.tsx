import { useEffect, useState } from "react";
import { TopBar } from "../components/topBar";
import { Loading } from "../components/loading";
import { api } from "../services/api";
import { CardHero } from "../components/cardHero";
import {
  Box,
  Button,
  Container,
  ImageList,
  Modal,
  Typography,
} from "@mui/material";

import { randomGenerator } from "../utils/random";

import { Characters } from "../types/characters";
import { Comics } from "../types/comics";
import { CardComic } from "../components/cardComic";

export function Main() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [character, setCharacter] = useState<Characters[]>([]);
  const [comic, setComic] = useState<Comics>();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<boolean | string>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Characters>();

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (hero: Characters) => {
    setSelectedCharacter(hero);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setSelectedCharacter(undefined);
    setModalOpen(false);
  };

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

  const getOneComic = async (
    idComic?: number,
    quantity?: number,
    randomic?: boolean
  ) => {
    try {
      setIsLoading(true);

      const response = await api
        .get(
          `/comics${idComic ? `/${idComic}` : ``}?offset=${
            randomic ? randomGenerator(1, 54065) : 0
          }&limit=${quantity ? quantity : 30}`
        )
        .finally(() => {
          setIsLoading(false);
        });
      setComic(response.data.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getHeroeByName = async (name: string) => {
    setCharacters([]);

    try {
      if (name.length === 0) {
        getCharacters(undefined, undefined, true);
      } else {
        setIsLoading(true);

        const response = await api
          .get(`/characters?nameStartsWith=${name}`)
          .finally(() => {
            setIsLoading(false);
          });

        setSearch(name);
        setCharacters(response.data.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters(undefined, undefined, true);
    getOneComic(undefined, 1, true);
  }, []);

  return (
    <div>
      <TopBar handleHeroeByName={getHeroeByName} />
      <div>
        {!search && comic && (
          <Container maxWidth="xl">
            <CardComic comic={comic} onGetInfoCharacter={getOneCharacter} />
          </Container>
        )}
        <Container maxWidth="xl">
          {search && !isLoading && !characters.length && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5rem",
                gap: "2rem",
              }}
            >
              <Typography variant="h4" component="h2">
                NENHUM HEROI ENCONTRADO!
              </Typography>
              <span
                style={{
                  fontSize: "2rem",
                  color: "red",
                }}
              >{`Você buscou por: ${search}`}</span>
            </div>
          )}

          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            MARVEL HEROES
          </h1>
          <ImageList variant="masonry" cols={3} gap={24}>
            {characters.map((char) => {
              return (
                <CardHero
                  key={char.id}
                  character={char}
                  onOpenModal={(hero) => handleModalOpen(hero)}
                />
              );
            })}
          </ImageList>
        </Container>
      </div>
      {selectedCharacter && (
        <Modal
          keepMounted
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="keep-mounted-modal-title"
              variant="h5"
              component="h2"
            >
              {selectedCharacter.name}
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              {selectedCharacter.description}
            </Typography>
            {selectedCharacter.comics.items.length > 0 && (
              <div style={{ marginTop: "2rem" }}>
                <span style={{ fontWeight: "bold" }}>COMICS:</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {selectedCharacter.comics.items.map((comic) => {
                    console.log("### COMIC ###", comic);
                    return <span key={comic.resourceURI}>{comic.name}</span>;
                  })}
                </div>
              </div>
            )}
            <Button
              variant="contained"
              onClick={handleModalClose}
              style={{
                marginTop: "3rem",
              }}
            >
              FECHAR
            </Button>
          </Box>
        </Modal>
      )}
      <Loading isLoading={isLoading} />
    </div>
  );
}
