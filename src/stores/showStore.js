import { create } from 'zustand';

const showStore = create((set) => ({
    fetchData: (id) => {
        console.log("Hello", id)
    }
}));

export default showStore;