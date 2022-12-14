import { Request, Response } from "express";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import User from "../models/User";
import dataSource from './../data-source';
import AccountController, { accountRepo } from "./account-controller";

export const userRepo = dataSource.getRepository(User);

export default class UserController {
    static verifyUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userParam = req.body;

            const user = await userRepo.findOneBy({ email: userParam.email });

            if (!user) {
                return res.json({
                    user: null,
                    message: 'Usuário não encontrado'
                })
            }

            if (userParam.password !== user.password) {
                return res.json({
                    user: null,
                    message: 'Senha inválida'
                })
            };

            return res.status(200).json({
                user,
                message: 'Dados validados'
            });
        } 
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    }

    //GET
    static findAll = async (req: Request, res: Response): Promise<Response>  => {
        try {
            const users: User[] = await userRepo.find();
            return res.status(200).json(users);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    static findByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.params;

            const resp: User = await userRepo.findOneBy({ email });

            return res.status(200).json(resp);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    //POST
    static create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data: User = req.body;
            await userRepo.save(data);

            return res.status(201).json({
                message: 'Usuário criado com sucesso',
                data
            });
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    //PUT
    static updateByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data: QueryDeepPartialEntity<User> = req.body;
            const { email } = req.params;

            const { id }: User = await userRepo.findOneBy({ email });

            await userRepo.update(id, data);

            return res.status(300).json({
                message: `Usuário ${email} atualizado`
            });
        } 
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    //DELETE
    static deleteByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.params;

            const user: User = await userRepo.findOneBy({ email });

            await userRepo.delete(user.id);
            await AccountController.deleteByAccountNumber(user.account.accountNumber);

            return res.status(200).json({
                message: `Usuário e conta de ${email} deletado`
            });
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };
}