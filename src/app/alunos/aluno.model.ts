import { Curso } from '../cursos/curso.model';

export class Aluno {
    id: number;
    nome: string;
    idade: string;
    cursoId: number;
    curso: Curso;
}
