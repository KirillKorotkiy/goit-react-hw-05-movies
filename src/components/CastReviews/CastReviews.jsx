import { Links, LinkCast, LinkReviews } from "./CastReviews.styled"

export const CastReviews = () =>{

    return (
        <Links>
        <LinkCast to="cast">Cast</LinkCast>
        <LinkReviews  to='reviews' >Reviews</LinkReviews>
        </Links>
    )
}