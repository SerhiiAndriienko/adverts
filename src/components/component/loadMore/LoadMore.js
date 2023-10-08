import { LoadMoreBtn } from './LoadMore.styled';

export function LoadMore({ nextPage }) {
  return <LoadMoreBtn onClick={nextPage}>Load more</LoadMoreBtn>;
}
