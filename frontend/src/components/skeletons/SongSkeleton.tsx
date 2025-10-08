import React from 'react';
import {
  SkeletonContainer,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonFiltersContainer,
  SkeletonSearchInput,
  SkeletonFilterGroup,
  SkeletonFilterSelect,
  SkeletonResultsSummary,
  SkeletonSongList,
  SkeletonGrid,
  SkeletonSongCard,
  SkeletonSongHeader,
  SkeletonSongTitle,
  SkeletonAlbumBadge,
  SkeletonSongArtist,
  SkeletonSongMeta,
  SkeletonGenreTag,
  SkeletonHeaderActions,
  SkeletonAddButton,
  SkeletonPlusIcon,
  SkeletonArtistIcon,
  SkeletonSongTitleWrapper,
  SkeletonMusicNoteIcon,
  SkeletonPlayIndicator,
  SkeletonMenuButton
} from './SongSkeleton.style';

const SongsSkeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

  return (
    <SkeletonContainer>
      <SkeletonHeader>
        <SkeletonTitle />
        <SkeletonHeaderActions>
          <SkeletonAddButton >
            <SkeletonPlusIcon />
            Add Song
          </SkeletonAddButton>
        </SkeletonHeaderActions>
      </SkeletonHeader>

      {/* Skeleton Filters */}
      <SkeletonFiltersContainer>
        <SkeletonSearchInput />
        <SkeletonFilterGroup>
          <SkeletonFilterSelect />
          <SkeletonFilterSelect />
        </SkeletonFilterGroup>
      </SkeletonFiltersContainer>

      {/* Skeleton Results Summary */}
      <SkeletonResultsSummary />

      {/* Skeleton Song Grid */}
      <SkeletonSongList>
        <SkeletonGrid>
          {skeletonItems.map((index) => (
            <SkeletonSongCard key={index}>
              <SkeletonMenuButton />
              
              <SkeletonSongHeader>
                <SkeletonSongTitleWrapper>
                  <SkeletonMusicNoteIcon />
                  <SkeletonSongTitle>
                    <div className="title-line" />
                    <div className="subtitle-line" />
                  </SkeletonSongTitle>
                </SkeletonSongTitleWrapper>
                <SkeletonAlbumBadge />
              </SkeletonSongHeader>

              <SkeletonSongArtist>
                <SkeletonArtistIcon />
                <div className="artist-line" />
              </SkeletonSongArtist>

              <SkeletonSongMeta>
                <SkeletonGenreTag />
              </SkeletonSongMeta>

              <SkeletonPlayIndicator />
            </SkeletonSongCard>
          ))}
        </SkeletonGrid>
      </SkeletonSongList>
    </SkeletonContainer>
  );
};

export default SongsSkeleton;