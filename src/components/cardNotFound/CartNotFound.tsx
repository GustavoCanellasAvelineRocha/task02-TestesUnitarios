import { CardNotFoundStyled } from "./CardNotFoundStyled";

export default function CardNotFound() {
  return (
    <>
      <CardNotFoundStyled>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/White_Walker-Game_of_Thrones-S02-E10.jpg/330px-White_Walker-Game_of_Thrones-S02-E10.jpg"
          alt="Imagem White Walker"
        />
        <blockquote>
          <p>"O inverno está chegando."</p>
        </blockquote>
      </CardNotFoundStyled>
    </>
  );
}
