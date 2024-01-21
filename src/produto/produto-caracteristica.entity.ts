import { Entity } from 'typeorm'

@Entity({ name: 'produto_caracteristicas' })
export class CaracteristicaProduto {
    nome: string;
    descricao: string;
}