import { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { addSongRequest } from "../../../../store/slices/songSlice";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ButtonGroup,
  CancelButton,
  SubmitButton
} from "./AddSongModal.style";

interface AddMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMusicModal = ({ isOpen, onClose }: AddMusicModalProps) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
    duration: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await dispatch(addSongRequest(formData));
      setFormData({ title: "", artist: "", album: "", genre: "", duration: "" });
      onClose();
    } catch (error) {
      console.error("Error adding song:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>🎵 Add New Song</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Song Title *</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter song title"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="artist">Artist *</Label>
            <Input
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              placeholder="Enter artist name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="album">Album</Label>
            <Input
              type="text"
              id="album"
              name="album"
              value={formData.album}
              onChange={handleChange}
              placeholder="Enter album name"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="genre">Genre</Label>
            <Select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            >
              <option value="">Select Genre</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Jazz">Jazz</option>
              <option value="Hip Hop">Hip Hop</option>
              <option value="Classical">Classical</option>
              <option value="Electronic">Electronic</option>
              <option value="R&B">R&B</option>
              <option value="Country">Country</option>
              <option value="Metal">Metal</option>
              <option value="Folk">Folk</option>
              <option value="Other">Other</option>
            </Select>
          </FormGroup>

          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Song"}
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddMusicModal;

