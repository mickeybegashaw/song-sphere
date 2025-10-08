import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #f8f9fa;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

export const LastUpdated = styled.div`
  text-align: center;
  color: #6c757d;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  color: #34495e;
  font-size: 1.3rem;
  margin: 3rem 0 1.5rem 0;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  background: white;
  padding: 1.5rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-left: 4px solid #3498db;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(2) {
    border-left-color: #e74c3c;
  }

  &:nth-child(3) {
    border-left-color: #2ecc71;
  }

  &:nth-child(4) {
    border-left-color: #f39c12;
  }
`;

export const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 500;
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`;

export const ChartTitle = styled.h3`
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ecf0f1;
`;

export const ListContainer = styled.div`
  space-y: 0.5rem;
`;

export const ListItem = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f8f9fa;
  background: ${props => props.highlight ? '#f8f9fa' : 'transparent'};
  border-radius: 4px;
  margin-bottom: 0.25rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .rank {
    background: #3498db;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export const ListLabel = styled.div`
  flex: 1;
  color: #2c3e50;
  font-weight: 500;
`;

export const ListValue = styled.div`
  color: #7f8c8d;
  font-weight: 600;
`;

export const GenreBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0;
`;

export const BarLabel = styled.div`
  width: 120px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const BarFill = styled.div<{ percentage: number }>`
  flex: 1;
  background: linear-gradient(90deg, #3498db, #2980b9);
  height: 30px;
  border-radius: 6px;
  position: relative;
  transition: min-width 0.3s ease;

  .bar-text {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;

  h3 {
    margin-bottom: 1rem;
    color: #721c24;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: #6c757d;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #6c757d;
    margin-bottom: 0.5rem;
  }
`;

export const RefreshButton = styled.button<{ disabled?: boolean }>`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-weight: 500;
  opacity: ${props => props.disabled ? 0.6 : 1};
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #2980b9;
  }
`;