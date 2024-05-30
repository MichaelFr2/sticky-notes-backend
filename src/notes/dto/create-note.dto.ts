import { IsString, IsNumber, Min } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  content: string;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  @Min(1)
  width: number;

  @IsNumber()
  @Min(1)
  height: number;
}
