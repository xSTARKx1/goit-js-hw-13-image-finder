import axios from 'axios';

const apiKey = '16292415-b72e1ae2e957998a23d4228ff';

export default {
  searchQuery: '',
  page: 1,
  async fetchImages() {
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`,
      );

      this.page += 1;
      return data;
    } catch (error) {
      throw error;
    }
  },

  resetPage() {
    this.page = 1;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
