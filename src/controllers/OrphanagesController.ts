import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Orphanage from "../models/Orphanage";
import orphanageView from "../views/orphanages_view";

export default {
    async index(req: Request, res: Response) {
        const orphanageRepository = getRepository(Orphanage);
        const listOrphanages = await orphanageRepository.find({
            relations: ["images"],
        });

        return res.json(orphanageView.renderMany(listOrphanages));
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const orphanageRepository = getRepository(Orphanage);
        const orphanageDetails = await orphanageRepository.findOneOrFail(id, {
            relations: ["images"],
        });

        return res.json(orphanageView.render(orphanageDetails));
    },
    async create(req: Request, res: Response) {
        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map((image) => {
            return { path: image.filename };
        });

        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body;
        const orphanageRepository = getRepository(Orphanage);

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            images,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required("Campo nome é obrigatório"),
            latitude: Yup.number().required("Campo latitude é obrigatório"),
            longitude: Yup.number().required("Campo longitude é obrigatório"),
            about: Yup.string().required("Campo about é obrigatório").max(300),
            instructions: Yup.string().required(
                "Campo instructions é obrigatório"
            ),
            opening_hours: Yup.string().required(
                "Campo opening_hours é obrigatório"
            ),
            open_on_weekends: Yup.boolean().required(
                "Campo open_on_weekends é obrigatório"
            ),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(
                        "Campo path de images é obrigatório"
                    ),
                })
            ),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const createOrphanage = orphanageRepository.create(data);

        await orphanageRepository.save(createOrphanage);

        return res.status(201).json(createOrphanage);
    },
};
