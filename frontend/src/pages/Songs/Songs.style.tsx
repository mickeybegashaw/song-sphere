import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;


export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #44559eff 0%, #492c65ff 100%);
    transform: translateY(-1px);
  }
`;

export const PlusIcon = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// Stats Components
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  text-align: center;
  border: 1px solid #f0f0f0;
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

// Filter Components
export const FiltersContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 0.95rem;
  width: 100%;
  max-width: 400px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const ResultsSummary = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #6b7280;
`;

export const ClearFilters = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Song List Components
export const SongList = styled.div`
  width: 100%;
  max-width: 1200px;
`;




// Loading and Error States
export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #6b7280;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #ef4444;
  text-align: center;
`;

// Music-themed enhancements
export const MusicIcon = styled.div`
  color: #667eea;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

export const MusicNoteIcon = styled.div`
  color: #667eea;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ArtistIcon = styled.div`
  color: #764ba2;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export const SongTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`;

export const SongCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f8f9fa;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.15);
    border-color: #e0e7ff;
    
   
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);

  }
`;

export const SongHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
`;

export const SongTitle = styled.h3`
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
  font-weight: 600;
  flex: 1;
`;

export const AlbumBadge = styled.span`
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #4b5563;
  font-size: 0.7rem;
  padding: 0.35rem 0.6rem;
  border-radius: 0.5rem;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid #e5e7eb;
`;

export const SongArtist = styled.p`
  color: #4b5563;
  margin: 0 0 1rem 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const SongMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const GenreTag = styled.span`
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  color: #0369a1;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid #bae6fd;
`;

export const Duration = styled.span`
  font-size: 0.8rem;
  color: #9ca3af;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const PlayIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.4rem;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Enhanced Empty State
export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #fafbff 0%, #f8faff 100%);
  border-radius: 1rem;
  border: 2px dashed #e0e7ff;
`;

export const EmptyText = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const EmptySubtext = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  max-width: 300px;
  margin: 0 auto;
  line-height: 1.5;
`;

// Enhanced Grid
export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Optional: Add a visualizer effect for fun
export const Visualizer = styled.div`
  display: flex;
  align-items: end;
  gap: 2px;
  height: 20px;
  margin-top: 0.5rem;
  
  div {
    width: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
    animation: equalizer 1.5s infinite ease-in-out;
    
    &:nth-child(1) { height: 30%; animation-delay: 0s; }
    &:nth-child(2) { height: 60%; animation-delay: 0.1s; }
    &:nth-child(3) { height: 40%; animation-delay: 0.2s; }
    &:nth-child(4) { height: 80%; animation-delay: 0.3s; }
    &:nth-child(5) { height: 50%; animation-delay: 0.4s; }
  }
  
  @keyframes equalizer {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.3); }
  }
`;