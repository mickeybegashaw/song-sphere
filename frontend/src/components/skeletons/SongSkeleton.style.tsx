import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Pulse animation
const pulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.02); }
  100% { opacity: 1; transform: scale(1); }
`;

// Base skeleton style
const SkeletonBase = styled.div`
  background-color: #e5e7eb;
  border-radius: 8px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

// Container
export const SkeletonContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #f9fafb;
  min-height: 100vh;
`;

// Header
export const SkeletonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SkeletonTitle = styled(SkeletonBase)`
  width: 200px;
  height: 36px;
`;

export const SkeletonHeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SkeletonAddButton = styled(SkeletonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 130px;
  height: 40px;
  color: #9ca3af;
  background-color: #e5e7eb;
  cursor: not-allowed;
`;

export const SkeletonPlusIcon = styled(SkeletonBase)`
  width: 16px;
  height: 16px;
  border-radius: 4px;
`;

// Filters
export const SkeletonFiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`;

export const SkeletonSearchInput = styled(SkeletonBase)`
  flex: 1;
  min-width: 250px;
  height: 44px;
`;

export const SkeletonFilterGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SkeletonFilterSelect = styled(SkeletonBase)`
  width: 150px;
  height: 44px;
`;

// Results summary
export const SkeletonResultsSummary = styled(SkeletonBase)`
  width: 180px;
  height: 18px;
  border-radius: 6px;
  margin-bottom: 1.5rem;
`;

// Song list grid
export const SkeletonSongList = styled.div`
  margin-top: 1rem;
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

// Song card
export const SkeletonSongCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 160px;
  position: relative;
`;

export const SkeletonMenuButton = styled(SkeletonBase)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
`;

export const SkeletonSongHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const SkeletonSongTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1;
`;

export const SkeletonMusicNoteIcon = styled(SkeletonBase)`
  width: 16px;
  height: 16px;
`;

export const SkeletonSongTitle = styled.div`
  flex: 1;

  .title-line {
    width: 120px;
    height: 14px;
    background-color: #e5e7eb;
    border-radius: 4px;
    margin-bottom: 6px;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  .subtitle-line {
    width: 80px;
    height: 10px;
    background-color: #e5e7eb;
    border-radius: 4px;
    animation: ${pulse} 1.5s ease-in-out infinite;
    animation-delay: 0.2s;
  }
`;

export const SkeletonAlbumBadge = styled(SkeletonBase)`
  width: 60px;
  height: 20px;
  border-radius: 10px;
`;

export const SkeletonSongArtist = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  .artist-line {
    width: 100px;
    height: 12px;
    background-color: #e5e7eb;
    border-radius: 4px;
    animation: ${pulse} 1.5s ease-in-out infinite;
    animation-delay: 0.3s;
  }
`;

export const SkeletonArtistIcon = styled(SkeletonBase)`
  width: 12px;
  height: 12px;
`;

export const SkeletonSongMeta = styled.div`
  margin-bottom: 1rem;
`;

export const SkeletonGenreTag = styled(SkeletonBase)`
  width: 70px;
  height: 22px;
  border-radius: 12px;
`;

export const SkeletonPlayIndicator = styled(SkeletonBase)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
