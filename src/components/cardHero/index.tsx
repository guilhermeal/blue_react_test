import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";
import { StyleCardHero } from "./style";
import { Characters } from "../../types/characters";

interface CardHeroProps {
  character: Characters;
  onOpenModal(data: Characters): void;
}

export function CardHero({ character, onOpenModal }: CardHeroProps) {
  const thumb = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  const handleClickHero = (character: Characters) => {
    onOpenModal(character);
  };

  return (
    <StyleCardHero>
      <ImageListItem key={character.id}>
        <img
          src={`${thumb}?w=238&fit=crop&auto=format`}
          srcSet={`${thumb}?w=238&fit=crop&auto=format&dpr=2 2x`}
          alt={character.name}
          title={character.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={character.name}
          subtitle={character.description}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`Herói ${character.name}`}
              onClick={() => handleClickHero(character)}
            >
              <InfoIcon titleAccess="Read more" />
            </IconButton>
          }
          style={{
            borderRadius: "0px 0px 25px 25px",
            fontWeight: "bold",
          }}
        />
      </ImageListItem>
    </StyleCardHero>
  );
}
