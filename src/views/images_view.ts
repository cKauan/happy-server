import Image from "../models/Image";
export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${process.env.API_URL}:${process.env.PORT}/uploads/${image.path}`,
        };
    },
    renderMany(images: Image[]) {
        return images.map((images) => this.render(images));
    },
};
