import {
  Controller,
  Get,
  Route,
  Path,
  Post,
  Body,
  Put,
  Delete,
  Security,
} from 'tsoa';
import Event, { EventAttributes } from '../../models/Event';

import EventService from '../../services/EventService';

@Route('events')
export class EventController extends Controller {
  service: EventService = new EventService();

  @Security('jwt', ['organizer'])
  @Get('')
  public async index(): Promise<EventAttributes[]> {
    return this.service.findAll();
  }

  @Security('jwt', ['organizer'])
  @Get('{codigo}')
  public async show(@Path() codigo: string): Promise<EventAttributes> {
    return this.service.getById(codigo);
  }

  @Security('jwt', ['organizer'])
  @Post('')
  public async store(@Body() body: Event): Promise<EventAttributes> {
    return this.service.create(body);
  }

  @Security('jwt', ['organizer'])
  @Put('{codigo}')
  public async update(
    @Path() codigo: string,
    @Body() body: Event
  ): Promise<Event> {
    return this.service.update(codigo, body);
  }

  @Security('jwt', ['organizer'])
  @Delete('{codigo}')
  public async delete(@Path() codigo: string): Promise<string> {
    return this.service.delete(codigo);
  }
}
