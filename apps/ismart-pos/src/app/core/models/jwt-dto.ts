import { UsuarioVO } from "@intercam/model";

export class JwtDTO {
    public token: string;
    public type: string;
    public usuarioVO: UsuarioVO;
}