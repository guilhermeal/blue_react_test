import { Grid, Typography } from "@mui/material";
import { StyleCardComic, StyleDataCardComic, StyleCharacters } from "./style";
import { Comics } from "../../types/comics";
import { MenuBookOutlined, PaidOutlined } from "@mui/icons-material";

interface CardComicUniqueProps {
  comic: Comics;
  onGetInfoCharacter(): void;
}

interface CharacterComicProps {
  name: string;
  resourceURI: string;
}

interface CharactersComicProps extends Array<CharacterComicProps> {}

export function CardComic({ comic, onGetInfoCharacter }: CardComicUniqueProps) {
  const thumb = `${comic.thumbnail?.path}.${comic.thumbnail?.extension}`;

  // FUNÇÃO PARA RETORNAR DADOS DE CADA PERSONAGEM DO QUADRINHO LISTADO // PAUSEI POR FALHA NA API
  // const renderCharacters = (characters: CharactersComicProps) => {
  //   return characters.map((character) => {
  //     const split = character.resourceURI.split("/");
  //     const idCharacter = split.slice(-1)[0];
  //     const fullCharacter = onGetInfoCharacter(idCharacter, 1, false);
  //     return <span>{fullCharacter.name}</span>;
  //   });
  // };

  return (
    <StyleCardComic>
      <h1>READING SUGGESTION COMIC</h1>
      <Grid container spacing={5} style={{ marginTop: "2px" }}>
        <Grid item xs={12} md={6}>
          <StyleDataCardComic>
            <h1>{comic.title}</h1>
            <h3>{comic.description}</h3>
            <div>
              <span>
                <MenuBookOutlined />
                <Typography>{`Pages: ${comic.pageCount}`}</Typography>
              </span>
              <span>
                <PaidOutlined />
                <Typography>{`Price: ${comic.prices[0].price}`}</Typography>
              </span>
            </div>
          </StyleDataCardComic>

          {/* <StyleCharacters>
            {comic.characters.available > 0 &&
              renderCharacters(comic.characters.items)}
          </StyleCharacters> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={`${thumb}?w=300&fit=crop&auto=format`}
            srcSet={`${thumb}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={comic.title}
            loading="lazy"
            style={{
              borderRadius: "25px",
              width: "auto",
              height: "85%",
              boxShadow: "1px 6px 10px #000",
            }}
          />
        </Grid>
      </Grid>
    </StyleCardComic>
  );
}
