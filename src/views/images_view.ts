import Image from "../models/Image";
export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `https://happy-servidor.herokuapp.com/uploads/${image.path}`,
        };
    },
    renderMany(images: Image[]) {
        return images.map((images) => this.render(images));
    },
};
