import { sign } from "jsonwebtoken";

class GenerateTokenProvider{
    async execute(userId: string){
        const token = sign({}, process.env.JWT_SECRET, {
            subject: userId,
            expiresIn: "20s"
        });
        return token;
    }
}

export {GenerateTokenProvider}