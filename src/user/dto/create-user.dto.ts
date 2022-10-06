import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends User {
 /**
    Necessário para criação do usuário é do tipo único e obrigatório.
    @example exemplo@atos.net
  */
  @IsEmail()
  email: string;

 /**
    Regras para criação de senha: Necessário conter entre 8 a 20 caracteres, letras maiúsculas e minúsculas, números e caracteres especiais.
    @example "Atos@2022"
  */
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  /**
    Necessário somente na criação de um novo usuário.
    @example "Neymar da Silva Junior"
 
  */
  @IsString()
  name: string;
}