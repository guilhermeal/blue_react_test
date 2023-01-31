import { Grid } from "@mui/material";
import { StyleCardHero, StyleDataCardHero } from "./style";
import { Characters } from "../../types/characters";

interface CardHeroUniqueProps {
  character: Characters;
}

export function CardHeroUnique({ character }: CardHeroUniqueProps) {
  const thumb = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <StyleCardHero>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <StyleDataCardHero>
            <h1>{character.name}</h1>
            <h3>{character.description}</h3>
          </StyleDataCardHero>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={`${thumb}?w=300&fit=crop&auto=format`}
            srcSet={`${thumb}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={character.name}
            loading="lazy"
            style={{
              borderRadius: "25px",
              width: "auto",
              height: "100%",
              boxShadow: "1px 6px 10px #000",
            }}
          />
        </Grid>
      </Grid>
    </StyleCardHero>
  );
}
