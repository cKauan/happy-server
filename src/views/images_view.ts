import Image from "../models/Image";
const server = "https://happy-servidor.herokuapp.com/uploads";
const localHost = 'http://localhost:5500'
export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${localHost}/${image.path}`,
        };
    },
    renderMany(images: Image[]) {
        return images.map((images) => this.render(images));
    },
};
