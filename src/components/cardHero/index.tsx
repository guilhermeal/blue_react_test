import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { StyleCardHero } from "./style";
import { InfoOutlined } from "@mui/icons-material";

interface CharacterProps {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: any;
  thumbnail?: {
    path: string;
    extension: string;
  };
  comics?: any;
  stories?: any;
  events?: any;
  series?: any;
}

interface CardHeroProps {
  character: CharacterProps;
}

export function CardHero({ character }: CardHeroProps) {
  const thumb = `${character.thumbnail?.path}.${character.thumbnail?.extension}`;
  return (
    <StyleCardHero>
      <ImageListItem key={thumb} >
        <img
          src={`${thumb}?w=248&fit=crop&auto=format`}
          srcSet={`${thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={character.name}
          loading="lazy"
          style={{ borderRadius: "25px", width: "100%", height: "100%", boxShadow: "1px 6px 10px #000"}}
        />
        <ImageListItemBar
          title={character.name}
          subtitle={character.description}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.84)" }}
              aria-label={`info do heroi ${character.name}`}
            >
              <InfoOutlined />
            </IconButton>
          }
          style={{ borderRadius: "0px 0px 25px 25px" }}
        />
      </ImageListItem>
    </StyleCardHero>
  );
}
