import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Note> {
    return this.notesService.findOne(id);
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    const note: Note = { ...createNoteDto, id: undefined };
    return this.notesService.create(note);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto): Promise<void> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.notesService.remove(id);
  }
}
