import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  findOne(id: number): Promise<Note> {
    return this.notesRepository.findOne({ where: { id } });
  }

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.notesRepository.create(createNoteDto);
    return this.notesRepository.save(note);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<void> {
    await this.notesRepository.update(id, updateNoteDto);
  }

  async remove(id: number): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
