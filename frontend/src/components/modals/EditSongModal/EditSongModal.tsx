import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { updateSongRequest } from "../../../../store/slices/songSlice";
import type { Song } from "../../../../src/types";
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
} from "./EditSongModal.style";

interface EditSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song | null;
}

const EditSongModal = ({ isOpen, onClose, song }: EditSongModalProps) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);

  // Update form data when song changes
  useEffect(() => {
    if (song) {
      setFormData({
        title: song.title || "",
        artist: song.artist || "",
        album: song.album || "",
        genre: song.genre || "",
        
      });
    }
  }, [song]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!song?._id) return;
    
    setLoading(true);
    
    try {
      await dispatch(updateSongRequest({
        _id: song._id,
        ...formData
      }));
      onClose();
    } catch (error) {
      console.error("Error updating song:", error);
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

  const handleClose = () => {
    setFormData({
      title: "",
      artist: "",
      album: "",
      genre: "",
    });
    onClose();
  };

  if (!isOpen || !song) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>✏️ Edit Song</ModalTitle>
          <CloseButton onClick={handleClose}>×</CloseButton>
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
            <CancelButton type="button" onClick={handleClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Song"}
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditSongModal;